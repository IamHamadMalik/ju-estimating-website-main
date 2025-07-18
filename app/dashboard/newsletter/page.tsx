"use client"

import { useEffect, useState } from "react"
import { getNewsletterSubscribers } from "@/app/actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function NewsletterSubscribersPage() {
  const [subscribers, setSubscribers] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getNewsletterSubscribers()
      setSubscribers(data)
    }

    fetchData()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleExportCSV = () => {
    const header = ["Email", "Subscribed At"]
    const rows = subscribers.map((s) => [
      s.email,
      formatDate(s.subscribed_at),
    ])

    const csvContent =
      [header, ...rows].map((row) => row.join(",")).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "newsletter-subscribers.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="grid gap-4 md:gap-8">
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Newsletter Subscribers</CardTitle>
            <CardDescription>
              A list of all users subscribed to your newsletter.
            </CardDescription>
          </div>
          <Button onClick={handleExportCSV} disabled={subscribers.length === 0}>
            Export CSV
          </Button>
        </CardHeader>

        <CardContent>
          {subscribers.length === 0 ? (
            <p className="text-muted-foreground">No subscribers yet.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Subscribed At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscribers.map((subscriber) => (
                  <TableRow key={subscriber.id}>
                    <TableCell className="font-medium">{subscriber.email}</TableCell>
                    <TableCell>{formatDate(subscriber.subscribed_at)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
