"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ArrowLeft, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"
import faqData from "@/data/faq-data.json"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

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
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Find answers to common questions about our construction estimating services, pricing, and process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-amber-500">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div
                        key={questionIndex}
                        className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-amber-50/50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 border-t border-amber-100">
                            <p className="text-slate-700 leading-relaxed pt-4">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Can't find the answer you're looking for? Our team is here to help with personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl">
                  Get Free Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl bg-transparent"
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
