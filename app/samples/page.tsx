// app/samples/page.tsx
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

// General Contractor Samples
const generalContractorSamples = [
  {
    title: "Commercial Building Estimate",
    button: "Click to View",
    image: "https://picsum.photos/seed/commercial-build/160/100",
    link: "#",
  },
  {
    title: "Residential Renovation Bid",
    button: "Click to View",
    image: "https://picsum.photos/seed/commercial-build/160/100",
    link: "#",
  },
  {
    title: "Industrial Project Costing",
    button: "Click to View",
    image: "https://picsum.photos/seed/industrial-project/160/100",
    link: "#",
  },
  {
    title: "Multi-Family Unit Estimate",
    button: "Click to View",
    image: "https://picsum.photos/seed/multi-family-unit/160/100",
    link: "#",
  },
  {
    title: "Multi-Family Unit Estimate",
    button: "Click to View",
    image: "https://picsum.photos/seed/multi-family-unit-2/160/100",
    link: "#",
  },
]

// Subcontractor Samples
const smallSubcontractorSamples = [
  { title: "REMODEL", image: "https://picsum.photos/seed/remodel/160/100", link: "#" },
  { title: "Xactimate", image: "https://picsum.photos/seed/xactimate/160/100", link: "#" },
  { title: "CONCRETE", image: "https://picsum.photos/seed/concrete/160/100", link: "#" },
  { title: "MASONRY", image: "https://picsum.photos/seed/masonry/160/100", link: "#" },
  { title: "Millwork", image: "https://picsum.photos/seed/millwork/160/100", link: "#" },
  { title: "METALS", image: "https://picsum.photos/seed/metals/160/100", link: "#" },
  { title: "LUMBER WPC", image: "https://picsum.photos/seed/lumber-wpc/160/100", link: "#" },
  { title: "ELECTRICAL", image: "https://picsum.photos/seed/electrical/160/100", link: "#" },
  { title: "Thermal / Moisture", image: "https://picsum.photos/seed/thermal-moisture/160/100", link: "#" },
  { title: "OPENINGS", image: "https://picsum.photos/seed/openings/160/100", link: "#" },
  { title: "MECHANICAL", image: "https://picsum.photos/seed/mechanical/160/100", link: "#" },
  { title: "PLUMBING", image: "https://picsum.photos/seed/plumbing/160/100", link: "#" },
  { title: "RESIDENTIAL", image: "https://picsum.photos/seed/residential-proj/160/100", link: "#" },
  { title: "BIG COMMERCIAL", image: "https://picsum.photos/seed/big-commercial-proj/160/100", link: "#" },
  { title: "DETAILED WITH MANHOURS", image: "https://picsum.photos/seed/detailed-manhours-proj/160/100", link: "#" },
  { title: "ROOFING", image: "https://picsum.photos/seed/roofing-proj/160/100", link: "#" },
  { title: "MULTI FAMILY", image: "https://picsum.photos/seed/multi-family-proj/160/100", link: "#" },
  { title: "Sitework", image: "https://picsum.photos/seed/sitework-proj/160/100", link: "#" },
  { title: "Industrial Piping", image: "https://picsum.photos/seed/industrial-piping-proj/160/100", link: "#" },
  { title: "Landscaping", image: "https://picsum.photos/seed/landscaping-proj/160/100", link: "#" },
]

export default function SamplesPage() {
  return (
    <>
      <Head>
        <title>Sample Page | JU Estimating</title>
        <meta
          name="description"
          content="Explore example estimates from JU Estimating for General Contractors and Subcontractors. Precise, trade-specific samples designed for your project needs."
        />
      </Head>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-center mb-6">Sample Page</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore example estimates curated by <strong>JU Estimating</strong> for both General Contractors and
          Subcontractors. These samples reflect our precision, attention to trade-specific details, and project
          accuracy. Whether you need a complete project breakdown or a targeted trade estimate, we tailor every
          document to your unique scope.
        </p>

        {/* General Contractors Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">General Contractors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {generalContractorSamples.map((sample, i) => (
              <div key={i} className="text-center">
                <Link href={sample.link} className="flex flex-col items-center">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    width={160}
                    height={100}
                    className="mb-2 object-cover"
                  />
                  <p className="text-sm font-medium">{sample.title}</p>
                  <span className="text-blue-600 underline text-sm">{sample.button}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Subcontractors Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">SubContractors (Trade-Specific)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {smallSubcontractorSamples.map((sample, index) => (
              <div key={index} className="text-center">
                <Link href={sample.link} className="flex flex-col items-center">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    width={160}
                    height={100}
                    className="object-cover mb-2"
                  />
                  <p className="font-semibold text-sm">{sample.title}</p>
                  <span className="text-blue-600 underline text-xs mt-1">Click to View</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
