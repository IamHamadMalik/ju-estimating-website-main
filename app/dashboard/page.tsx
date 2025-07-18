"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  DollarSign,
  Users,
  CreditCard
} from "lucide-react"
import { getDashboardMetrics } from "@/app/actions"

export default function DashboardPage() {
  const router = useRouter()
  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    subscriberCount: 0,
    totalSales: 0,
    recentQuotes: [],
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAuth = localStorage.getItem("auth")
      if (!isAuth) {
        router.replace("/login")
        return
      }
    }

    getDashboardMetrics().then(setMetrics)
  }, [router])

  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:col-span-2">
        <Card>
          <CardHeader className="pb-2 flex justify-between">
            <div>
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <CardDescription>Based on project estimates</CardDescription>
            </div>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${metrics.totalRevenue.toLocaleString()}</div>
            <Link href="/dashboard/quotes" className="text-sm text-blue-600 hover:underline mt-2 block">
              View details
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 flex justify-between">
            <div>
              <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
              <CardDescription>Total newsletter subscribers</CardDescription>
            </div>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{metrics.subscriberCount}</div>
            <Link href="/dashboard/newsletter" className="text-sm text-blue-600 hover:underline mt-2 block">
              View details
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 flex justify-between">
            <div>
              <CardTitle className="text-sm font-medium">Quotes Submitted</CardTitle>
              <CardDescription>Total quote requests</CardDescription>
            </div>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{metrics.totalSales}</div>
            <Link href="/dashboard/quotes" className="text-sm text-blue-600 hover:underline mt-2 block">
              View details
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="xl:col-span-1">
        <CardHeader>
          <CardTitle>Recent Quotes</CardTitle>
          <CardDescription>{metrics.recentQuotes.length} recent submissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {metrics.recentQuotes.length === 0 ? (
            <p className="text-muted-foreground">No recent quotes.</p>
          ) : (
            <>
              {metrics.recentQuotes.map((q: any) => (
                <div key={q.id} className="text-sm">
                  <p className="font-medium">{q.name || "Anonymous"}</p>
                  <p className="text-muted-foreground">
                    {q.project_value?.replace(/-/g, " ").toUpperCase() || "N/A"} –{" "}
                    {new Date(q.submitted_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
              <Link href="/dashboard/quotes" className="text-sm text-blue-600 hover:underline block mt-4">
                View all quotes
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
