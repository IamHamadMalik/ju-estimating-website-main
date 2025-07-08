"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  FileSearch, Ruler, DollarSign, FileText, ShieldCheck,
  Zap, // Electrical specific icon
  Factory, // For industrial projects
  Home, // For residential projects
  Building2, // For commercial projects
  Lightbulb, // For lighting
  BatteryCharging, // For power distribution
  Share2, // For bid preparation
  Database, // For data systems (low voltage)
  HardHat, // For general contractors/professionals
  AreaChart, // For project consulting/optimization
  RefreshCcw, // For change orders
  Hammer, // For general construction
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Plan Review & Scope Definition",
    description:
      "Thorough analysis of blueprints, specifications, and project requirements to understand the full electrical scope.",
    icon: FileSearch,
  },
  {
    title: "Detailed Material & Labor Takeoffs",
    description:
      "Accurate quantification of all electrical components and associated labor hours using advanced estimating software.",
    icon: Ruler,
  },
  {
    title: "Market-Based Cost Estimation",
    description:
      "Zip-code-specific pricing for materials and labor, leveraging real-time supplier data and industry standards like RSMeans.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Report Generation",
    description:
      "Delivery of organized Excel reports with detailed line items, categorized by CSI MasterFormat or your preferred format.",
    icon: FileText,
  },
  {
    title: "Rigorous Quality Assurance",
    description:
      "Our senior estimators conduct a final review to guarantee accuracy, compliance, and bid-winning precision.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of electrical projects do you provide estimates for?",
    answer:
      "We handle a wide range of electrical projects including residential (single-family, multi-family, smart homes), commercial (offices, retail, healthcare), and industrial (manufacturing, warehouses, heavy-duty systems).",
  },
  {
    question: "How long does it take to get an electrical estimate?",
    answer:
      "Most electrical estimates are delivered within 24-48 hours. For larger or more complex projects, we'll provide a specific timeline when you submit your plans.",
  },
  {
    question: "What information do you need to start an estimate?",
    answer:
      "To provide an accurate estimate, we typically require architectural drawings, electrical plans, specifications, and any relevant addenda or scope clarifications.",
  },
  {
    question: "What software do your electrical estimators use?",
    answer:
      "Our expert electrical estimators utilize industry-leading software such as PlanSwift, Bluebeam, Accubid, and ConEst to ensure maximum accuracy and efficiency.",
  },
  {
    question: "Can you help with value engineering for my electrical project?",
    answer:
      "Absolutely! We can identify potential cost-saving opportunities and suggest alternative materials or methods without compromising the project's integrity or performance.",
  },
];

export default function ElectricalEstimatorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Expert Electrical Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides precise and rapid electrical estimating services for contractors, covering all residential, commercial, and industrial electrical systems."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // A relevant image for electrical work
            alt="Electrical blueprints and wiring diagrams on a construction site"
            fill
            className="object-cover"
            priority
          />
          {/* Blue gradient overlay for branding */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Text Content - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
              Precise Electrical Estimating Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Empower your bids with **accurate electrical takeoffs** and **cost estimates** for residential, commercial, and industrial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@juestimating.com"
                className="inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition text-lg shadow-md hover:shadow-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#process"
                className="inline-block border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition text-lg shadow-md hover:shadow-lg"
              >
                Our Estimation Process
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
            { value: "60%", label: "Cost Savings", icon: DollarSign },
            { value: "Bid-Winning", label: "Success Rate", icon: Zap }, // Using Zap for success
          ].map((stat, index) => (
            <div key={index} className="p-4 sm:p-6 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 mx-auto text-yellow-500 mb-3">
                <stat.icon className="w-full h-full" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Comprehensive Electrical Estimating Services
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide precise estimates and bid support for all facets of electrical construction, ensuring accuracy and competitiveness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Electrical Quantity Takeoffs",
              icon: Zap, // Electricity symbol
              desc: "Detailed material and labor calculations for all electrical components, from wire to switchgear."
            },
            {
              title: "Lighting & Control Systems",
              icon: Lightbulb, // For lighting
              desc: "Precise estimates for fixtures, dimmers, sensors, and intelligent lighting control systems."
            },
            {
              title: "Power Distribution Systems",
              icon: BatteryCharging, // For power
              desc: "Accurate quantification of panels, transformers, feeders, branch circuits, and conduits."
            },
            {
              title: "Low Voltage System Estimates",
              icon: Database, // For data/comm
              desc: "Specialized takeoffs for data, voice, security, CCTV, fire alarm, and access control systems."
            },
            {
              title: "Bid Preparation & Submission",
              icon: Share2, // For sharing/bidding
              desc: "Professional bid packages and proposals, helping you present compelling offers to clients."
            },
            {
              title: "Budget & Design Estimates",
              icon: AreaChart, // For budgeting/planning
              desc: "Early-stage cost projections to guide design decisions and ensure project feasibility."
            },
            {
              title: "Value Engineering & Analysis",
              icon: RefreshCcw, // For optimization/refinement
              desc: "Identifying cost-saving alternatives and optimizing material usage without compromising quality or safety."
            },
            {
              title: "Change Order Estimates",
              icon: FileText, // For documents/changes
              desc: "Rapid and accurate pricing for project modifications and additions during construction."
            },
            {
              title: "Project Cost Consulting",
              icon: DollarSign, // For money/consulting
              desc: "Expert advice and detailed breakdowns to empower your financial planning and project management."
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-5 text-yellow-500 group-hover:text-blue-600 transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <button className="text-blue-500 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="mailto:info@juestimating.com"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Request Your Custom Electrical Estimate
          </a>
        </div>
      </section>

      {/* What We Quantify in Electrical Estimates */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Comprehensive Electrical Quantities We Estimate
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Lighting fixtures (interior & exterior)",
              "Light switches, dimmers, and receptacles",
              "Conduit (EMT, PVC, Rigid, Flex) - linear feet & fittings",
              "Wiring & conductors (all gauges and types)",
              "Circuit breakers & fuse boxes",
              "Panels, switchboards, and transformers",
              "Motor controls & starters",
              "Fire alarm systems components",
              "Security systems (CCTV, access control)",
              "Data & communication cabling and outlets",
              "Grounding & bonding materials",
              "Generators & UPS systems",
              "Raceways & cable trays",
              "Rough-in materials & boxes",
              "Junction boxes & pull boxes",
              "HVAC controls wiring",
              "Specialty electrical equipment",
              "Labor hours for installation",
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 transition-transform hover:scale-[1.02] flex items-start gap-4"
              >
                <div className="w-10 h-10 min-w-[2.5rem] bg-yellow-400 text-white flex items-center justify-center rounded-full shadow-lg">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div className="text-slate-700 font-medium text-sm group-hover:text-blue-600 transition">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Who We Serve */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Serving a Diverse Range of Electrical Professionals
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            From small residential projects to large-scale industrial installations, our electrical estimating services are tailored for your success.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Residential Electricians</h3>
              <p className="text-blue-100">
                Accurate bids for new homes, renovations, smart home integrations, and service upgrades.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Commercial Contractors</h3>
              <p className="text-blue-100">
                Estimates for office buildings, retail spaces, restaurants, schools, and healthcare facilities.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Industrial & Specialty Firms</h3>
              <p className="text-blue-100">
                Precision for manufacturing plants, warehouses, power generation, and complex industrial systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END NEW SECTION */}

      {/* Estimation Process */}
      <section id="process" className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
          Our Streamlined Electrical Estimation Process
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

      {/* NEW SECTION: View Our Electrical Estimate Sample */}
      <section className="bg-blue-700 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            See the Precision of Our Electrical Estimates
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Gain confidence in your bids with a clear, detailed example of our electrical quantity takeoffs and cost analyses. Our samples demonstrate the thoroughness you can expect.
          </p>
          <a
            href="/sample-electrical-estimate.pdf" // Placeholder link for a sample PDF
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            View Our Electrical Estimate Sample
          </a>
        </div>
      </section>
      {/* END NEW SECTION */}

      {/* Why Choose Us - Redesigned */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Partner with JU Estimating?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose us for unparalleled accuracy, speed, and cost-effectiveness in electrical estimating.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Accuracy",
                icon: ShieldCheck,
                desc: "Our rigorous process and expert team ensure highly precise electrical takeoffs, reducing errors and risk.",
              },
              {
                title: "Rapid Turnaround",
                icon: Clock,
                desc: "Meet critical bidding deadlines with our 24-48 hour service, getting you comprehensive estimates when you need them.",
              },
              {
                title: "Significant Cost Savings",
                icon: DollarSign,
                desc: "Outsource your estimating and save up to 60% on expenses compared to maintaining an in-house team.",
              },
              {
                title: "Enhanced Bid Success",
                icon: HardHat, // Represents industry professionals / contractors
                desc: "Receive professional, detailed bid packages that clearly communicate costs and increase your win rate.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section with Stylish Accordion */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
          Frequently Asked Questions About Electrical Estimates
        </h2>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-100 shadow-sm bg-white overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left transition hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-slate-800 group-hover:text-blue-600 transition">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-transform duration-300 ${
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
            Ready to Electrify Your Bids?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get in touch with JU Estimating today for precise, timely, and cost-effective electrical estimating services that help you win more projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@juestimating.com"
              className="inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition shadow-md hover:shadow-lg"
            >
              Request a Quote
            </a>
            <a
              href="tel:+1234567890" // Placeholder phone number
              className="inline-block border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition shadow-md hover:shadow-lg"
            >
              Call Our Experts Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}