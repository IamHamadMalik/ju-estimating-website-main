import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
	{
		name: "Michael Rodriguez",
		company: "Rodriguez Construction",
		role: "Project Manager",
		content:
			"Their estimates are incredibly detailed and accurate. We've won 40% more bids since partnering with them. The turnaround time is exceptional.",
		rating: 5,
		avatar: "/placeholder.svg?height=60&width=60",
	},
	{
		name: "Sarah Lee",
		company: "Lee Builders",
		role: "Owner",
		content:
			"JU Estimating has transformed our bidding process. We save hours every week and our clients are happier than ever. Highly recommended!",
		rating: 5,
		avatar: "/placeholder.svg?height=60&width=60",
	},
]

export default function Testimonials() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-slate-900 mb-4">
						What Our Clients Say
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Don't just take our word for it. Here's what contractors and builders
						say about working with our estimating team.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 fill-amber-400 text-amber-400"
										/>
									))}
								</div>

								<div className="relative mb-6">
									<Quote className="absolute -top-2 -left-2 h-8 w-8 text-amber-200" />
									<p className="text-slate-700 text-lg leading-relaxed pl-6">
										{testimonial.content}
									</p>
								</div>

								<div className="flex items-center">
									<img
										src={testimonial.avatar || "/placeholder.svg"}
										alt={testimonial.name}
										className="w-12 h-12 rounded-full mr-4"
									/>
									<div>
										<div className="font-semibold text-slate-900">
											{testimonial.name}
										</div>
										<div className="text-slate-600 text-sm">
											{testimonial.role}, {testimonial.company}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="w-48 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
          >
            View All
          </Button>
        </div>
			</div>
      
		</section>
	)
}
