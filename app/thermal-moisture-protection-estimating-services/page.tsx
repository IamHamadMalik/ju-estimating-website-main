// This file will now serve content for Thermal & Moisture Protection Estimating Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Home, TrendingUp,
  Thermometer, Droplet, FireExtinguisher, CloudRain, Shield,
  Sun, BarChart2, // <--- 'Roof' removed, 'Home' is already there
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Plan Review & Scope Identification",
    description:
      "Thorough analysis of blueprints and specifications to identify all thermal and moisture protection components, including R-values, membrane types, and fire ratings.",
    icon: FileText,
  },
  {
    title: "Precise Material & Application Takeoffs",
    description:
      "Accurate quantification of insulation (rigid, batt, spray), waterproofing membranes, roofing systems, sealants, and firestopping materials based on application methods.",
    icon: Ruler,
  },
  {
    title: "Cost Estimation & Pricing",
    description:
      "Detailed pricing for materials, labor for installation, equipment, and consumables, incorporating regional cost data and specific system requirements.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Deliverables include itemized Excel spreadsheets, marked-up plans showing quantified areas, and detailed descriptions adhering to industry standards.",
    icon: ClipboardList,
  },
  {
    title: "Quality Assurance & Compliance Check",
    description:
      "Every estimate undergoes rigorous review by senior estimators to ensure accuracy, compliance with codes (e.g., energy, fire), and constructability.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of thermal and moisture protection do you estimate?",
    answer:
      "We cover a wide range, including thermal insulation (batt, rigid, spray, loose-fill), waterproofing (sheet, fluid-applied), roofing systems (shingle, metal, membrane), sealants, firestopping, vapor barriers, and more for both residential and commercial projects.",
  },
  {
    question: "How do your estimates ensure energy efficiency compliance?",
    answer:
      "Our estimators are well-versed in energy codes and standards. We meticulously quantify insulation materials by R-value and application method to ensure your designs meet or exceed required energy performance standards, contributing to LEED or other certifications.",
  },
  {
    question: "Can you provide estimates for specialized roofing systems?",
    answer:
      "Yes, we provide estimates for various roofing systems, including steep slope (asphalt, metal, slate), low slope (TPO, EPDM, PVC), built-up roofing, modified bitumen, and green roofs. We account for all components from decking to flashing.",
  },
  {
    question: "What is the turnaround time for a thermal & moisture estimate?",
    answer:
      "Most thermal & moisture protection estimates are delivered within 24-48 hours. For extensive or complex projects, we will provide a clear timeline upon review of your plans and specifications.",
  },
  {
    question: "Do your estimates help prevent moisture damage?",
    answer:
      "Absolutely. Our detailed takeoffs for waterproofing, damp proofing, and vapor barriers help ensure all critical areas are covered. Accurate estimates lead to proper material procurement and installation, significantly reducing the risk of moisture intrusion, mold, and structural damage.",
  },
];

export default function ThermalMoistureProtectionEstimatingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Thermal & Moisture Protection Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides accurate estimates for insulation, waterproofing, roofing, and firestopping to ensure building integrity and energy efficiency."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for a thermal/moisture-themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Replace with an actual image path
            alt="Building exterior with visible insulation and weather barrier"
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
              THERMAL & MOISTURE PROTECTION ESTIMATING
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Guard your projects against heat, cold, and water with our precise thermal & moisture protection estimates.
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
            { value: "97%+", label: "Accuracy Rate", icon: CheckCircle },
            { value: "350+", label: "Projects Monthly", icon: Building2 },
            { value: "Energy Savings", label: "Optimized", icon: Thermometer },
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
            Our Thermal & Moisture Protection Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized estimating for crucial building envelope components.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Thermal Insulation Takeoffs",
              icon: <Thermometer className="w-6 h-6 text-yellow-500" />,
              desc: "Precise quantification of batt, rigid, spray foam, loose-fill, and radiant barrier insulation by R-value and area."
            },
            {
              title: "Waterproofing & Damp Proofing",
              icon: <Droplet className="w-6 h-6 text-yellow-500" />,
              desc: "Detailed takeoffs for below-grade waterproofing, fluid-applied membranes, and damp proofing systems."
            },
            {
              title: "Roofing Systems Estimates",
              icon: <Home className="w-6 h-6 text-yellow-500" />,
              desc: "Accurate estimates for various roofing types including shingles, metal, TPO, EPDM, built-up, and green roofs."
            },
            {
              title: "Sealants & Caulking",
              icon: <Shield className="w-6 h-6 text-yellow-500" />, // Using shield for sealing
              desc: "Quantification of joint sealants, expansion joints, and firestopping sealants for all building gaps."
            },
            {
              title: "Firestopping & Fireproofing",
              icon: <FireExtinguisher className="w-6 h-6 text-yellow-500" />,
              desc: "Estimates for fire-rated assemblies, spray-applied fireproofing, and penetration firestopping systems."
            },
            {
              title: "Vapor & Air Barriers",
              icon: <CloudRain className="w-6 h-6 text-yellow-500" />, // Using CloudRain for moisture barrier
              desc: "Takeoffs for vapor retarders, air barriers, and weather-resistive barriers to control moisture and airflow."
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

      {/* What We Quantify in Thermal & Moisture Protection Estimates */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Detailed Quantities in Our Thermal & Moisture Estimates
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Batt & Roll Insulation (Fiberglass, Mineral Wool)",
              "Rigid Insulation (XPS, EPS, Polyiso)",
              "Spray Foam Insulation (Open & Closed Cell)",
              "Loose-Fill Insulation (Cellulose, Fiberglass)",
              "Radiant Barriers & Vapor Retarders",
              "Sheet Waterproofing Membranes (Self-adhered, Torch-applied)",
              "Fluid-Applied Waterproofing",
              "Damp Proofing Coatings",
              "Asphalt Shingles, Metal Roofing Panels, Tiles",
              "TPO, EPDM, PVC Roofing Membranes",
              "Built-Up Roofing (BUR), Modified Bitumen (Mod-Bit)",
              "Roofing Underlayments, Flashings, Coping",
              "Roof Accessories (Vents, Curbs, Gutters, Downspouts)",
              "Firestopping Sealants & Devices",
              "Spray-Applied Fireproofing (Cementitious, Intumescent)",
              "Joint Sealants (Silicone, Urethane, Acrylic)",
              "Air & Weather-Resistive Barriers",
              "EIFS (Exterior Insulation and Finish Systems)",
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

      {/* Pointers in 3 Rows Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Key Aspects of Thermal & Moisture Protection
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Critical elements for a durable, energy-efficient, and healthy building.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Energy Efficiency",
              icon: <Thermometer className="w-10 h-10 text-yellow-500" />,
              description: "Proper insulation reduces heating and cooling costs significantly, leading to long-term energy savings and a lower carbon footprint."
            },
            {
              title: "Moisture Control",
              icon: <Droplet className="w-10 h-10 text-yellow-500" />,
              description: "Effective waterproofing and vapor barriers prevent water intrusion, safeguarding against mold growth, structural damage, and costly repairs."
            },
            {
              title: "Fire Safety & Protection",
              icon: <FireExtinguisher className="w-10 h-10 text-yellow-500" />,
              description: "Accurate firestopping and fireproofing ensure compliance with building codes, enhancing occupant safety and limiting fire spread."
            },
          ].map((pointer, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{pointer.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{pointer.title}</h3>
              <p className="text-gray-600 text-sm">{pointer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Graphical Comparison: Impact of Accurate Estimates */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 flex justify-center">
            {/* Simple Visual Comparison - Bar Chart Concept */}
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Estimation Impact Comparison</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-700 font-medium">Poor Estimates</span>
                  <div className="w-2/3 bg-red-200 h-8 rounded-md relative">
                    <div className="bg-red-500 h-full w-4/5 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">High Waste / Rework</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-700 font-medium">Accurate Estimates</span>
                  <div className="w-2/3 bg-green-200 h-8 rounded-md relative">
                    <div className="bg-green-500 h-full w-2/5 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">Low Waste / Rework</div>
                  </div>
                </div>
                <div className="flex items-center pt-4">
                  <span className="w-1/3 text-gray-700 font-medium">Project Overruns</span>
                  <div className="w-2/3 bg-red-200 h-8 rounded-md relative">
                    <div className="bg-red-500 h-full w-3/4 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">High Risk</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-700 font-medium">Budget Adherence</span>
                  <div className="w-2/3 bg-green-200 h-8 rounded-md relative">
                    <div className="bg-green-500 h-full w-1/3 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">High Reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              The Impact of Precise Thermal & Moisture Estimates
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Inaccurate estimates for thermal and moisture protection can lead to significant cost overruns, material waste, and critical building performance failures. From overlooked insulation details leading to higher energy bills to insufficient waterproofing causing mold and structural damage, the consequences are severe. Our meticulous estimating process identifies every required component and ensures optimal quantities, preventing these costly pitfalls.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By investing in precise thermal & moisture protection estimates with JU Estimating, you're not just getting numbers; you're securing your project's long-term integrity, energy efficiency, and financial health. Our accurate takeoffs lead to efficient material procurement, reduced waste, and adherence to your budget, ensuring a high-performing and durable building envelope.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Thermal & Moisture Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We handle diverse thermal and moisture protection scopes across various construction types.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial & Institutional Buildings",
              items: [
                "Office Tower Insulation & Envelope",
                "School & University Roofing Systems",
                "Hospital Waterproofing & Firestopping",
                "Retail Center Vapor Barriers",
                "Multi-Story Building Sealants",
              ]
            },
            {
              title: "Residential Developments",
              items: [
                "Single-Family Home Insulation Packages",
                "Multi-Family Building Envelope",
                "Basement Waterproofing for Homes",
                "Roofing for Residential Communities",
                "Energy-Efficient Home Upgrades",
              ]
            },
            {
              title: "Industrial & Specialty Projects",
              items: [
                "Warehouse Roofing & Insulation",
                "Manufacturing Plant Fireproofing",
                "Cooling Tower Waterproofing",
                "Specialty Coating Systems",
                "Data Center Thermal Control",
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
          Our Thermal & Moisture Protection Estimation Process
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

      {/* Who We Work With */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Who We Work With
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our thermal & moisture protection estimating services cater to a wide array of industry professionals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "General Contractors", icon: () => <Building2 /> },
              { title: "Insulation Contractors", icon: () => <Thermometer /> },
              { title: "Roofing Contractors", icon: () => <Home /> },
              { title: "Waterproofing Specialists", icon: () => <Droplet /> },
            ].map((clientType, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 mx-auto text-yellow-500 mb-4">
                  {clientType.icon()}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{clientType.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Our Recent Thermal & Moisture Protection Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the diverse projects where our estimates made a difference.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial High-Rise Envelope",
              description: "Comprehensive estimates for full building envelope including insulation, air barriers, and waterproofing for a new high-rise.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Industrial Roof Replacement",
              description: "Detailed takeoffs for the complete replacement of a large industrial facility's roofing system (TPO/EPDM) with insulation upgrades.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Residential Basement Waterproofing",
              description: "Estimates for extensive below-grade waterproofing and damp proofing systems for a new luxury residential development.",
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
            Optimize Your Thermal & Moisture Protection Bids!
          </h2>
          <p className="text-2xl font-bold mb-6">
            Outsource Your Estimates and <span className="text-blue-800 text-5xl">Save Up to 60%</span> on Expenses!
          </p>
          <p className="text-lg text-blue-900">
            Why grapple with complex energy codes and myriad waterproofing solutions in-house? Get precise, timely, and cost-effective solutions from our experts.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Choose JU Estimating for Thermal & Moisture?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide competitive advantages for your bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Energy Efficiency Expertise",
                icon: () => <Thermometer />, // CORRECTED: Wrapped in a function
                desc: "Our estimates ensure compliance with energy codes, optimizing material use for maximum thermal performance and cost savings."
              },
              {
                title: "Moisture Mitigation",
                icon: () => <Droplet />, // CORRECTED: Wrapped in a function
                desc: "Precise takeoffs for waterproofing and vapor barriers minimize the risk of moisture damage, protecting your project's integrity."
              },
              {
                title: "Fire Safety Compliance",
                icon: () => <FireExtinguisher />, // CORRECTED: Wrapped in a function
                desc: "Accurate firestopping and fireproofing estimates ensure your projects meet stringent safety regulations and codes."
              },
              {
                title: "Reduced Waste & Rework",
                icon: () => <TrendingUp />, // CORRECTED: Wrapped in a function
                desc: "Detailed and accurate quantities lead to efficient procurement, significantly reducing material waste and costly onsite rework."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                  {/* CORRECTED: Call the icon function */}
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
            Ready to Protect Your Project with Accurate Estimates?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective thermal & moisture protection estimating services.
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