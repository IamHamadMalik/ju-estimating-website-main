import { TrendingDown, AlertTriangle } from "lucide-react"

export default function MissedOpportunities() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:20px_20px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Highlight Box - Full Width */}
<div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-6 rounded-3xl shadow-lg mb-12 text-left">
  <div className="flex items-center justify-start gap-3 mb-3 pl-10">
    <AlertTriangle className="h-7 w-7 text-yellow-300" />
    <span className="text-base md:text-lg font-semibold uppercase tracking-wide">Revenue Alert</span>
  </div>
  <div className="pl-10 max-w-7xl">
    <h2 className="text-4xl md:text-5xl font-normal leading-snug">
      You're likely <span className="text-yellow-300">LOSING OUT</span> on $200,000+ per month because you're
      overwhelmed with work
    </h2>
  </div>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Statistics Text Side */}
          <div className="space-y-8 pl-10 max-w-2xl">
            <div className="bg-transparent p-0 rounded-none border-none">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-4xl font-normal text-slate-900">The Real Cost of Being Busy</h3>
              </div>
              <p className="text-slate-700 text-2xl leading-relaxed mb-6">
                Based on typical contract values, most contractors are missing between
                <span className="font-bold text-red-600"> $200K–$500K per month</span> in potential revenue simply
                because they can't keep up with estimate requests.
              </p>
              <p className="text-slate-600 text-2xl leading-relaxed">
                We'll handle your complete estimating process so you can focus on what you do best – building great
                projects and growing your business.
              </p>
            </div>
          </div>

          {/* Dashboard Visualization */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-1 border border-slate-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                </div>
                <span className="text-sm text-slate-500 font-medium">REVENUE DASHBOARD</span>
              </div>

              {/* Revenue Loss Indicator */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full border border-red-200">
                  <TrendingDown className="h-5 w-5" />
                  <span className="font-bold text-lg">-$200k/mo!</span>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="relative h-48 bg-slate-50 rounded-lg p-4 mb-4">
                <div className="absolute top-4 left-4 text-xs text-slate-500">Revenue Trend</div>

                {/* Declining Chart Bars */}
                <div className="flex items-end justify-center gap-2 h-32 mt-8">
                  <div className="bg-blue-500 w-8 h-24 rounded-t"></div>
                  <div className="bg-blue-400 w-8 h-20 rounded-t"></div>
                  <div className="bg-amber-400 w-8 h-16 rounded-t"></div>
                  <div className="bg-red-400 w-8 h-12 rounded-t"></div>
                  <div className="bg-red-500 w-8 h-8 rounded-t"></div>
                </div>

                {/* Trend Line */}
                <div className="absolute top-12 left-8 right-8">
                  <svg className="w-full h-20" viewBox="0 0 200 80">
                    <path
                      d="M 20 20 L 60 30 L 100 45 L 140 60 L 180 70"
                      stroke="#ef4444"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>

              {/* Dashboard Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-red-600 font-bold text-lg">47</div>
                  <div className="text-red-500 text-sm">Missed Bids</div>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <div className="text-amber-600 font-bold text-lg">23%</div>
                  <div className="text-amber-500 text-sm">Win Rate Drop</div>
                </div>
              </div>
            </div>

            {/* Floating Alert */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
              URGENT
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
