"use client"

import Link from "next/link"
import Image from "next/image"

function TradeCard({ sample }: { sample: any }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-52 w-full">
        <Image
          src={sample.image || "/placeholder.svg"}
          alt={sample.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-yellow-500 transition-colors">
          {sample.title}
        </h3>
        <p className="text-slate-600 text-sm flex-grow">{sample.description}</p>
        <Link
          href={sample.link}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          More Details →
        </Link>
      </div>
    </div>
  )
}

export default function OurTradesPage() {
  const trades = [
    {
      title: "Concrete Estimating",
      description: "Comprehensive estimates for slabs, foundations, footings, walls, and reinforced concrete structures.",
      image: "/case.jpg",
      link: "/concrete-estimation",
    },
    {
      title: "Electrician Estimating",
      description: "Accurate electrical takeoffs for lighting, wiring, panels, conduits, and low-voltage systems.",
      image: "/case.jpg",
      link: "/electrical-estimator",
    },
    {
      title: "Interior & Exterior Finishes",
      description: "Detailed estimates for drywall, painting, flooring, ceilings, stucco, and siding finishes.",
      image: "/case.jpg",
      link: "/interior-exterior-finishes",
    },
    {
      title: "Masonry Estimating",
      description: "Estimates for CMU blocks, bricks, stone veneers, and masonry walls with material and labor breakdown.",
      image: "/case.jpg",
      link: "/masonry-estimating-services",
    },
    {
      title: "MEP Estimating",
      description: "Integrated estimates for mechanical, electrical, and plumbing systems based on design documents.",
      image: "/case.jpg",
      link: "/mep-estimating-services",
    },
    {
      title: "Metals Estimating",
      description: "Precise takeoffs for structural steel, rebar, metal decking, joists, and miscellaneous metals.",
      image: "/case.jpg",
      link: "/metals-estimating-services",
    },
    {
      title: "Openings Estimating",
      description: "Quantities and costs for doors, windows, frames, glazing, louvers, and specialty openings.",
      image: "/case.jpg",
      link: "/openings-estimating-services",
    },
    {
      title: "Thermal/ Moisture Protection Estimating",
      description: "Insulation, waterproofing, roofing, sealants, vapor barriers, and damp-proofing estimates.",
      image: "/case.jpg",
      link: "/thermal-moisture-protection-estimating-services",
    },
    {
      title: "Sitework Estimating",
      description: "Takeoffs for grading, excavation, utilities, paving, landscaping, and site demolition work.",
      image: "/case.jpg",
      link: "/sitework-estimating-services",
    },
    {
      title: "Lumber Takeoff",
      description: "Estimates for dimensional lumber, plywood, sheathing, studs, beams, and framing components.",
      image: "/case.jpg",
      link: "/lumber-takeoff",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/case.jpg')" }}
        ></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">Explore Our Estimating Trades</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow">
            Discover our full range of estimating specialties — from concrete and masonry to thermal protection and lumber.
          </p>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">All Estimating Trades</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded"></div>
            <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
              We serve clients across every major construction trade. Click below to learn more about each service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trades.map((sample, idx) => (
              <TradeCard key={idx} sample={sample} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
