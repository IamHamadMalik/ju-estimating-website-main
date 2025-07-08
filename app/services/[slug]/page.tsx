import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  Package,
  Calendar,
  Building,
  Home,
  Factory,
  Ruler,
  DollarSign,
  FileText,
  CheckCircle,
  Clock,
  ArrowLeft,
  Phone,
  BarChart,
  ClipboardCheck,
  Users,
  UserCheck,
} from "lucide-react"
import servicesData from "@/data/services.json"
import { siteConfig } from "@/lib/config"

// Icon mapping
const iconMap = {
  Calculator,
  Package,
  Calendar,
  Building,
  Home,
  Factory,
  Ruler,
  DollarSign,
  FileText,
  BarChart,
  ClipboardCheck,
  Users,
  UserCheck,
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | JU Estimating`,
    description: service.shortDescription,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>

            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                {IconComponent && <IconComponent className="h-12 w-12 text-amber-400" />}
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{service.shortDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
                asChild
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-amber-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Turnaround Time</h3>
                  <p className="text-slate-600">{service.turnaroundTime}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Starting Price</h3>
                  <p className="text-slate-600">{service.startingPrice}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Accuracy</h3>
                  <p className="text-slate-600">99%+ Accurate</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900">What's Included</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Project Types We Handle</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.projectTypes.map((type, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">What You'll Receive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.deliverables.map((deliverable, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{deliverable}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your {service.title.toLowerCase()} project started today. Contact us for a free consultation and
              detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
                asChild
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
            <p className="text-blue-200 mt-4">
              Starting at {service.startingPrice} • {service.turnaroundTime} delivery
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
