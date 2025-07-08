import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image" // Import Next.js Image component

const projects = [
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    value: "$12.5M",
    description: "15-story mixed-use development with retail and office space",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Steel Frame", "MEP", "Curtain Wall"],
  },
  {
    title: "Luxury Residential Development",
    category: "Residential",
    value: "$8.2M",
    description: "24-unit luxury condominium complex with amenities",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["High-End Finishes", "Landscaping", "Parking Structure"],
  },
  {
    title: "Manufacturing Facility",
    category: "Industrial",
    value: "$18.7M",
    description: "200,000 sq ft automotive parts manufacturing plant",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Heavy Equipment", "Specialized Systems", "Clean Room"],
  },
  {
    title: "Hospital Renovation",
    category: "Healthcare",
    value: "$25.3M",
    description: "Complete renovation of 3-floor hospital wing",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Medical Equipment", "Code Compliance", "Phased Construction"],
  },
  {
    title: "Shopping Center Expansion",
    category: "Retail",
    value: "$6.8M",
    description: "50,000 sq ft retail expansion with anchor tenant",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Tenant Improvements", "Parking", "Utilities"],
  },
  {
    title: "Educational Campus",
    category: "Education",
    value: "$32.1M",
    description: "New STEM building for university campus",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Lab Equipment", "Technology", "Sustainable Design"],
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Recent Project Estimates</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our portfolio of successful project estimates across various sectors. Each project demonstrates our
            commitment to accuracy and attention to detail.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 space-x-6 scrollbar-hide lg:justify-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex-none w-[300px] sm:w-[320px] overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <div className="relative w-full h-40">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-900">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-500 text-slate-900 font-semibold">{project.value}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-1 truncate">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full text-sm h-9 bg-transparent">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
