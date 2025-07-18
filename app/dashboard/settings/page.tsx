"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    company_name: "",
    email: "",
    phone: "",
    address: "",
  })

  const [userId, setUserId] = useState<string | null>(null)

  // Fetch current user and their setting
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !user) return

      setUserId(user.id)

      const { data, error } = await supabase
        .from("setting")
        .select("*")
        .eq("id", user.id)
        .single()

      if (!error && data) {
        setForm({
          company_name: data.company_name || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
        })
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async () => {
    if (!userId) return

    const { error } = await supabase.from("setting").upsert({
      id: userId,
      ...form,
    })

    if (error) {
      console.error("Error saving settings:", error)
    } else {
      alert("Settings saved successfully!")
    }
  }

  if (loading) return <p>Loading settings...</p>

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>General Profile Settings</CardTitle>
          <CardDescription>Manage your account and profile settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="company_name">Name</Label>
            <Input id="company_name" value={form.company_name} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Contact Email</Label>
            <Input id="email" type="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" value={form.address} onChange={handleChange} />
          </div>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}
