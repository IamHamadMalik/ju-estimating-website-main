"use client"

import { MapPin, Shield, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export default function LocalPricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              We can estimate your entire project for you based on your{" "}
              <span className="underline decoration-amber-500 decoration-2 underline-offset-4">LOCAL PRICING</span> so
              the numbers will be accurate
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
            <div className="relative">
              <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
                <div className="relative h-80 bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl overflow-hidden">
                  {/* US Map Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 250" className="w-full h-full opacity-20">
                      <path
                        d="M50 150 Q100 120 150 140 Q200 130 250 145 Q300 135 350 150 L350 200 Q300 190 250 195 Q200 200 150 190 Q100 195 50 200 Z"
                        fill="currentColor"
                        className="text-slate-400"
                      />
                    </svg>
                  </div>

                  {/* Location Pins */}
                  <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" />
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" />
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-amber-500 drop-shadow-lg" fill="currentColor" />
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-slate-600 font-medium">Serving Nationwide with Local Expertise</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Award className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>JU Estimating</strong> is US-based with{" "}
                      <span className="underline decoration-blue-500 decoration-2">licensed professionals</span>, so we
                      have actual construction experience and industry knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  We use a combination of comprehensive cost databases and our extensive experience to price your
                  projects based on the zip code of your project location.{" "}
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800 font-medium">
                    (Note: Everyone at JU Estimating has actual field experience in construction, not just theory or
                    "desk estimating".)
                  </span>
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Pricing for labor and materials varies significantly by region and zip code, so we make precise
                  adjustments for local labor rates, material costs, and even consider the area's market conditions to
                  determine accurate pricing. That's what makes our construction estimating service the preferred choice
                  for busy contractors nationwide.
                </p>
              </div>

              {/* Guarantee Section */}
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start space-x-3">
                  <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">
                      We even back our estimates with a{" "}
                      <span className="underline decoration-blue-500 decoration-2">$1 MILLION ACCURACY GUARANTEE</span>{" "}
                      which covers all of our clients through our Professional Liability Insurance.
                    </h3>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Local Labor Rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Regional Material Costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Market Conditions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Zip Code Accuracy</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8"
                >
                  Get Accurate Local Estimate
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 bg-transparent"
                >
                  Call {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
