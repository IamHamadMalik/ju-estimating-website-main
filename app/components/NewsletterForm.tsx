"use client"

import { useEffect } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { submitNewsletterEmail } from "@/app/actions"

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(submitNewsletterEmail, null)

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="newsletter-email" className="sr-only">
          Email Address
        </Label>
        <Input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Enter your email for newsletter"
          className="bg-slate-700 border-slate-600 text-white"
          required
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
        disabled={isPending}
      >
        {isPending ? "Subscribing..." : "Subscribe to Newsletter"}
      </Button>
    </form>
  )
}
