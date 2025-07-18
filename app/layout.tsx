import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navigation from "./components/Navigation" // Added import
import Footer from "./components/Footer" // Added import

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Construction Estimating Services | Professional Cost Analysis",
  description:
    "Expert construction estimating services for commercial, residential, and industrial projects. Get accurate cost estimates and takeoffs from certified professionals.",
  keywords: "construction estimating, cost estimation, takeoff services, construction bidding, project estimation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navigation /> {/* Added Navigation */}
          {children}
          <Footer /> {/* Added Footer */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
