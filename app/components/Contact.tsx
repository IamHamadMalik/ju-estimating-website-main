"use client"
import { useEffect } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { toast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions"

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Your Free Estimate Today</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to get started? Contact us for a free consultation and detailed estimate for your next construction
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-300">Full Name *</Label>
                      <Input id="name" name="name" className="bg-slate-700 border-slate-600 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-300">Email Address *</Label>
                      <Input id="email" type="email" name="email" className="bg-slate-700 border-slate-600 text-white" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-slate-300">Company Name</Label>
                      <Input id="company" name="company" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-300">Phone Number</Label>
                      <Input id="phone" name="phone" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-slate-300">Project Type *</Label>
                      <Select name="projectType" required>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-slate-300">Estimated Project Value</Label>
                      <Select name="projectValue">
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select value range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100k">Under $100K</SelectItem>
                          <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-plus">$5M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-slate-300">Timeline</Label>
                    <Select name="timeline">
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="When do you need the estimate?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-week">Within 1 week</SelectItem>
                        <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your project, including scope, location, and any specific requirements..."
                      className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold" disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-amber-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">{siteConfig.phoneDisplay}</div>
                      <div className="text-slate-400 text-sm">Main Office</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-amber-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">{siteConfig.email}</div>
                      <div className="text-slate-400 text-sm">Get a Quote</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">{siteConfig.address.street}</div>
                      <div className="text-slate-400 text-sm">
                        {siteConfig.address.suite}, {siteConfig.address.city}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Monday - Friday</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Saturday</span>
                    <span className="text-white">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-900/20 rounded-lg">
                  <div className="flex items-center text-amber-400 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">Emergency Service</span>
                  </div>
                  <p className="text-slate-300 text-sm">Rush estimates available 24/7 for urgent projects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
