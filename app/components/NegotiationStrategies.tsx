import { Target, TrendingUp, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export default function NegotiationStrategies() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:24px_24px] opacity-40"></div>

      <div className="container mx-auto px-4 relative">
        {/* First Section - Negotiation Strategies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                We can help you{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                  NEGOTIATE AND WIN
                </span>{" "}
                based on proven strategies
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
            </div>

            <div className="space-y-4 text-slate-700">
              <p className="text-lg">
                Estimating is only a small part of what it takes to win a project. We like to see this as a{" "}
                <span className="font-bold text-slate-900">TEAM EFFORT.</span>
              </p>

              <p>
                <span className="font-semibold text-slate-900">
                  What do you do after the estimate to give yourself the best chance of winning?
                </span>{" "}
                We can help you work the numbers when you're negotiating, and even jump on a conference call with your
                client (as your estimating team) to help you close.
              </p>

              <p>
                We can even advise you on <span className="font-bold text-blue-600">EXACTLY WHAT TO DO</span> to have
                them wanting to <span className="font-bold text-amber-600">USE YOU</span> instead of your competitor.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-800">
                  Over the last 8 years, and after speaking and working with{" "}
                  <span className="font-bold">HUNDREDS of Contractors</span>, we got to see what{" "}
                  <span className="font-bold">WORKS</span> and what <span className="font-bold">DOESN'T</span>. We have
                  some <span className="font-bold text-green-600">clients landing 60% of their bids</span> by
                  implementing some of the strategies we can easily show you.
                </p>
              </div>

              <p className="text-slate-600 italic">
                These aren't strategies we made up – we listened to our clients and created our blueprint based on what
                they are doing right, and avoiding what they were doing wrong. Best of all...{" "}
                <span className="font-bold text-slate-900">it works for ANY CONSTRUCTION BUSINESS.</span>
              </p>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Strategy Chart */}
            <div className="bg-white rounded-xl shadow-2xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Win Rate Analytics</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-500">Active</span>
                </div>
              </div>

              {/* Win Rate Circle */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="60, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">60%</span>
                  </div>
                </div>
              </div>

              {/* Strategy Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-green-600 font-bold text-xl">127</div>
                  <div className="text-green-500 text-sm">Projects Won</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-blue-600 font-bold text-xl">$2.4M</div>
                  <div className="text-blue-500 text-sm">Revenue Secured</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              PROVEN
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg">
              <Target className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Second Section - Business Growth */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:20px_20px] opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                AND IF YOU'RE SERIOUS ABOUT GROWING YOUR BUSINESS, WE CAN HELP YOU GET MORE PROJECT LEADS AND CLOSE MORE
                SALES.
              </h3>

              <p className="text-blue-100 text-lg">
                After working on the estimating side of things, we help many of our clients get more leads so they can
                keep growing their business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Learn Growth Strategies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* Growth Chart Visualization */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 text-sm font-medium">BUSINESS GROWTH</span>
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>

                {/* Growth Chart */}
                <div className="relative h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 300 120">
                    {/* Grid Lines */}
                    <defs>
                      <pattern id="grid" width="30" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Growth Line */}
                    <path
                      d="M 20 100 L 60 85 L 100 70 L 140 50 L 180 35 L 220 25 L 260 15"
                      stroke="#10b981"
                      strokeWidth="3"
                      fill="none"
                    />

                    {/* Data Points */}
                    <circle cx="20" cy="100" r="3" fill="#10b981" />
                    <circle cx="60" cy="85" r="3" fill="#10b981" />
                    <circle cx="100" cy="70" r="3" fill="#10b981" />
                    <circle cx="140" cy="50" r="3" fill="#10b981" />
                    <circle cx="180" cy="35" r="3" fill="#10b981" />
                    <circle cx="220" cy="25" r="3" fill="#10b981" />
                    <circle cx="260" cy="15" r="3" fill="#10b981" />
                  </svg>
                </div>

                {/* Growth Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white font-bold text-lg">+180%</div>
                    <div className="text-white/60 text-xs">Lead Growth</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-lg">+240%</div>
                    <div className="text-white/60 text-xs">Revenue</div>
                  </div>
                  <div>
                    <div className="text-amber-400 font-bold text-lg">+95%</div>
                    <div className="text-white/60 text-xs">Win Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
