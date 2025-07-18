// This file will now serve content for Lumber Takeoff Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Home, TrendingUp,
  Hammer, Trees, Factory, Cpu, Award, Lightbulb,
  Recycle, BarChart2, // New icons for creative sections
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Blueprint & Scope Analysis",
    description:
      "Thorough review of architectural and structural blueprints to identify all lumber and framing requirements for your project.",
    icon: FileText,
  },
  {
    title: "Precise Lumber Takeoffs",
    description:
      "Accurate quantification of all wood framing members, sheathing, decking, and related materials using industry-leading software.",
    icon: Ruler,
  },
  {
    title: "Material & Labor Costing",
    description:
      "Detailed pricing for lumber, engineered wood products, fasteners, and associated labor hours, based on current market rates.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Deliverables",
    description:
      "Receive organized Excel spreadsheets with cut lists, material lists, and marked-up plans for easy procurement and installation.",
    icon: ClipboardList,
  },
  {
    title: "Quality Assurance & Optimization",
    description:
      "Every takeoff is audited by senior estimators to ensure precision, minimize waste, and optimize material usage for cost-effectiveness.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of lumber and wood products do you include in takeoffs?",
    answer:
      "We cover a comprehensive range including dimensional lumber (studs, joists, rafters, beams), engineered wood products (LVL, Glulam, I-joists), plywood, OSB, sheathing, trusses, decking, siding, and interior/exterior trim.",
  },
  {
    question: "How do your lumber takeoffs help reduce waste?",
    answer:
      "Our precise quantification and optimization techniques, often including detailed cut lists, help minimize material over-ordering and waste on-site, leading to significant cost savings.",
  },
  {
    question: "What software do you use for lumber takeoffs?",
    answer:
      "Our expert estimators utilize advanced software such as PlanSwift and Bluebeam to ensure highly accurate and efficient lumber takeoffs.",
  },
  {
    question: "What is your turnaround time for a lumber takeoff?",
    answer:
      "Most lumber takeoffs are delivered within 24-48 hours. For very large or complex framing projects, we will provide an estimated delivery timeline upfront.",
  },
  {
    question: "Do you provide estimates for both rough and finish carpentry?",
    answer:
      "Yes, we provide detailed takeoffs for both rough carpentry (framing, sheathing) and finish carpentry (interior trim, exterior trim, siding, decking, millwork), ensuring all wood-related aspects are covered.",
  },
];

export default function LumberTakeoffPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Lumber Takeoff Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides precise lumber takeoffs and framing estimates for residential, commercial, and industrial construction projects."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for a lumber-themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Replace with an actual lumber image path
            alt="Framed wooden structure of a new house under construction"
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
              LUMBER TAKEOFF SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Build smarter with precise lumber takeoffs, optimizing material use and minimizing waste for your framing projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@juestimating.com"
                className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition text-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#contact-us"
                className="inline-block border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition text-lg"
              >
                Contact Us Now
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
            { value: "98%+", label: "Accuracy Rate", icon: CheckCircle },
            { value: "500+", label: "Projects Monthly", icon: Building2 },
            { value: "Cost Savings", label: "Up to 60%", icon: DollarSign },
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
            Our Lumber Takeoff Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive quantification for all your wood framing and finishing needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Rough Carpentry Takeoffs",
              icon: <Hammer className="w-6 h-6 text-yellow-500" />,
              desc: "Precise quantification of studs, joists, rafters, headers, and sheathing for structural framing."
            },
            {
              title: "Finish Carpentry Estimates",
              icon: <Home className="w-6 h-6 text-yellow-500" />, // Representing interior finishes
              desc: "Detailed takeoffs for interior trim, exterior trim, wood siding, decking, and millwork."
            },
            {
              title: "Engineered Wood Products",
              icon: <Layers className="w-6 h-6 text-yellow-500" />, // Representing layers in engineered wood
              desc: "Accurate estimates for LVL, Glulam, I-joists, and other engineered wood components."
            },
            {
              title: "Truss & Joist Systems",
              icon: <Building2 className="w-6 h-6 text-yellow-500" />, // Representing structural systems
              desc: "Quantification of roof trusses, floor joists, and associated hangers and connectors."
            },
            {
              title: "Material Optimization",
              icon: <Recycle className="w-6 h-6 text-yellow-500" />,
              desc: "Strategies to minimize waste and optimize material ordering with detailed cut lists."
            },
            {
              title: "Cost Analysis & Budgeting",
              icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
              desc: "Comprehensive cost breakdowns for all lumber materials, labor, and associated hardware."
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

      {/* What We Quantify in Lumber Takeoffs */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Detailed Quantities in Our Lumber Takeoffs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Dimensional Lumber (2x4, 2x6, 2x8, 2x10, 2x12)",
              "Wall Studs (linear feet, quantity)",
              "Floor Joists & Rafters (linear feet, quantity)",
              "Headers & Beams (LVL, Glulam, Solid Sawn)",
              "Plywood & OSB Sheathing (walls, floors, roofs)",
              "Wood Trusses (roof, floor)",
              "Wood Columns & Posts",
              "Wood Decking & Framing",
              "Wood Siding (lap, board & batten, shingles)",
              "Interior Trim (baseboards, crown molding, casing)",
              "Exterior Trim (fascia, soffit, corner boards)",
              "Blocking & Bracing",
              "Furring Strips",
              "Wood Connectors & Hangers",
              "Fasteners (nails, screws, bolts)",
              "Subflooring Materials",
              "Rough Opening Framing (King, Jack, Cripple Studs)",
              "Fire Blocking & Draft Stopping",
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

      {/* NEW SECTION: Our Advantage: Technology & Expertise for Lumber */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Smart Lumber Takeoffs: Technology Meets Craftsmanship
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            We combine cutting-edge software with profound carpentry knowledge to provide lumber takeoffs that are not just accurate, but optimized for efficiency and minimal waste.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Software-Driven Precision</h3>
              <p className="text-blue-100">
                Utilizing advanced estimating platforms to generate precise cut lists and material quantities, reducing human error.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Experienced Framing Experts</h3>
              <p className="text-blue-100">
                Our estimators bring years of practical framing experience, understanding the nuances of wood construction for optimal takeoffs.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Waste Reduction Strategies</h3>
              <p className="text-blue-100">
                We identify opportunities to optimize lumber usage, leading to significant material cost savings and environmental benefits.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END NEW SECTION */}

      {/* NEW SECTION: Optimizing Your Lumber Budget */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Optimizing Your Lumber Budget: Avoid Costly Errors
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Lumber is a significant portion of any framing project's budget. Inaccurate takeoffs can lead to substantial material waste, costly re-orders, and project delays. Our meticulous approach ensures every piece of lumber is accounted for, from the smallest blocking to the largest engineered beam. We help you avoid common pitfalls like over-ordering, under-ordering, and miscalculating complex structural elements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By partnering with JU Estimating, you gain a competitive edge. Our detailed lumber takeoffs provide the clarity needed for precise material procurement, streamlined construction, and ultimately, a healthier bottom line. Let us help you build efficiently and profitably.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="case.jpg" // Placeholder image for optimization/waste reduction
              alt="Optimized lumber cuts on a construction site"
              width={600}
              height={400}
              className="rounded-xl shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </section>
      {/* END NEW SECTION */}

      {/* NEW SECTION: View Our Lumber Estimate Sample */}
      <section className="bg-blue-700 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            See the Precision for Yourself
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Curious about the level of detail and accuracy in our lumber takeoffs? Download a sample estimate to understand how our comprehensive reports can streamline your material ordering and improve your project budgeting.
          </p>
          <a
            href="/sample-lumber-estimate.pdf" // Placeholder link for a sample PDF
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            View Our Lumber Estimate Sample
          </a>
        </div>
      </section>
      {/* END NEW SECTION */}

      {/* Project Types Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Lumber Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We cover a broad spectrum of wood framing and finishing across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Wood Framing",
              items: [
                "Single-Family Home Framing",
                "Multi-Family Wood Structures",
                "Custom Home Timber Framing",
                "Decking & Outdoor Structures",
                "Basement Framing & Renovations",
              ]
            },
            {
              title: "Commercial Wood Construction",
              items: [
                "Wood-Framed Office Buildings",
                "Retail Store Wood Structures",
                "Restaurant Framing & Millwork",
                "Light Gauge Metal Framing",
                "Timber Frame Commercial Buildings",
              ]
            },
            {
              title: "Specialty & Industrial Woodwork",
              items: [
                "Warehouse Wood Framing",
                "Agricultural Building Structures",
                "Custom Millwork & Trim Packages",
                "Wood Siding & Exterior Finishes",
                "Structural Wood Repair & Additions",
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
          Our Lumber Takeoff Process
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

      {/* Recent Projects */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Our Recent Lumber Takeoff Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the diverse lumber and framing projects we've helped successfully bid.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Custom Home Framing",
              description: "Comprehensive lumber takeoffs for a multi-story custom home, including complex roof and floor framing.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Multi-Family Apartment Building",
              description: "Detailed lumber estimates for a large multi-unit apartment complex, optimizing material for efficiency.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Commercial Wood-Framed Structure",
              description: "Takeoffs for a commercial building utilizing heavy timber and light-gauge metal framing elements.",
              image: "case.jpg" // Placeholder image
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

      {/* Discount Highlight Section */}
      <section className="bg-yellow-400 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">
            Maximize Your Savings on Lumber Takeoffs!
          </h2>
          <p className="text-2xl font-bold mb-6">
            Outsource Your Lumber Takeoffs and <span className="text-blue-800 text-5xl">Save Up to 60%</span> on Expenses!
          </p>
          <p className="text-lg text-blue-900">
            Why risk costly material overages or delays? Get precise, timely, and cost-effective lumber takeoffs from our experts.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Choose JU Estimating for Lumber?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide competitive advantages for your lumber bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Precision Framing Estimates",
                icon: () => <ShieldCheck />,
                desc: "Our detailed takeoffs ensure every piece of lumber is accounted for, minimizing errors and costly rework."
              },
              {
                title: "Optimized Material Use",
                icon: () => <Recycle />,
                desc: "We help you order exactly what you need, reducing waste and improving your project's environmental footprint."
              },
              {
                title: "Faster Project Starts",
                icon: () => <Clock />,
                desc: "Quick turnaround times mean you get accurate lumber lists faster, accelerating your procurement and construction schedule."
              },
              {
                title: "Increased Bid Competitiveness",
                icon: () => <TrendingUp />,
                desc: "Accurate and optimized lumber costs give you a stronger, more competitive edge in securing new projects."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                  {feature.icon()}
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
      <section id="contact-us" className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Frame Your Next Project with Precision?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective lumber takeoffs tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@juestimating.com"
              className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
            >
              Request a Quote
            </a>
            <a
              href="tel:+1234567890" // Placeholder phone number
              className="inline-block border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Call Our Experts Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
