import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Heading */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Accent Line */}
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mb-6"></div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Transforming Construction
                <span className="text-amber-600 block">Estimating Excellence</span>
              </h2>
            </div>
          </div>

          {/* Right Content - Description */}
          <div className="lg:col-span-7">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
                Experience precision like never before with JU Estimating, your trusted partner in construction cost
                analysis. Founded on principles of accuracy, reliability, and client success, we've been delivering
                exceptional estimating services that empower contractors, builders, and developers to win more projects
                and maximize profitability. Our commitment to excellence and cutting-edge technology ensures every
                estimate meets the highest industry standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Discover Our Expertise
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 transition-all duration-200 bg-transparent"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
