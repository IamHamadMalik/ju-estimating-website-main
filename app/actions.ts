"use server"

import { revalidatePath } from "next/cache"
import { supabase } from "@/lib/supabaseClient"

export async function submitNewsletterEmail(_: any, formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." }
  }

  // Check if already subscribed
  const { data: existing, error: checkError } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .eq("email", email)
    .single()

  if (checkError && checkError.code !== "PGRST116") {
    // PGRST116 = No rows found (safe to ignore in this context)
    return { success: false, message: checkError.message }
  }

  if (existing) {
    return { success: false, message: "This email is already subscribed." }
  }

  // Add to Supabase
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert([{ email }])

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath("/dashboard/newsletter")

  return { success: true, message: "Thank you for subscribing to our newsletter!" }
}

export async function submitContactForm(_: any, formData: FormData) {
  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || null,
    phone: formData.get("phone") || null,
    project_type: formData.get("projectType") || null,
    project_value: formData.get("projectValue") || null,
    timeline: formData.get("timeline") || null,
    message: formData.get("message") || null,
  }

  const { error } = await supabase.from("quote_requests").insert([submission])

  if (error) {
    console.error("Quote submission error:", error.message)
    return { success: false, message: "Failed to submit. Please try again later." }
  }

  revalidatePath("/dashboard/quotes")

  return { success: true, message: "Your quote request has been submitted successfully." }
}

// Get all quote submissions for dashboard
export async function getContactSubmissions() {
  const { data, error } = await supabase
    .from("quote_requests")
    .select("*")
    .order("submitted_at", { ascending: false })

  if (error) {
    console.error("Error fetching quote submissions:", error.message)
    return []
  }

  return data.map((entry) => ({
    ...entry,
    projectType: entry.project_type,
    projectValue: entry.project_value,
    submittedAt: entry.submitted_at,
  }))
}

// Get all newsletter subscribers
export async function getNewsletterSubscribers() {
  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false })

  if (error) {
    console.error("Error fetching subscribers:", error.message)
    return []
  }

  return data
}

export async function getDashboardCounts() {
  const [{ count: subscriberCount }, { count: quoteCount }] = await Promise.all([
    supabase
      .from("newsletter_subscribers")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("quote_requests")
      .select("*", { count: "exact", head: true }),
  ])

  return {
    totalSubscribers: subscriberCount || 0,
    totalQuotes: quoteCount || 0,
  }
}

export async function getDailyAnalytics() {
  const [subscribers, quotes] = await Promise.all([
    supabase
      .from("newsletter_subscribers")
      .select("subscribed_at"),
    supabase
      .from("quote_requests")
      .select("submitted_at")
  ])

  if (subscribers.error || quotes.error) {
    console.error("Error fetching analytics data")
    return []
  }

  // Group and format by date
  const countsByDate: Record<string, { subscribers: number; quotes: number }> = {}

  subscribers.data.forEach(({ subscribed_at }) => {
    const date = new Date(subscribed_at).toISOString().split("T")[0]
    countsByDate[date] = countsByDate[date] || { subscribers: 0, quotes: 0 }
    countsByDate[date].subscribers += 1
  })

  quotes.data.forEach(({ submitted_at }) => {
    const date = new Date(submitted_at).toISOString().split("T")[0]
    countsByDate[date] = countsByDate[date] || { subscribers: 0, quotes: 0 }
    countsByDate[date].quotes += 1
  })

  return Object.entries(countsByDate)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, counts]) => ({
      date,
      ...counts,
    }))
}

export async function getDashboardMetrics() {
  const [{ count: subscriberCount }, { data: quotes }] = await Promise.all([
    supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
    supabase.from("quote_requests").select("*").order("submitted_at", { ascending: false }),
  ])

  const totalRevenue = quotes.reduce((sum, q) => {
    switch (q.project_value) {
      case "5m-plus": return sum + 5000000
      case "1m-5m": return sum + 1000000
      case "500k-1m": return sum + 500000
      case "100k-500k": return sum + 100000
      case "under-100k": return sum + 50000
      default: return sum
    }
  }, 0)

  return {
    subscriberCount: subscriberCount || 0,
    totalRevenue,
    totalSales: quotes.length,
    recentQuotes: quotes.slice(0, 5),
  }
}

