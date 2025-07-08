// This file will now serve content for Masonry Estimating Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Home, TrendingUp,
  BrickWall, Hammer, Blocks, Calculator // Masonry specific and relevant icons
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Plan Submission & Scope Definition",
    description:
      "Upload your architectural drawings, specifications, and project details for a thorough review of the masonry scope.",
    icon: FileText,
  },
  {
    title: "Detailed Masonry Takeoffs",
    description:
      "Precise quantification of all masonry units (bricks, blocks, stone), mortar, grout, reinforcement, and accessories using advanced software like PlanSwift and Bluebeam.",
    icon: Ruler,
  },
  {
    title: "Cost Analysis & Pricing",
    description:
      "Accurate pricing based on current market rates, local labor costs, material density, and zip-code specific data for optimal bids.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Receive detailed Excel reports with line-item breakdowns, man-hours, and organized by MasterFormat/CSI codes, including 3D wall renderings.",
    icon: ClipboardList,
  },
  {
    title: "Quality Assurance & Audit",
    description:
      "Every estimate is rigorously audited by senior masonry estimators to guarantee precision, reliability, and adherence to industry standards.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of masonry projects do you estimate?",
    answer:
      "We provide estimates for all types of masonry projects, including residential facades, commercial buildings, industrial structures, landscaping masonry, chimneys, fireplaces, and restoration work involving brick, block, stone, and architectural precast.",
  },
  {
    question: "How much does a masonry estimate cost?",
    answer:
      "Our masonry estimates are competitively priced, with costs depending on the project's size, complexity, and the specific masonry elements involved. Please upload your plans for a custom quote within 5 minutes. Remember, new clients receive a 30% discount on their first masonry estimate!",
  },
  {
    question: "What software do you use for masonry takeoffs?",
    answer:
      "Our expert estimators utilize industry-standard software such as AccuBid, PlanSwift, and Bluebeam to ensure the highest accuracy and efficiency in our masonry takeoffs.",
  },
  {
    question: "What is your turnaround time for masonry estimates?",
    answer:
      "Most masonry estimates are delivered within 24-48 hours. For larger or more complex projects, we will provide an estimated delivery timeline upfront.",
  },
  {
    question: "Do your estimates include labor and material rates?",
    answer:
      "Yes, our comprehensive estimates provide detailed breakdowns of material quantities, material costs based on current market rates, and labor costs calculated using man-hours, crew size, and local labor rates.",
  },
];

export default function MasonryEstimatorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Masonry Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating offers precise masonry estimating services for brick, block, stone, and architectural precast projects, ensuring accurate bids and increased profitability."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for a masonry-themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Replace with an actual masonry image path
            alt="Skilled masons laying bricks on a construction site"
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
              MASONRY ESTIMATING SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Build with confidence. Accurate masonry takeoffs and cost estimates for all your brick, block, and stone projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@juestimating.com"
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
            { value: "92%+", label: "Bid-Hit Ratio", icon: TrendingUp },
            { value: "600+", label: "Projects Monthly", icon: Building2 },
            { value: "30% OFF", label: "First Estimate", icon: DollarSign }, // Highlight discount
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <stat.icon className="w-10 h-10 mx-auto text-yellow-500 mb-3" />
              <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Highlight Section */}
      <section className="bg-yellow-400 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">
            Special Offer for New Clients!
          </h2>
          <p className="text-2xl font-bold mb-6">
            Get <span className="text-blue-800 text-5xl">30% OFF</span> Your First Masonry Estimate!
          </p>
          <p className="text-lg text-blue-900">
            Experience our unmatched accuracy and fast turnaround at a special introductory rate. Don't miss out on boosting your bid success!
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Our Masonry Estimating Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive estimating solutions for all your masonry construction needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Brick & Block Takeoffs",
              icon: <BrickWall className="w-6 h-6 text-yellow-500" />,
              desc: "Precise quantification of all brick, concrete block (CMU), and mortar units."
            },
            {
              title: "Stone & Veneer Estimates",
              icon: <Blocks className="w-6 h-6 text-yellow-500" />,
              desc: "Accurate takeoffs for natural stone, cast stone, and various masonry veneer systems."
            },
            {
              title: "Labor & Material Pricing",
              icon: <Calculator className="w-6 h-6 text-yellow-500" />,
              desc: "Detailed cost analysis for masonry materials, equipment, and man-hours."
            },
            {
              title: "Masonry Restoration Estimates",
              icon: <Hammer className="w-6 h-6 text-yellow-500" />,
              desc: "Specialized estimates for repair, historical restoration, and repointing projects."
            },
            {
              title: "3D Masonry Wall Designing",
              icon: <Layers className="w-6 h-6 text-yellow-500" />,
              desc: "Visual 3D renderings of masonry walls to aid in planning and presentation."
            },
            {
              title: "Bid Preparation & Consulting",
              icon: <FileText className="w-6 h-6 text-yellow-500" />,
              desc: "Professional bid package preparation and expert consultation to boost your winning chances."
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

      {/* What We Quantify in Masonry Estimates */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            What We Quantify in Masonry Estimates
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "All types of Bricks (common, face, modular, oversized)",
              "Concrete Masonry Units (CMU) - various sizes & types",
              "Mortar (bags, cubic yards, and mix ratios)",
              "Grout (cubic yards, including rebar grout)",
              "Reinforcement (rebar, wire mesh, ladder wire)",
              "Insulation (board, cavity, fill)",
              "Flashing (through-wall, drip edges)",
              "Control & Expansion Joints",
              "Brick Ties & Anchor Bolts",
              "Lintels & Sills (precast, stone, concrete)",
              "Scaffolding & Access Equipment",
              "Cleaners & Sealers",
              "Waste & Contingency Factors",
              "Waterproofing Membranes",
              "Architectural Precast Elements",
              "Cut Stone & Natural Veneer",
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
            Masonry Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We cover a broad spectrum of masonry construction across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Masonry",
              items: [
                "New Home Facades & Exteriors",
                "Chimneys & Fireplaces",
                "Retaining Walls & Landscaping Masonry",
                "Patios, Driveways & Sidewalks (Pavers)",
                "Foundation Walls",
              ]
            },
            {
              title: "Commercial Masonry",
              items: [
                "Office Buildings & Retail Stores",
                "Schools & Educational Facilities",
                "Healthcare & Institutional Buildings",
                "Restaurants & Hospitality Structures",
                "Commercial Brick & Stone Veneer",
              ]
            },
            {
              title: "Industrial & Specialized Masonry",
              items: [
                "Manufacturing Plants & Warehouses",
                "Water/Wastewater Treatment Facilities",
                "Specialty Block Work",
                "Historical Masonry Restoration",
                "Architectural Masonry Features",
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
          Our Masonry Estimation Process
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
              Our masonry estimating services are tailored for a diverse range of clients in the construction industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "General Contractors", icon: Building2 },
              { title: "Masonry Contractors", icon: BrickWall },
              { title: "Developers & Builders", icon: Home },
              { title: "Architects & Engineers", icon: Layers },
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
            Our Recent Masonry Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the diverse masonry projects we've helped successfully bid.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial Building Facade",
              description: "Detailed masonry takeoffs for multi-story brick and stone veneer systems for a new office complex.",
              image: "/images/commercial-masonry-facade.jpg" // Placeholder image
            },
            {
              title: "Residential Chimney & Fireplace",
              description: "Full masonry estimates for new residential chimney construction and custom stone fireplace installations.",
              image: "/images/residential-chimney.jpg" // Placeholder image
            },
            {
              title: "Industrial Warehouse CMU Walls",
              description: "Estimates for large-scale concrete masonry unit (CMU) walls and structural reinforcement for an industrial warehouse.",
              image: "/images/industrial-cmu-walls.jpg" // Placeholder image
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
              Why Choose JU Estimating for Masonry?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide competitive advantages for your masonry bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Accuracy",
                icon: ShieldCheck,
                desc: "Our certified masonry estimators use cutting-edge software to deliver precise takeoffs, minimizing errors and material waste."
              },
              {
                title: "Fast Turnaround",
                icon: Clock,
                desc: "Receive detailed masonry estimates within 24–48 hours, enabling you to meet tight bidding schedules with confidence."
              },
              {
                title: "Significant Cost Savings",
                icon: DollarSign,
                desc: "Outsourcing saves you up to 60% compared to in-house estimating, enhancing your project profitability on masonry work."
              },
              {
                title: "Increased Bid Success",
                icon: TrendingUp,
                desc: "Our competitive and data-driven estimates, backed by a 92%+ bid-hit ratio, significantly boost your chances of winning more masonry projects."
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
            Ready to Solidify Your Next Masonry Project Bid?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective masonry estimating services tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@juestimating.com"
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