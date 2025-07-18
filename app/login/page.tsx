"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Lock } from "lucide-react"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      localStorage.setItem("auth", "true")
      router.push("/dashboard")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-200 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-200 rounded-full opacity-30 blur-3xl animate-pulse" />

      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-md animate-fade-in">
        <CardHeader className="text-center space-y-2">
          {/* Logo placeholder */}
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </span>
          </div>
          <CardTitle className="text-3xl font-extrabold text-indigo-700 tracking-tight">Welcome Back</CardTitle>
          <CardDescription className="text-base text-gray-500">Sign in to your admin dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-100 border border-red-300 text-red-600 rounded px-3 py-2 text-sm text-center animate-shake">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 rounded shadow-lg transition-all duration-200"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
              {loading ? "Signing in..." : "Login"}
            </Button>
            <div className="text-xs text-gray-400 text-center pt-2">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
