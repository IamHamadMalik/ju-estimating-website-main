import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, FileText, Play, ArrowRight, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "1",
    title: "Share Project Plans",
    description:
      "You can directly upload plans through our website along with the scope of work or email us for the next process",
    icon: Upload,
    features: [
      "Secure file upload system",
      "Multiple file format support",
      "Direct email submission option",
      "Scope of work documentation",
    ],
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    step: "2",
    title: "Get Service Proposal",
    description: "We'll get back to you with a detailed service proposal after reviewing the project plans",
    icon: FileText,
    features: [
      "Comprehensive cost breakdown",
      "Timeline and deliverables",
      "Detailed scope analysis",
      "Professional presentation",
    ],
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    step: "3",
    title: "Get the Project Started",
    description: "Pay upfront requisition to get the project initiated and begin the estimating process",
    icon: Play,
    features: [
      "Secure payment processing",
      "Project kickoff meeting",
      "Dedicated project manager",
      "Progress tracking system",
    ],
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Simple 3-Step Process</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Getting started with professional estimating services is easy. Follow our streamlined process to get
            accurate estimates for your construction projects.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex justify-between items-center px-32">
                <div className="w-32 h-0.5 bg-gradient-to-r from-amber-300 to-blue-300"></div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-blue-300 to-amber-300"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card
                    className={`${step.lightColor} ${step.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm`}
                  >
                    <CardContent className="p-8 text-center">
                      {/* Step Number */}
                      <div
                        className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg`}
                      >
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className={`${step.color} p-4 rounded-full inline-flex mb-6 shadow-lg`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        className={`w-full ${step.borderColor} hover:${step.color.replace("bg-", "bg-")} hover:text-white transition-colors`}
                      >
                        {index === 0 ? "Upload Plans" : index === 1 ? "View Sample" : "Get Started"}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Arrow for connection (except last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-4 top-24 z-10">
                      <div className={`${step.color} p-2 rounded-full shadow-lg`}>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className={`${step.lightColor} ${step.borderColor} border-2 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`${step.color} text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-3 shadow-lg`}
                      >
                        {step.step}
                      </div>
                      <div className={`${step.color} p-3 rounded-full inline-flex shadow-lg`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 mb-4">{step.description}</p>

                      <ul className="space-y-1 mb-4">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-3 w-3 text-amber-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        size="sm"
                        className={`${step.borderColor} hover:${step.color.replace("bg-", "bg-")} hover:text-white transition-colors`}
                      >
                        {index === 0 ? "Upload Plans" : index === 1 ? "View Sample" : "Get Started"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connecting Line for Mobile */}
              {index < processSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-amber-300 to-blue-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-amber-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-6">
              Join hundreds of contractors who trust us with their estimating needs. Upload your project plans today and
              receive a detailed proposal within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                <Upload className="mr-2 h-5 w-5" />
                Upload Project Plans
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
