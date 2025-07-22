import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone, Upload, FileText, MessageCircle } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"
import pricingPlans from "@/data/pricing-plans.json"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50/30">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900/10 via-amber-50/50 to-blue-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Transparent <span className="text-amber-600">Pricing Plans</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Choose the perfect plan for your construction estimating needs. From single projects to ongoing
              partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl">
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phoneDisplay}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? "border-2 border-amber-500 shadow-xl scale-105 bg-gradient-to-br from-white to-amber-50/50"
                    : "border border-slate-200 hover:border-amber-200 bg-white/90 backdrop-blur-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? "pt-16" : "pt-8"}`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <div className="text-4xl font-bold text-slate-900 mb-1">{plan.price}</div>
                      <div className="text-slate-500 text-sm">{plan.period}</div>
                    </div>

                    {plan.note && <p className="text-xs text-slate-500 italic mb-6">{plan.note}</p>}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 mb-8">
                    <Button
                      className={`w-full py-3 rounded-xl font-semibold ${
                        plan.popular
                          ? "bg-amber-500 hover:bg-amber-600 text-slate-900"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                    <Button variant="outline" className="w-full py-3 rounded-xl bg-transparent">
                      <FileText className="mr-2 h-4 w-4" />
                      Samples
                    </Button>
                    <Button className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Plans
                    </Button>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Features</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="font-semibold text-slate-900 mb-3">What's included in the turnaround time?</h3>
                <p className="text-slate-600 text-sm">
                  Our 24-48 hour turnaround includes complete material takeoffs, labor analysis, and detailed cost
                  breakdowns for your project.
                </p>
              </Card>
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="font-semibold text-slate-900 mb-3">Do you offer revisions?</h3>
                <p className="text-slate-600 text-sm">
                  Yes! All plans include unlimited revisions to ensure your estimate meets your exact requirements.
                </p>
              </Card>
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="font-semibold text-slate-900 mb-3">What file formats do you accept?</h3>
                <p className="text-slate-600 text-sm">
                  We accept PDF, DWG, DXF, and most common architectural file formats. Contact us if you have questions
                  about your specific files.
                </p>
              </Card>
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="font-semibold text-slate-900 mb-3">Is there a money-back guarantee?</h3>
                <p className="text-slate-600 text-sm">
                  We stand behind our work with a satisfaction guarantee. If you're not happy with your estimate, we'll
                  work to make it right.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Your Estimate?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started today with a free consultation and see why contractors trust JU Estimating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://reach.at/juestimating"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl text-lg font-semibold transition-colors"
              >
                Get Free Quote
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
