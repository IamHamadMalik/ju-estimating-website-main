// app/samples/page.tsx
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
    image: "https://picsum.photos/seed/commercial-build/160/100", // This will be the same as the first one due to the "seed"
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
    title: "Multi-Family Unit Estimate", // Note: This title is duplicated, consider unique titles for better user experience
    button: "Click to View",
    image: "https://picsum.photos/seed/multi-family-unit-2/160/100",
    link: "#",
  },
];

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
];

export default function SamplesPage() {
  return (
    <>
      <Head>
        <title>Sample Estimates | JU Estimating - See Our Work</title>
        <meta
          name="description"
          content="Explore example estimates from JU Estimating for General Contractors and Subcontractors. Precise, trade-specific samples designed for your project needs."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('case.jpg')" }}>
        <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            See the Precision of Our Estimates
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed drop-shadow-md">
            Explore our comprehensive sample estimates for various construction trades and project types.
            Witness the detail and accuracy that sets JU Estimating apart.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-16 text-lg">
          At **JU Estimating**, we pride ourselves on delivering precise and reliable estimates tailored to your specific project needs.
          Below, you'll find a selection of our work, demonstrating our expertise for both **General Contractors** and **Specialized Subcontractors**.
          Each sample reflects our commitment to accuracy and detailed planning, helping you secure bids and manage projects with confidence.
        </p>

        {/* General Contractors Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">Estimates for General Contractors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
            {generalContractorSamples.map((sample, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Link href={sample.link} className="flex flex-col items-center">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    width={200} // Increased image width for better presentation
                    height={120} // Increased image height
                    // unoptimized is added to handle external URLs, as Next.js's default image optimization works best with local files
                    unoptimized={true}
                    className="mb-3 object-cover rounded-md border border-gray-200 group-hover:border-blue-500 transition-colors duration-300"
                  />
                  <p className="text-md font-semibold text-gray-800 mb-4">{sample.title}</p>
                  {/* Redesigned Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                    {sample.button}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Subcontractors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">Trade-Specific Samples for Subcontractors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {smallSubcontractorSamples.map((sample, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Link href={sample.link} className="flex flex-col items-center">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    width={200} // Increased image width
                    height={120} // Increased image height
                    // unoptimized is added to handle external URLs, as Next.js's default image optimization works best with local files
                    unoptimized={true}
                    className="object-cover mb-3 rounded-md border border-gray-200 group-hover:border-blue-500 transition-colors duration-300"
                  />
                  <p className="font-semibold text-md text-gray-800 mb-4">{sample.title}</p>
                  {/* Redesigned Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                    Click to View
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
