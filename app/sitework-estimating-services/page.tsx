// This file will now serve content for Sitework Estimating Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Home, TrendingUp,
  Tractor, Trees, Droplet, GripHorizontal, Hammer, Users,
  Cpu, Award, Lightbulb, // New icons for the creative section
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Site Plan Analysis & Scope Definition",
    description:
      "Thorough review of civil, architectural, and landscape plans to identify all sitework elements and define the project scope.",
    icon: FileText,
  },
  {
    title: "Precise Earthwork & Utility Takeoffs",
    description:
      "Accurate quantification of cut and fill volumes, excavation, grading, paving areas, and underground utility linear feet using specialized software.",
    icon: Ruler,
  },
  {
    title: "Cost Estimation & Pricing",
    description:
      "Detailed pricing for materials, labor, equipment, hauling, disposal, and permits, incorporating regional cost data and specific site conditions.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Deliverables include organized Excel spreadsheets with line-item breakdowns, marked-up plans, and detailed summaries adhering to industry standards.",
    icon: ClipboardList,
  },
  {
    title: "Quality Assurance & Risk Assessment",
    description:
      "Every estimate undergoes rigorous audit by senior estimators to ensure precision, identify potential site challenges, and mitigate risks.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of sitework projects do you estimate?",
    answer:
      "We provide estimates for a wide range of sitework, including site clearing, demolition, excavation (cut & fill, trenching), grading, underground utilities (storm, sanitary, water, electrical), paving (asphalt, concrete), landscaping, and erosion control.",
  },
  {
    question: "How do you handle complex earthwork calculations?",
    answer:
      "Our estimators use advanced 3D modeling and earthwork software to accurately calculate cut and fill volumes, soil import/export requirements, and optimize grading plans for maximum efficiency and cost savings.",
  },
  {
    question: "Do your estimates include demolition and disposal costs?",
    answer:
      "Yes, our sitework estimates comprehensively cover all aspects of demolition, including concrete, asphalt, and existing structures, along with precise calculations for hauling and disposal fees.",
  },
  {
    question: "What is the turnaround time for a sitework estimate?",
    answer:
      "Most sitework estimates are delivered within 24-48 hours. For very large or highly complex site development projects, we will provide an estimated delivery timeline upfront.",
  },
  {
    question: "Can you help with utility trenching and piping estimates?",
    answer:
      "Absolutely. We provide detailed takeoffs for all underground utilities, including linear footage of pipes (storm, sanitary, water), electrical conduits, manholes, catch basins, and associated excavation and backfill.",
  },
];

export default function SiteworkEstimatingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Sitework Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides accurate sitework estimating services including excavation, grading, utilities, and paving for all construction projects."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for a sitework-themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Updated path
            alt="Heavy machinery performing excavation on a construction site"
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
              SITEWORK ESTIMATING SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Laying the groundwork for success with precise earthwork, utility, and paving estimates.
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
            { value: "96%+", label: "Accuracy Rate", icon: CheckCircle },
            { value: "450+", label: "Projects Monthly", icon: Building2 },
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
            Our Sitework Estimating Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive estimating solutions for all phases of site development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Site Clearing & Demolition",
              icon: <Hammer className="w-6 h-6 text-yellow-500" />,
              desc: "Accurate takeoffs for tree removal, grubbing, existing structure demolition, and debris disposal."
            },
            {
              title: "Earthwork & Grading",
              icon: <Tractor className="w-6 h-6 text-yellow-500" />,
              desc: "Precise cut and fill volumes, soil import/export analysis, rough grading, and fine grading estimates."
            },
            {
              title: "Underground Utilities",
              icon: <Droplet className="w-6 h-6 text-yellow-500" />,
              desc: "Detailed quantification of storm drainage, sanitary sewer, water lines, and electrical conduits."
            },
            {
              title: "Paving & Flatwork",
              icon: <GripHorizontal className="w-6 h-6 text-yellow-500" />,
              desc: "Estimates for asphalt paving, concrete sidewalks, curbs, gutters, and parking lot striping."
            },
            {
              title: "Erosion Control & Landscaping",
              icon: <Trees className="w-6 h-6 text-yellow-500" />,
              desc: "Takeoffs for silt fences, hydroseeding, planting beds, irrigation systems, and hardscaping."
            },
            {
              title: "Site Remediation & Stabilization",
              icon: <Layers className="w-6 h-6 text-yellow-500" />, // Using Layers for ground layers/stabilization
              desc: "Estimates for soil stabilization, environmental remediation, and specialized ground improvements."
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

      {/* What We Quantify in Sitework Estimates */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Detailed Quantities in Our Sitework Estimates
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Site Clearing (acres, sq ft)",
              "Demolition (concrete, asphalt, structures)",
              "Excavation (cubic yards for footings, trenches, foundations)",
              "Cut & Fill Volumes (cubic yards)",
              "Rough & Fine Grading (sq ft, acres)",
              "Soil Import/Export & Disposal (cubic yards, tons)",
              "Compaction & Soil Stabilization",
              "Asphalt Paving (sq ft, tons, thickness)",
              "Concrete Paving (sq ft, cubic yards, thickness)",
              "Sidewalks, Curbs & Gutters (linear feet, sq ft)",
              "Storm Drainage Pipe & Structures (linear feet, catch basins, manholes)",
              "Sanitary Sewer Pipe & Structures (linear feet, cleanouts)",
              "Water Lines & Fire Hydrants (linear feet, valves)",
              "Electrical & Communication Duct Banks",
              "Erosion Control (silt fence, hydroseeding, blankets)",
              "Retaining Walls (linear feet, materials)",
              "Landscaping (topsoil, planting, irrigation, sod)",
              "Site Furnishings (benches, bike racks)",
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

      {/* Full Width Text Section with "Let's Get the Estimation" Button */}
      <section className="bg-blue-700 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Unlock the Full Potential of Your Site Development Projects
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Sitework is the critical first step for any construction project, and accurate estimates here are paramount to avoiding costly delays and unforeseen expenses. Our team specializes in meticulous takeoffs for every aspect of site preparation, from complex earthwork calculations and utility installations to paving and landscaping. We provide the detailed numbers you need to bid confidently and manage your project efficiently from the ground up.
          </p>
          <a
            href="mailto:info@juestimating.com"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Let's Get the Estimation
          </a>
        </div>
      </section>

      {/* Text Left, Image Right Section: Let's Start Today */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Start Your Sitework Project with Confidence Today
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Accurate sitework estimates are the foundation of a successful project. Don't leave this crucial phase to guesswork. Partner with JU Estimating to ensure your bids are precise, competitive, and profitable. Our expertise in earthwork, utilities, and paving will give you the edge you need to secure more projects and execute them flawlessly.
            </p>
            <a
              href="mailto:info@juestimating.com"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Let's Start Today
            </a>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="case.jpg" // Updated path
              alt="Construction site being prepared with heavy machinery"
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
            Sitework Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We cover a broad spectrum of site development across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial Site Development",
              items: [
                "Retail & Office Complex Sites",
                "Industrial Park Grading & Utilities",
                "Hospital & Institutional Site Prep",
                "Parking Lot Construction",
                "Roadway & Access Improvements",
              ]
            },
            {
              title: "Residential & Multi-Family Sites",
              items: [
                "New Subdivision Earthwork",
                "Single-Family Home Site Prep",
                "Apartment Complex Site Utilities",
                "Residential Road & Driveway Paving",
                "Stormwater Management Ponds",
              ]
            },
            {
              title: "Specialty & Public Works",
              items: [
                "Landfill & Remediation Sites",
                "Airport Runway Extensions",
                "Sports Field Grading",
                "Utility Infrastructure Projects",
                "Erosion Control & Landscaping Projects",
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

      {/* --- */}
      {/* NEW SECTION: Our Advantage: Technology & Expertise */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Advantage: Advanced Technology & Unmatched Expertise
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            We combine state-of-the-art software with decades of hands-on experience to deliver estimates that are not just numbers, but strategic assets for your bid.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cutting-Edge Software</h3>
              <p className="text-blue-100">
                Utilizing industry-leading platforms like PlanSwift, Bluebeam, and Trimble Earthworks for unparalleled accuracy and speed in takeoffs.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Seasoned Professionals</h3>
              <p className="text-blue-100">
                Our team comprises veteran estimators with deep insights into sitework challenges and market pricing, ensuring realistic projections.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Strategic Insights</h3>
              <p className="text-blue-100">
                Beyond quantities, we provide insights that help you identify value engineering opportunities and optimize your project plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- */}

      {/* Estimation Process */}
      <section id="process" className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
          Our Sitework Estimation Process
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
              Our sitework estimating services cater to a wide array of industry professionals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "General Contractors", icon: () => <Building2 /> },
              { title: "Excavation Contractors", icon: () => <Tractor /> },
              { title: "Site Developers", icon: () => <Home /> },
              { title: "Civil Engineers", icon: () => <Layers /> },
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
            Our Recent Sitework Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the diverse sitework projects we've helped successfully bid.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Large-Scale Commercial Grading",
              description: "Comprehensive earthwork estimates for a new commercial complex, including extensive cut/fill and fine grading.",
              image: "case.jpg" // Updated path
            },
            {
              title: "Residential Subdivision Utilities",
              description: "Detailed takeoffs for all underground utilities (storm, sanitary, water, electrical) for a multi-phase residential development.",
              image: "case.jpg" // Updated path
            },
            {
              title: "Industrial Paving & Site Prep",
              description: "Estimates for heavy-duty asphalt paving, concrete pads, and site preparation for a new industrial facility.",
              image: "case.jpg" // Updated path
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
            Maximize Your Savings on Sitework Estimates!
          </h2>
          <p className="text-2xl font-bold mb-6">
            Outsource Your Sitework Estimates and <span className="text-blue-800 text-5xl">Save Up to 60%</span> on Expenses!
          </p>
          <p className="text-lg text-blue-900">
            Why invest in costly in-house estimating teams and software for complex earthwork? Get precise, timely, and cost-effective solutions from our experts.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Choose JU Estimating for Sitework?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide competitive advantages for your sitework bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Earthwork Optimization",
                icon: () => <Tractor />,
                desc: "Our precise cut/fill calculations optimize earthwork, reducing hauling costs and maximizing site efficiency."
              },
              {
                title: "Utility Cost Control",
                icon: () => <Droplet />,
                desc: "Detailed utility takeoffs ensure accurate pricing for all underground infrastructure, preventing costly surprises."
              },
              {
                title: "Paving & Flatwork Accuracy",
                icon: () => <GripHorizontal />,
                desc: "Accurate estimates for paving and flatwork minimize material waste and ensure a smooth project finish."
              },
              {
                title: "Risk Mitigation",
                icon: () => <ShieldCheck />,
                desc: "Our thorough analysis identifies potential site challenges early, allowing for proactive planning and risk reduction."
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
            Ready to Lay the Foundation for Your Next Successful Project?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective sitework estimating services tailored to your project needs.
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