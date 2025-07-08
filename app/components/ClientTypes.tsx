import { HardHat, Building, Ruler, Palette, Truck, Users } from "lucide-react"

const clientTypes = [
  {
    title: "Contractors",
    icon: HardHat,
    gradient: "from-amber-400 to-amber-600",
  },
  {
    title: "Builders",
    icon: Building,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Architects",
    icon: Ruler,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Designers",
    icon: Palette,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Vendors",
    icon: Truck,
    gradient: "from-amber-400 to-yellow-600",
  },
  {
    title: "Subcontractors",
    icon: Users,
    gradient: "from-blue-500 to-cyan-600",
  },
]

export default function ClientTypes() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Who Do We Work With?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by industry professionals across all construction sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {clientTypes.map((client, index) => (
            <div key={index} className="group relative">
              {/* Glass morphism card */}
              <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Icon with gradient background */}
                <div
                  className={`bg-gradient-to-br ${client.gradient} p-3 rounded-xl mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <client.icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-slate-800 text-center leading-tight">{client.title}</h3>

                {/* Subtle glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal stats */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-xs text-slate-600 font-medium">Active Partners</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-xs text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-xs text-slate-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
