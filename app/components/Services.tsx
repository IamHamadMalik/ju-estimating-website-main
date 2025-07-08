import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Home, Factory, Wrench, FileText, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building,
    title: "Commercial Estimating",
    description: "Comprehensive estimates for office buildings, retail spaces, and commercial developments.",
    features: ["Material takeoffs", "Labor analysis", "Equipment costs", "Subcontractor pricing"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Home,
    title: "Residential Estimating",
    description: "Detailed estimates for custom homes, renovations, and residential developments.",
    features: ["Architectural plans review", "Permit requirements", "Finish selections", "Timeline planning"],
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Specialized estimating for manufacturing facilities, warehouses, and industrial complexes.",
    features: ["Heavy equipment", "Specialized trades", "Safety requirements", "Code compliance"],
    color: "from-slate-500 to-slate-600",
    bgColor: "bg-slate-50",
    iconColor: "text-slate-600",
  },
  {
    icon: Wrench,
    title: "MEP Estimating",
    description: "Mechanical, electrical, and plumbing estimates with detailed system breakdowns.",
    features: ["System design review", "Equipment specifications", "Installation costs", "Testing & commissioning"],
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: FileText,
    title: "Bid Preparation",
    description: "Complete bid packages with professional presentation and competitive analysis.",
    features: ["Proposal writing", "Cost breakdowns", "Schedule development", "Risk assessment"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Value Engineering",
    description: "Cost optimization strategies to maximize value while maintaining quality standards.",
    features: ["Alternative materials", "Construction methods", "Cost-benefit analysis", "Savings identification"],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Estimating Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial concept to final bid, we provide accurate, detailed estimates that help you win more projects
            and maximize profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top colored bar */}
              <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>

              <CardHeader className="pb-4">
                {/* Icon and Title Row */}
                <div className="flex items-start space-x-4">
                  <div
                    className={`${service.bgColor} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg text-slate-900 leading-tight mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}></div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className={`mt-6 h-px bg-gradient-to-r ${service.color} opacity-20`}></div>
              </CardContent>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-6">
              Explore our detailed service offerings and see how we can help your next project succeed.
            </p>
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
