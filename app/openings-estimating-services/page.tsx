// This file will now serve content for Openings Estimating Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Home, TrendingUp,
  DoorOpen, Key, Frame, Sun, Store, Columns, HardHat, Square // 'Window' replaced with 'Square' here
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Plan Analysis & Specification Review",
    description:
      "Thorough examination of architectural plans, schedules, and specifications to identify all types of openings and hardware requirements.",
    icon: FileText,
  },
  {
    title: "Detailed Openings Takeoffs",
    description:
      "Precise quantification of doors (by type, material), frames, windows (by type, glazing), hardware sets, and specialty openings using advanced software.",
    icon: Ruler,
  },
  {
    title: "Cost Estimation & Pricing",
    description:
      "Accurate pricing based on material costs, fabrication, installation labor rates, and local market data for all opening components.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Deliverables include organized Excel spreadsheets with line-item breakdowns, marked-up plans, and detailed schedules for doors, frames, and hardware.",
    icon: ClipboardList,
  },
  {
    title: "Quality Assurance & Audit",
    description:
      "Every estimate is rigorously audited by senior estimators to guarantee precision, compliance, and reliability for complex opening schedules.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of openings do you estimate?",
    answer:
      "We provide estimates for a comprehensive range of openings, including all types of doors (metal, wood, aluminum, vinyl, fiberglass, specialty), door frames, windows (glazed, thermal), hardware, storefronts, curtain walls, skylights, louvers, and more.",
  },
  {
    question: "How much does an openings estimate cost?",
    answer:
      "Our openings estimates are competitively priced, with costs depending on the project's size, complexity, and the variety of opening types. Please upload your plans for a custom quote within 5 minutes.",
  },
  {
    question: "What software do you use for openings takeoffs?",
    answer:
      "Our expert estimators utilize industry-standard tools for precise takeoffs, ensuring accuracy for all opening components.",
  },
  {
    question: "What is the turnaround time for an openings estimate?",
    answer:
      "Most openings estimates are delivered within 24-48 hours. For larger or more complex projects with extensive schedules, we will provide an estimated delivery timeline upfront.",
  },
  {
    question: "Do your estimates include hardware schedules?",
    answer:
      "Yes, our estimates meticulously detail all necessary hardware components for each opening, ensuring accurate pricing and preventing omissions in your bids.",
  },
];

export default function OpeningsEstimatingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Openings Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides accurate estimating services for all types of doors, windows, frames, and hardware for commercial and residential projects."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for an openings-themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Replace with an actual openings image path
            alt="Modern building facade with various windows and doors"
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
              OPENINGS ESTIMATING SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Precise estimates for all your doors, windows, frames, and hardware, ensuring flawless project execution.
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
            { value: "99%", label: "Accuracy Rate", icon: CheckCircle },
            { value: "400+", label: "Projects Monthly", icon: Building2 },
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
            Our Openings Estimating Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive estimating solutions for all your door, window, and hardware needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Door & Frame Takeoffs",
              icon: <DoorOpen className="w-6 h-6 text-yellow-500" />,
              desc: "Precise quantification of all door types (metal, wood, specialty) and frames (hollow metal, aluminum, wood)."
            },
            {
              title: "Window & Glazing Estimates",
              icon: <Square className="w-6 h-6 text-yellow-500" />, // Changed to Square
              desc: "Accurate takeoffs for various window types, glazing specifications, and curtain wall systems."
            },
            {
              title: "Hardware Schedules & Pricing",
              icon: <Key className="w-6 h-6 text-yellow-500" />,
              desc: "Detailed estimates for all door hardware, including hinges, locks, closers, and access control."
            },
            {
              title: "Storefront & Entrance Systems",
              icon: <Store className="w-6 h-6 text-yellow-500" />,
              desc: "Estimates for commercial storefronts, automatic entrances, and complex glazed assemblies."
            },
            {
              title: "Specialty Openings",
              icon: <Sun className="w-6 h-6 text-yellow-500" />, // Using Sun for Skylights/Roof Windows
              desc: "Including skylights, roof windows, louvers, vents, coiling doors, and pressure-resistant doors."
            },
            {
              title: "Installation Labor & Costs",
              icon: <HardHat className="w-6 h-6 text-yellow-500" />,
              desc: "Accurate labor hour calculations for the installation of all opening components."
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

      {/* What We Quantify in Openings Estimates */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Detailed Quantities in Our Openings Estimates
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Metal Doors (hollow metal, stainless steel)",
              "Wood Doors (solid core, hollow core, fire-rated)",
              "Aluminum, Vinyl & Fiberglass Doors",
              "Specialty Doors (sliding, swing, access panels, hangar, coiling)",
              "Metal Door Frames (welded, knock-down)",
              "Wood Door Frames",
              "Aluminum Window Frames & Systems",
              "Vinyl & Fiberglass Window Frames",
              "Glazing (single, double, triple pane, low-e, tinted)",
              "Storefront & Curtain Wall Systems",
              "Skylights & Roof Windows",
              "Louvers & Vents",
              "Door Hardware (hinges, locks, closers, exit devices)",
              "Access Control Systems & Hardware",
              "Weatherstripping & Gasketing",
              "Sealants & Caulking",
              "Installation Labor (per unit, per opening type)",
              "Freight & Delivery Costs",
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

      {/* Full Width Text Section with "Ask for Estimations" Button */}
      <section className="bg-blue-700 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Navigate Complex Openings Schedules with Confidence
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            The sheer variety and intricate details of doors, windows, frames, and hardware can make openings estimating a daunting task. Our specialized estimators cut through the complexity, providing you with precise, itemized takeoffs and cost analyses. This ensures that every component is accounted for, from standard entries to specialty thermal-glazed systems, preventing costly omissions and ensuring your bids are competitive and accurate.
          </p>
          <a
            href="mailto:info@juestimating.com"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Ask for a Free Estimation
          </a>
        </div>
      </section>

      {/* Text Left, Image Right Section: Let's Start Today */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Let's Start Your Next Project Today
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Don't let the intricacies of openings estimating slow down your project. Partner with JU Estimating to streamline your pre-construction phase. Our efficient process and dedicated experts ensure you receive accurate, timely estimates, allowing you to focus on securing more bids and delivering successful projects. We are ready to assist you in achieving your project goals with precise numbers and reliable support.
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
              src="case.jpg" // Placeholder image for starting a project
              alt="Architects reviewing blueprints on a construction site"
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
            Openings Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We cover a broad spectrum of opening installations across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial & Institutional",
              items: [
                "Office Building Doors & Windows",
                "Retail Storefronts & Entrances",
                "Hospital & Clinic Door Systems",
                "School & University Openings",
                "Hotel & Hospitality Glazing",
              ]
            },
            {
              title: "Residential & Multi-Family",
              items: [
                "New Home Window & Door Packages",
                "Apartment & Condo Building Openings",
                "Patio Doors & Sliding Systems",
                "Garage Doors & Access Panels",
                "Custom Residential Glazing",
              ]
            },
            {
              title: "Specialty & Industrial",
              items: [
                "Industrial Facility Access Doors",
                "Hangar Doors & Large Openings",
                "Pressure-Resistant Doors",
                "Security & Bullet-Resistant Openings",
                "Custom Architectural Glazing",
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
          Our Openings Estimation Process
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
              Our openings estimating services are tailored for a diverse range of clients in the construction industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "General Contractors", icon: () => <Building2 /> },
              { title: "Door & Window Suppliers", icon: () => <DoorOpen /> },
              { title: "Glazing Contractors", icon: () => <Square /> }, // Changed to () => <Square />
              { title: "Architects & Designers", icon: () => <Layers /> },
            ].map((clientType, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                {/* Render the icon by calling the function */}
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
            Our Recent Openings Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the diverse openings projects we've helped successfully bid.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial Office Building Glazing",
              description: "Detailed estimates for all windows, curtain walls, and entrance systems for a multi-story office complex.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Residential Custom Home Doors & Windows",
              description: "Full estimates for a custom luxury home, including specialty doors, large format windows, and comprehensive hardware schedules.",
              image: "case.jpg" // Placeholder image
            },
            {
              title: "Institutional Facility Security Openings",
              description: "Estimates for high-security doors, frames, and hardware, including access control integration for a public institution.",
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
            Maximize Your Savings on Openings Estimates!
          </h2>
          <p className="text-2xl font-bold mb-6">
            Outsource Your Openings Estimates and <span className="text-blue-800 text-5xl">Save Up to 60%</span> on Expenses!
          </p>
          <p className="text-lg text-blue-900">
            Why navigate complex hardware schedules and endless door types in-house? Get precise, timely, and cost-effective solutions from our experts.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Choose JU Estimating for Openings?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide competitive advantages for your openings bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Accuracy",
                icon: ShieldCheck,
                desc: "Our certified estimators meticulously quantify every door, window, frame, and hardware component, minimizing errors and ensuring budget adherence."
              },
              {
                title: "Fast Turnaround",
                icon: Clock,
                desc: "Receive detailed openings estimates within 24–48 hours, enabling you to meet tight bidding schedules with confidence."
              },
              {
                title: "Significant Cost Savings",
                icon: DollarSign,
                desc: "Outsourcing saves you up to 60% on expenses compared to in-house estimating, boosting your project profitability on openings installations."
              },
              {
                title: "Increased Bid Success",
                icon: TrendingUp,
                desc: "Our competitive and data-driven estimates provide a strategic advantage, significantly boosting your chances of winning more door and window projects."
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
            Ready to Open New Opportunities with Accurate Bids?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective openings estimating services tailored to your project needs.
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
