import { Button } from "@/components/ui/button"
import { Award, Users, Target, Zap } from "lucide-react"

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "$2.5B+", label: "Total Project Value" },
  { number: "15+", label: "Years Experience" },
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every estimate is meticulously calculated using industry-leading software and proven methodologies.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Fast turnaround times without compromising accuracy, helping you meet critical bid deadlines.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work as an extension of your team, understanding your business and project requirements.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality estimates that give you a competitive advantage.",
  },
]

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose JU Estimating?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over 15 years of experience in construction estimating, we've helped hundreds of contractors win more
              bids and increase profitability. Our team combines deep industry knowledge with cutting-edge technology to
              deliver estimates you can trust.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <value.icon className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
