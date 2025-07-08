import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building,
  Home,
  Factory,
  Wrench,
  FileText,
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  Phone,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

const services = [
  {
    icon: Building,
    title: "Commercial Estimating",
    description: "Comprehensive estimates for office buildings, retail spaces, and commercial developments.",
    detailedDescription:
      "Our commercial estimating services cover the full spectrum of commercial construction projects. We provide detailed cost analysis for office buildings, retail spaces, restaurants, hotels, and mixed-use developments. Our team understands the unique challenges of commercial construction including complex MEP systems, specialized finishes, and tight scheduling requirements.",
    features: [
      "Material takeoffs with 3D modeling",
      "Comprehensive labor analysis",
      "Equipment and machinery costs",
      "Subcontractor pricing and coordination",
      "Permit and regulatory compliance costs",
      "Value engineering recommendations",
      "Risk assessment and contingency planning",
      "Timeline and phasing analysis",
    ],
    benefits: [
      "Accurate budgeting from concept to completion",
      "Competitive advantage in bidding",
      "Risk mitigation through detailed analysis",
      "Professional presentation materials",
    ],
    projectTypes: [
      "Office Buildings",
      "Retail Centers",
      "Restaurants",
      "Hotels",
      "Mixed-Use Developments",
      "Medical Facilities",
    ],
  },
  {
    icon: Home,
    title: "Residential Estimating",
    description: "Detailed estimates for custom homes, renovations, and residential developments.",
    detailedDescription:
      "From luxury custom homes to large-scale residential developments, our residential estimating services ensure accurate pricing for all aspects of residential construction. We specialize in both new construction and renovation projects, providing detailed breakdowns that help homeowners and builders make informed decisions.",
    features: [
      "Architectural plan review and analysis",
      "Permit and inspection requirements",
      "Finish selection and allowances",
      "Timeline and construction phasing",
      "Site preparation and utilities",
      "Landscaping and exterior features",
      "Energy efficiency upgrades",
      "Smart home technology integration",
    ],
    benefits: [
      "Transparent pricing for homeowners",
      "Detailed scope of work documentation",
      "Change order management",
      "Quality control checkpoints",
    ],
    projectTypes: ["Custom Homes", "Renovations", "Additions", "Multi-Family Housing", "Townhomes", "Condominiums"],
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Specialized estimating for manufacturing facilities, warehouses, and industrial complexes.",
    detailedDescription:
      "Industrial construction requires specialized knowledge of heavy equipment, complex systems, and stringent safety requirements. Our industrial estimating team has extensive experience with manufacturing facilities, warehouses, distribution centers, and processing plants.",
    features: [
      "Heavy equipment and crane requirements",
      "Specialized trade coordination",
      "Safety and regulatory compliance",
      "Environmental considerations",
      "Utility infrastructure planning",
      "Fire suppression and safety systems",
      "Loading dock and logistics planning",
      "Process equipment integration",
    ],
    benefits: [
      "Expertise in complex industrial systems",
      "Regulatory compliance assurance",
      "Specialized equipment knowledge",
      "Safety-focused planning",
    ],
    projectTypes: [
      "Manufacturing Plants",
      "Warehouses",
      "Distribution Centers",
      "Processing Facilities",
      "Cold Storage",
      "Data Centers",
    ],
  },
  {
    icon: Wrench,
    title: "MEP Estimating",
    description: "Mechanical, electrical, and plumbing estimates with detailed system breakdowns.",
    detailedDescription:
      "Our MEP estimating services provide comprehensive analysis of mechanical, electrical, and plumbing systems. We work closely with engineers and contractors to ensure all systems are properly coordinated and accurately priced.",
    features: [
      "HVAC system design and sizing",
      "Electrical load calculations",
      "Plumbing fixture and piping analysis",
      "Fire protection system design",
      "Energy efficiency calculations",
      "Smart building technology",
      "Renewable energy integration",
      "Testing and commissioning requirements",
    ],
    benefits: [
      "System coordination and clash detection",
      "Energy efficiency optimization",
      "Code compliance verification",
      "Lifecycle cost analysis",
    ],
    projectTypes: [
      "HVAC Systems",
      "Electrical Infrastructure",
      "Plumbing Systems",
      "Fire Protection",
      "Building Automation",
      "Renewable Energy",
    ],
  },
  {
    icon: FileText,
    title: "Bid Preparation",
    description: "Complete bid packages with professional presentation and competitive analysis.",
    detailedDescription:
      "Our bid preparation services ensure your proposals stand out from the competition. We create comprehensive, professional bid packages that clearly communicate your value proposition while maintaining competitive pricing.",
    features: [
      "Professional proposal writing",
      "Detailed cost breakdowns",
      "Project schedule development",
      "Risk assessment and mitigation",
      "Competitive market analysis",
      "Value engineering options",
      "Alternative pricing scenarios",
      "Executive summary preparation",
    ],
    benefits: [
      "Higher win rates on competitive bids",
      "Professional presentation materials",
      "Clear communication of value",
      "Reduced proposal preparation time",
    ],
    projectTypes: [
      "Public Bids",
      "Private Proposals",
      "Design-Build",
      "Construction Management",
      "Negotiated Contracts",
      "Emergency Services",
    ],
  },
  {
    icon: TrendingUp,
    title: "Value Engineering",
    description: "Cost optimization strategies to maximize value while maintaining quality standards.",
    detailedDescription:
      "Our value engineering services help optimize project costs without compromising quality or functionality. We analyze every aspect of your project to identify opportunities for cost savings and performance improvements.",
    features: [
      "Alternative material analysis",
      "Construction method optimization",
      "Cost-benefit analysis",
      "Lifecycle cost evaluation",
      "Sustainability improvements",
      "Schedule optimization",
      "Risk reduction strategies",
      "Performance enhancement options",
    ],
    benefits: [
      "Significant cost savings potential",
      "Improved project performance",
      "Enhanced sustainability",
      "Risk mitigation",
    ],
    projectTypes: [
      "Cost Reduction Studies",
      "Design Optimization",
      "Material Substitution",
      "Method Analysis",
      "Sustainability Upgrades",
      "Performance Enhancement",
    ],
  },
]

export default function ServicesPage() {
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
              Our <span className="text-amber-600">Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Comprehensive estimating solutions tailored to your specific project needs. From residential renovations
              to large-scale commercial developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl">
                  <DollarSign className="mr-2 h-5 w-5" />
                  View Pricing Plans
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <Card className="overflow-hidden shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-2xl mr-6">
                          <service.icon className="h-12 w-12 text-amber-600" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h2>
                          <p className="text-amber-600 font-medium">Professional Estimating Services</p>
                        </div>
                      </div>

                      <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.detailedDescription}</p>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Types</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.projectTypes.map((type, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features Side */}
                    <div className="bg-gradient-to-br from-slate-50 to-amber-50/50 p-8 lg:p-12">
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6">What's Included</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                              <span className="text-slate-600 font-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to See Our Pricing?</h2>
            <p className="text-xl text-slate-700 mb-8">
              Transparent pricing plans designed to fit your project needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl">
                  <DollarSign className="mr-2 h-5 w-5" />
                  View Pricing Plans
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white px-8 py-3 rounded-xl"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and detailed quote for your project.
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
                className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl"
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
