// This file will now serve content for Interior & Exterior Finishes Estimating Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Paintbrush, Grid3X3, LayoutDashboard, PaintBucket, Palette, Tally1, // Icons for finishes
  Home, TrendingUp // General purpose icons
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Plan Submission",
    description:
      "Upload your architectural plans, specifications, and finish schedules for detailed analysis.",
    icon: FileText,
  },
  {
    title: "Material & Labor Takeoffs",
    description:
      "Precise quantification of all interior and exterior finish materials and associated labor using advanced software.",
    icon: Ruler,
  },
  {
    title: "Cost Analysis",
    description:
      "Accurate pricing based on current market rates, local labor costs, and specific material finishes.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Receive detailed Excel reports with line-item breakdowns for all finishes, organized for clarity.",
    icon: ClipboardList,
  },
  {
    title: "Quality Review",
    description:
      "Every estimate is rigorously audited by senior estimators to guarantee precision and reliability for all finish components.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of interior and exterior finishes do you estimate?",
    answer:
      "We provide estimates for a comprehensive range of finishes including all types of flooring (carpet, tile, wood, vinyl), painting & coatings (interior, exterior, specialty), drywall, ceilings (acoustic, suspended), plaster, stucco, and gypsum board systems.",
  },
  {
    question: "How much does an interior/exterior finish estimate cost?",
    answer:
      "Our finish estimates are competitively priced, with costs depending on the project's size, complexity, and the variety of finishes involved. Please upload your plans for a custom quote within 5 minutes.",
  },
  {
    question: "What software do you use for finish takeoffs?",
    answer:
      "Our expert estimators utilize industry-standard software such as PlanSwift, Oncenter, and Bluebeam to ensure the highest accuracy and efficiency in our takeoffs for finishes.",
  },
  {
    question: "What is your turnaround time for finish estimates?",
    answer:
      "Most interior and exterior finish estimates are delivered within 24-48 hours. For larger or more complex projects, we will provide an estimated delivery timeline upfront.",
  },
  {
    question: "Do you provide material and labor breakdowns for finishes?",
    answer:
      "Yes, our estimates provide detailed breakdowns of both material quantities and costs, as well as labor hours and costs, for each type of interior and exterior finish.",
  },
];

export default function InteriorExteriorFinishesPage() { // Renamed export for clarity, though file name is `electrical-estimators/page.tsx`
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Interior & Exterior Finishes Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides precise estimating services for all interior and exterior finishes, including flooring, painting, drywall, and ceilings for various construction projects."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for an interior/exterior finishes themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Replace with an actual image path for finishes
            alt="Interior designer selecting finishes for a new building"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Content - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white">
              INTERIOR & EXTERIOR FINISHES ESTIMATING SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Transform your projects with accurate material and labor estimates for all your flooring, painting, drywall, and ceiling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://reach.at/juestimating"
                target="_blank"
                className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition text-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#process"
                className="inline-block border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition text-lg"
              >
                Learn Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white shadow-lg rounded-xl -mt-12 relative z-20 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "24-48h", label: "Average Turnaround", icon: Clock },
            { value: "98%", label: "Accuracy Rate", icon: CheckCircle },
            { value: "500+", label: "Projects Monthly", icon: Building2 },
            { value: "Custom", label: "Cost Per Project", icon: DollarSign },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <stat.icon className="w-10 h-10 mx-auto text-yellow-500 mb-3" />
              <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Our Interior & Exterior Finishes Estimating Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive estimating solutions for all your finish material and installation needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Flooring Estimating",
              icon: <Grid3X3 className="w-6 h-6 text-yellow-500" />,
              desc: "Accurate takeoffs for all types of flooring: carpet, tile, wood, vinyl, and specialty flooring systems."
            },
            {
              title: "Painting & Coating Estimates",
              icon: <Paintbrush className="w-6 h-6 text-yellow-500" />,
              desc: "Detailed estimates for interior, exterior, and specialized coating applications including stucco and plaster finishes."
            },
            {
              title: "Drywall & Gypsum Board",
              icon: <LayoutDashboard className="w-6 h-6 text-yellow-500" />,
              desc: "Precise takeoffs for gypsum board, framing, taping, and finishing for walls and ceilings."
            },
            {
              title: "Ceiling Systems Estimates",
              icon: <Layers className="w-6 h-6 text-yellow-500" />,
              desc: "Estimates for acoustic ceilings, suspended grids, specialty ceilings, and luminous systems."
            },
            {
              title: "Plaster & Stucco Estimating",
              icon: <Palette className="w-6 h-6 text-yellow-500" />,
              desc: "Quantification for various plaster types, stucco applications, and decorative finishes."
            },
            {
              title: "Material & Labor Takeoffs",
              icon: <Tally1 className="w-6 h-6 text-yellow-500" />,
              desc: "Comprehensive breakdowns of all finish materials, quantities, and associated labor hours."
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-5 text-yellow-500 group-hover:text-gray-700 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Quantify in Finishes */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Detailed Quantities in Our Finishes Estimates
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Broadloom Carpet & Carpet Tiles",
              "Resinous & Fluid Applied Flooring",
              "Linoleum & Vinyl Composite Tile (VCT)",
              "Hardwood, Laminate & Cork Flooring",
              "Ceramic, Porcelain & Mosaic Tiles",
              "Stair Treads & Nosings",
              "Interior & Exterior Paint (various types)",
              "Specialty Coatings (fire-retardant, anti-graffiti)",
              "Drywall & Gypsum Board (types & thicknesses)",
              "Wall Framing & Furring",
              "Taping & Finishing Compounds",
              "Acoustical Ceiling Tiles & Grids",
              "Suspension Systems & Accessories",
              "Plaster & Stucco Finishes",
              "Gypsum Wallboard & Fabrications",
              "Baseboards & Trim Molding",
              "Door & Window Painting Quantities",
              "Custom Wall Coverings",
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 transition-transform hover:scale-[1.02] flex items-start gap-4"
              >
                <div className="w-10 h-10 min-w-[2.5rem] bg-yellow-400 text-white flex items-center justify-center rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="text-slate-700 font-medium text-sm group-hover:text-gray-900 transition">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Finishes Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We cover a broad spectrum of interior and exterior finish applications across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Finishes",
              items: [
                "New Home Interior/Exterior Painting",
                "Apartment & Condo Renovations",
                "Custom Flooring Installations",
                "Basement Finishing",
                "Decorative Plaster & Stucco",
              ]
            },
            {
              title: "Commercial Finishes",
              items: [
                "Office Space Renovations",
                "Retail Store Fit-outs",
                "Hotel & Hospitality Finishes",
                "Educational Facilities",
                "Healthcare & Clinic Interiors",
              ]
            },
            {
              title: "Industrial & Specialty Finishes",
              items: [
                "Warehouse Floor Coatings",
                "Industrial Painting & Protective Coatings",
                "Specialty Ceiling Systems",
                "Sports & Athletic Flooring",
                "Acoustic Wall Panels",
              ]
            }
          ].map((category, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-gray-800 text-white px-6 py-4">
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estimation Process */}
      <section id="process" className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
          Our Finishes Estimation Process
        </h2>

        <div className="relative border-l-4 border-yellow-400 pl-6 ml-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="mb-12 relative group transition-transform hover:scale-[1.01]"
            >
              {/* Icon + Number Badge */}
              <div className="absolute -left-[2.3rem] top-1">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg ring-4 ring-white relative z-10">
                  <step.icon className="text-white w-5 h-5" />
                  <div className="absolute -bottom-1 -right-1 bg-white text-yellow-500 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-yellow-300 shadow-sm">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl p-6 ml-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Work With (New Section) */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Who We Work With
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our interior and exterior finishes estimating services are tailored for a diverse range of clients in the construction industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "General Contractors", icon: Building2 },
              { title: "Finishes Subcontractors", icon: PaintBucket },
              { title: "Developers & Builders", icon: Home },
              { title: "Architects & Designers", icon: Palette },
            ].map((clientType, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <clientType.icon className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{clientType.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects (New Section) */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Our Recent Finishes Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the diverse interior and exterior finishes projects we've helped successfully bid.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Luxury Condo Interior Finishes",
              description: "Detailed estimates for high-end flooring, custom painting, and specialty ceiling installations across multiple units.",
              image: "/images/condo-interior-finishes.jpg" // Placeholder image
            },
            {
              title: "Commercial Office Building Repaint",
              description: "Full exterior painting and interior common area finishes estimate for a large corporate office building.",
              image: "/images/office-exterior-paint.jpg" // Placeholder image
            },
            {
              title: "Hospitality Renovation - Flooring & Drywall",
              description: "Comprehensive takeoffs for all new flooring and drywall systems in a multi-story hotel renovation project.",
              image: "/images/hotel-renovation-finishes.jpg" // Placeholder image
            },
          ].map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Choose JU Estimating for Finishes?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide competitive advantages for your finishes bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Accuracy",
                icon: ShieldCheck,
                desc: "Our certified estimators use cutting-edge software to deliver precise takeoffs for all finish materials, minimizing waste and ensuring budget compliance."
              },
              {
                title: "Fast Turnaround",
                icon: Clock,
                desc: "Receive detailed finishes estimates within 24–48 hours, enabling you to meet tight bidding schedules with confidence."
              },
              {
                title: "Significant Cost Savings",
                icon: DollarSign,
                desc: "Outsourcing saves you up to 60% compared to in-house estimating, enhancing your project profitability for finish installations."
              },
              {
                title: "Increased Bid Success",
                icon: TrendingUp,
                desc: "Our competitive and data-driven estimates significantly boost your chances of winning more interior and exterior finishes projects."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Stylish Accordion */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-100 shadow-sm bg-white overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left transition hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-slate-800 group-hover:text-gray-600 transition">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-6 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                  openFaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Perfect Your Finishes Project Bids?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective interior and exterior finishes estimating services tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://reach.at/juestimating"
              target="_blank"
              className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
            >
              Request a Quote
            </a>
            <a
              href="tel:+1234567890"
              className="inline-block border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
