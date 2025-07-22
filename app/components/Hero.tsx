import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, Clock, Shield, Star, Award } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30">
                <Star className="h-4 w-4 text-amber-400 mr-2" />
                <span className="text-amber-300 text-sm font-medium">Trusted by 500+ Contractors</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Precision Estimating
              <span className="text-amber-400 block">Construction Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Professional construction estimating services that deliver accurate bids, maximize profits, and win more
              projects nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://reach.at/juestimating"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 rounded-md"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {/* Main Stats Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Why Choose Us?</h3>
                  <p className="text-slate-300">Industry-leading performance</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-amber-500 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <Calculator className="h-8 w-8 text-slate-900" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">1000+</div>
                    <div className="text-slate-300 text-sm">Satisfies Clients</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-600 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">2 - 3 Days</div>
                    <div className="text-slate-300 text-sm">Turnaround</div>
                  </div>
                </div>
              </div>

              {/* Secondary Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                  <div className="bg-amber-500 p-3 rounded-lg mb-3 mx-auto w-fit">
                    <Shield className="h-6 w-6 text-slate-900" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">99%</div>
                  <div className="text-slate-300 text-xs">Accuracy Rate</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                  <div className="bg-blue-600 p-3 rounded-lg mb-3 mx-auto w-fit">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-slate-300 text-xs">Years</div>
                </div>
              </div>

              {/* Testimonial Preview */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-200 text-sm mb-3 italic">
                  "Their estimates are incredibly detailed and accurate. We've won 40% more bids since partnering with
                  them."
                </p>
                <div className="text-slate-300 text-xs">
                  <span className="font-medium">Michael Rodriguez</span> - Rodriguez Construction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
