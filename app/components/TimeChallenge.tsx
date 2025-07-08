import { Clock, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TimeChallenge() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            HOW CAN WE HELP YOU SECURE MORE PROJECTS?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Calendar Icon */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Calendar Background */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                <div className="w-48 h-56 bg-slate-50 rounded-xl relative overflow-hidden">
                  {/* Calendar Header */}
                  <div className="bg-blue-600 h-12 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>

                  {/* Calendar Grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-7 gap-1 text-xs text-slate-400 mb-2">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <div key={i} className="text-center font-medium">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-xs">
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 6
                        const isCurrentMonth = day > 0 && day <= 31
                        const isHighlighted = [8, 15, 22, 29].includes(day)
                        return (
                          <div
                            key={i}
                            className={`h-6 flex items-center justify-center rounded ${
                              isCurrentMonth
                                ? isHighlighted
                                  ? "bg-amber-500 text-white font-bold"
                                  : "text-slate-700 hover:bg-slate-200"
                                : "text-slate-300"
                            }`}
                          >
                            {isCurrentMonth ? day : ""}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Clock Icon */}
              <div className="absolute -top-4 -right-4 bg-amber-500 rounded-full p-3 shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-8">
            {/* Quote Section */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                  "I have NO TIME to handle project estimates"
                </h3>
                <p className="text-lg text-slate-600 italic">– Every Busy Contractor Across America</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold text-blue-600">Time is the biggest challenge</span> facing every
                contractor today. Most contractors are overwhelmed managing their current projects rather than pursuing
                new opportunities. If this sounds familiar, you're not alone. We've partnered with over{" "}
                <span className="font-semibold text-amber-600">1,500+ contractors nationwide</span>
                through our construction estimating services and consulting, and this struggle is universal.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                But you've <span className="font-semibold">likely attempted to handle it yourself</span> – working late
                into the evening, probably even during weekends at the kitchen table.{" "}
                <span className="font-semibold text-blue-600">We'll handle your complete bid preparation</span>
                so you can concentrate on managing your business and reclaim your evenings and weekends.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed font-semibold">
                Don't let valuable opportunities slip away due to time constraints.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  "Focus on running your business",
                  "Reclaim your personal time",
                  "Never miss a bidding opportunity",
                  "Professional, accurate estimates",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Get Your Time Back Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
