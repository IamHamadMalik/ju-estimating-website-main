// This file will now serve content for MEP Estimating Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Home, TrendingUp,
  Fan, Zap, Droplet, FireExtinguisher, Calculator, Gauge, // MEP specific and relevant icons
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Plan Analysis by MEP Specialists",
    description:
      "Submit your project drawings and specifications for a detailed review by our expert MEP estimators to define the scope of work.",
    icon: FileText,
  },
  {
    title: "Accurate MEP Takeoffs",
    description:
      "Precise quantification of all mechanical, electrical, and plumbing components using industry-leading software like Bluebeam, Planswift, and Trimble.",
    icon: Ruler,
  },
  {
    title: "Cost Analysis & Pricing",
    description:
      "Application of current market rates, labor costs, equipment rentals, and zip-code specific pricing using RSMeans and our extensive database.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Deliverables",
    description:
      "Receive detailed Excel reports with line-item breakdowns, marked-up plans, labor hours, and a complete bid review with inclusion/exclusion sheets.",
    icon: ClipboardList,
  },
  {
    title: "Quality Assurance & Audit",
    description:
      "Every MEP estimate undergoes a rigorous audit by senior estimators to ensure accuracy, reliability, and compliance with all industry standards.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What specific MEP trades do you cover in your estimates?",
    answer:
      "We cover a comprehensive range of MEP trades including HVAC (heating, ventilation, air conditioning, ductwork), Electrical (lighting, low voltage, power distribution), Plumbing (piping, fixtures, drainage), and Fire Protection (sprinklers, fireproofing, firestopping, fire suppression).",
  },
  {
    question: "How quickly can I get an MEP estimate?",
    answer:
      "Most of our MEP estimates are delivered within a swift 24-48 hour turnaround time. For larger or more complex commercial projects, we will provide an accurate timeline upfront.",
  },
  {
    question: "What software do you use for MEP takeoffs?",
    answer:
      "Our team utilizes cutting-edge software such as Bluebeam, PlanSwift, Trimble, FastPIPE, FastDUCT, and FastWRAP to ensure precision and efficiency in all our MEP takeoffs.",
  },
  {
    question: "Do your MEP estimates include both material and labor costs?",
    answer:
      "Yes, our comprehensive MEP estimates include detailed breakdowns of material quantities, current material pricing, and accurate labor hours with associated labor costs, ensuring a complete cost overview.",
  },
  {
    question: "Can you assist with MEP drafting services as well?",
    answer:
      "Absolutely! We also offer MEP drafting services, including HVAC pipe and duct fabrication drawings, plumbing shop drawings, and sprinkler shop drawings, utilizing software like Revit MEP, AutoCAD, and BIM systems.",
  },
];

export default function MepEstimatingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>MEP Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides accurate and efficient MEP (Mechanical, Electrical, Plumbing) estimating services for commercial, residential, and industrial projects."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for an MEP-themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Replace with an actual MEP image path
            alt="Complex network of MEP systems (pipes, ducts, wires) in a building"
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
              MEP ESTIMATING SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Precision and Efficiency for Your Mechanical, Electrical, and Plumbing Project Bids.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@juestimating.com"
                className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition text-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#contact-us" // Added for "Contact Us Now"
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
            { value: "60%+", label: "Expense Savings", icon: DollarSign },
            { value: "10+", label: "Years Experience", icon: Building2 },
            { value: "$200 Avg.", label: "Estimate Cost", icon: Calculator },
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
            Our MEP Estimating Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive estimating solutions across all Mechanical, Electrical, and Plumbing trades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Mechanical Estimating (HVAC)",
              icon: <Fan className="w-6 h-6 text-yellow-500" />,
              desc: "Accurate takeoffs for ductwork, HVAC equipment (chillers, boilers, AHUs), insulation, and controls."
            },
            {
              title: "Electrical Estimating",
              icon: <Zap className="w-6 h-6 text-yellow-500" />,
              desc: "Detailed estimates for lighting, power distribution, low voltage systems, conduits, and wiring."
            },
            {
              title: "Plumbing Estimating",
              icon: <Droplet className="w-6 h-6 text-yellow-500" />,
              desc: "Precise quantification of piping, fixtures, drainage, water supply, and waste systems."
            },
            {
              title: "Fire Protection Estimating",
              icon: <FireExtinguisher className="w-6 h-6 text-yellow-500" />,
              desc: "Estimates for sprinkler systems, fireproofing, firestopping, and other fire suppression components."
            },
            {
              title: "MEP Drafting Services",
              icon: <Layers className="w-6 h-6 text-yellow-500" />,
              desc: "CAD and BIM-based drafting for HVAC, plumbing, and fire protection shop drawings."
            },
            {
              title: "Bid Preparation & Analysis",
              icon: <ClipboardList className="w-6 h-6 text-yellow-500" />,
              desc: "Assistance with bid submittal, comprehensive bid reviews, and inclusion/exclusion sheets."
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

      {/* What We Quantify in MEP Estimates */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Detailed Quantities in Our MEP Estimates
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Ductwork (sheet metal, fiberglass, flexible)",
              "Air Handling Units (AHUs), Chillers & Boilers",
              "Furnaces & Heat Pumps",
              "HVAC Controls & Thermostats",
              "Pipe & Pipe Fittings (various materials)",
              "Plumbing Fixtures (sinks, toilets, showers)",
              "Water Heaters & Pumps",
              "Drainage & Venting Systems",
              "Conduits, Wires & Cables",
              "Lighting Fixtures & Devices",
              "Switchgear, Panels & Transformers",
              "Fire Alarm Systems & Devices",
              "Sprinkler Heads & Piping",
              "Fire Stopping & Fire Proofing Materials",
              "Insulation (duct, pipe, spray)",
              "Grilles, Registers & Diffusers",
              "Valves, Pumps & Flow Meters",
              "Low Voltage Systems (data, telecom)",
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

      {/* Text on Left, Image on Right Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Advanced MEP Estimating Technology
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At JU Estimating, we leverage state-of-the-art estimating software like Bluebeam, PlanSwift, Trimble, FastPIPE, FastDUCT, and FastWRAP to ensure unparalleled accuracy and efficiency in every MEP takeoff. Our specialized estimators meticulously analyze complex blueprints, identifying every component from intricate ductwork to advanced electrical systems and precise plumbing layouts. This technological advantage, combined with our deep industry knowledge, allows us to provide comprehensive and reliable estimates that minimize material waste, optimize labor costs, and significantly enhance your bid competitiveness.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We also integrate the latest construction cost databases and apply zip code-based pricing to ensure your estimates reflect current market realities, giving you a true competitive edge. Our commitment to technology and precision means you can trust our estimates to form the solid foundation for your successful MEP projects.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="case.jpg" // Placeholder image for MEP software/technology
              alt="Engineer working on MEP design software"
              width={600}
              height={400}
              className="rounded-xl shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            MEP Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We cover a broad spectrum of MEP construction across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential MEP",
              items: [
                "New Home HVAC & Duct Systems",
                "Apartment Building Plumbing",
                "Condominium Electrical Wiring",
                "Residential Fire Sprinkler Systems",
                "Smart Home Automation Wiring",
              ]
            },
            {
              title: "Commercial MEP",
              items: [
                "Office Building HVAC Installations",
                "Retail Store Electrical Fit-outs",
                "Restaurant Kitchen Plumbing",
                "Hospital & Clinic MEP Systems",
                "Educational Facility Mechanical Systems",
              ]
            },
            {
              title: "Industrial & Specialty MEP",
              items: [
                "Warehouse HVAC & Ventilation",
                "Factory Electrical Power Distribution",
                "Process Piping for Industrial Plants",
                "Data Center Cooling & Power",
                "Specialized Fire Suppression Systems",
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
          Our MEP Estimation Process
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
              Our MEP estimating services are tailored for a diverse range of clients in the construction industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "General Contractors", icon: Building2 },
              { title: "MEP Contractors", icon: Gauge },
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
            Our Recent MEP Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the diverse MEP projects we've helped successfully bid.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial Office HVAC Renovation",
              description: "Detailed estimates for a complete HVAC system overhaul, including ductwork and equipment replacement for a large office building.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Residential Plumbing & Electrical",
              description: "Full MEP estimates for new residential construction, covering all plumbing rough-ins and electrical wiring systems.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Industrial Plant Fire Suppression",
              description: "Estimates for specialized fire protection and suppression systems for an industrial manufacturing facility, including piping and sprinkler layouts.",
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

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Choose JU Estimating for MEP?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide strategic advantages for your MEP project bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Accuracy",
                icon: ShieldCheck,
                desc: "Our expert MEP estimators use cutting-edge software to deliver precise takeoffs, minimizing errors and ensuring budget adherence."
              },
              {
                title: "Fast Turnaround",
                icon: Clock,
                desc: "Receive detailed MEP estimates within 24–48 hours, enabling you to meet tight bidding schedules with confidence."
              },
              {
                title: "Significant Cost Savings",
                icon: DollarSign,
                desc: "Outsourcing saves you up to 60% on expenses compared to in-house estimating, boosting your project profitability."
              },
              {
                title: "Increased Bid Success",
                icon: TrendingUp,
                desc: "Our competitive and data-driven estimates provide a strategic advantage, significantly boosting your chances of winning more MEP projects."
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
      <section id="contact-us" className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Next MEP Project Bid?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective MEP estimating services tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@juestimating.com"
              className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
            >
              Get a Free Quote
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
