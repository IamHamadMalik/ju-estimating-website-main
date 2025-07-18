"use client"

import { useEffect, useState } from "react"
import { getContactSubmissions } from "@/app/actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText, Calendar, User, Building, Phone, Mail, Clock, DollarSign
} from "lucide-react"

export default function QuotesPage() {
  const [submissions, setSubmissions] = useState<any[]>([])

  useEffect(() => {
    async function fetchSubmissions() {
      const data = await getContactSubmissions()
      setSubmissions(data)
    }
    fetchSubmissions()
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
    const header = [
      "Name", "Email", "Phone", "Company", "Project Type",
      "Project Value", "Timeline", "Message", "Submitted At"
    ]

    const rows = submissions.map(sub => [
      sub.name,
      sub.email,
      sub.phone || "",
      sub.company || "",
      sub.projectType || "",
      sub.projectValue || "",
      sub.timeline || "",
      (sub.message || "").replace(/[\r\n]+/g, " "), // flatten message
      formatDate(sub.submittedAt)
    ])

    const csvContent = [header, ...rows].map(row =>
      row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(",")
    ).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "quote-requests.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getProjectTypeColor = (type?: string) => {
    switch (type) {
      case "commercial": return "bg-blue-100 text-blue-800"
      case "residential": return "bg-green-100 text-green-800"
      case "industrial": return "bg-purple-100 text-purple-800"
      case "healthcare": return "bg-red-100 text-red-800"
      case "education": return "bg-yellow-100 text-yellow-800"
      case "retail": return "bg-pink-100 text-pink-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getTimelineColor = (timeline?: string) => {
    switch (timeline) {
      case "asap": return "bg-red-100 text-red-800"
      case "1-week": return "bg-orange-100 text-orange-800"
      case "2-weeks": return "bg-yellow-100 text-yellow-800"
      case "1-month": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quote Requests</h1>
          <p className="text-muted-foreground">Manage and review all quote requests from your website.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={handleExportCSV} disabled={submissions.length === 0}>
            Export CSV
          </Button>
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-medium">{submissions.length} Total Requests</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.length}</div>
            <p className="text-xs text-muted-foreground">All time submissions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                submissions.filter((sub) => {
                  const date = new Date(sub.submittedAt)
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  return date >= weekAgo
                }).length
              }
            </div>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Urgent Requests</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter((sub) => sub.timeline === "asap").length}
            </div>
            <p className="text-xs text-muted-foreground">ASAP timeline</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">High Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter(sub =>
                sub.projectValue === "5m-plus" || sub.projectValue === "1m-5m").length}
            </div>
            <p className="text-xs text-muted-foreground">$1M+ projects</p>
          </CardContent>
        </Card>
      </div>

      {/* Quote Request List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Quote Requests</CardTitle>
          <CardDescription>A list of all quote requests submitted through your website.</CardDescription>
        </CardHeader>
        <CardContent>
          {submissions.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No quote requests yet</h3>
              <p className="text-muted-foreground">Quote requests will appear here when submitted.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <Card key={submission.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-semibold">{submission.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{submission.email}</span>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{submission.phone}</span>
                          </div>
                        )}
                        {submission.company && (
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{submission.company}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        {submission.projectType && (
                          <div>
                            <span className="text-sm text-muted-foreground">Project Type:</span>
                            <Badge className={`ml-2 ${getProjectTypeColor(submission.projectType)}`}>
                              {submission.projectType.charAt(0).toUpperCase() + submission.projectType.slice(1)}
                            </Badge>
                          </div>
                        )}
                        {submission.projectValue && (
                          <div>
                            <span className="text-sm text-muted-foreground">Project Value:</span>
                            <Badge variant="outline" className="ml-2">{submission.projectValue}</Badge>
                          </div>
                        )}
                        {submission.timeline && (
                          <div>
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <Badge className={`ml-2 ${getTimelineColor(submission.timeline)}`}>
                              {submission.timeline === "asap" ? "ASAP" : submission.timeline}
                            </Badge>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{formatDate(submission.submittedAt)}</span>
                        </div>
                        {submission.message && (
                          <div>
                            <span className="text-sm text-muted-foreground">Message:</span>
                            <p className="text-sm mt-1 p-2 bg-muted rounded-md">
                              {submission.message.length > 100
                                ? `${submission.message.substring(0, 100)}...`
                                : submission.message}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
