"use client"

import { useEffect, useState } from "react"
import { getDashboardCounts, getDailyAnalytics } from "@/app/actions"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Users,
  CreditCard
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

// CSV download helper
function downloadCSV(data: any[], filename = "analytics.csv") {
  const headers = ["Date", "Subscribers", "Quotes"]
  const csvRows = [
    headers.join(","),
    ...data.map(row => `${row.date},${row.subscribers},${row.quotes}`)
  ]

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

export default function AnalyticsPage() {
  const [counts, setCounts] = useState({ totalSubscribers: 0, totalQuotes: 0 })
  const [analyticsData, setAnalyticsData] = useState<any[]>([])
  const activeNow = Math.floor(Math.random() * 100) + 1

  useEffect(() => {
    getDashboardCounts().then(setCounts)
    getDailyAnalytics().then(setAnalyticsData)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {/* Summary Cards */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{counts.totalSubscribers}</div>
          <p className="text-xs text-muted-foreground">Total subscribers</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Quotes</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{counts.totalQuotes}</div>
          <p className="text-xs text-muted-foreground">Quotes submitted</p>
        </CardContent>
      </Card>

      {/* Overview Chart */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Subscribers and Quote Requests per Day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => downloadCSV(analyticsData)}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 text-sm font-medium"
            >
              Export CSV
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="subscribers" fill="#4F46E5" name="Subscribers" />
                <Bar dataKey="quotes" fill="#10B981" name="Quotes" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
