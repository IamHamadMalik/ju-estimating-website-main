"use client"

import Link from "next/link"
import { useState } from "react"
import { Plus } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Download } from "lucide-react"

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
        {/* Removed Download Button */}
      </div>
    </div>
  )
}


export default function OurTradesPage() {
  const trades = [
    {
      title: "Residential Estimating",
      description: "Cost-efficient estimates for single-family homes, condos, and townhouses.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Commercial Estimating",
      description: "Accurate and comprehensive estimates for commercial buildings and offices.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Industrial Estimating",
      description: "Estimates tailored for warehouses, manufacturing units, and plants.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Concrete Takeoffs",
      description: "Detailed breakdowns for concrete foundations, slabs, and more.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Framing & Lumber",
      description: "Lumber and wood framing quantity takeoffs and labor cost estimates.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Drywall & Finishes",
      description: "Comprehensive drywall estimates including mudding, taping, and finishing.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Painting & Coatings",
      description: "Interior and exterior painting estimates with accurate coverage details.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Steel Takeoffs",
      description: "Estimates for structural and miscellaneous steel in various construction types.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "Masonry & Blockwork",
      description: "Accurate estimates for brick, stone, and CMU installations.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
    {
      title: "MEP Estimating",
      description: "Mechanical, Electrical, and Plumbing takeoffs with system-level breakdowns.",
      image: "/case.jpg",
      downloadLink: "/sample.pdf",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-white text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/case.jpg')" }}></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">Explore Our Estimating Trades</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow">
            Discover our full range of estimating specialties — from residential and commercial to MEP and finishes.
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
              We serve clients across every major construction trade. Click below to preview and download sample estimates.
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
