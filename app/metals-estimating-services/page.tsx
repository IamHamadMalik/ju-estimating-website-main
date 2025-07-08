// This file will now serve content for Metals Estimating Services
"use client";

import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle, ClipboardList, Layers, Clock, ChevronDown,
  Building2, DollarSign, FileText, ShieldCheck,
  Ruler, Home, TrendingUp,
  Wrench, Nut, Bolt, HardHat, BarChart2, Factory, Scale, // Metals specific and relevant icons
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Plan Analysis & Scope Definition",
    description:
      "Thorough review of blueprints, structural drawings, and specifications to define the scope of all metal components.",
    icon: FileText,
  },
  {
    title: "Precise Metals Takeoffs",
    description:
      "Accurate quantification of structural steel, rebar, miscellaneous metals, and fasteners using specialized software like Tekla Structures and PlanSwift.",
    icon: Ruler,
  },
  {
    title: "Cost Estimation & Pricing",
    description:
      "Detailed pricing based on current material costs, fabrication labor, erection man-hours, and equipment rentals, using zip-code specific data.",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Deliverables include organized Excel spreadsheets, bar bending schedules, and marked-up plans, adhering to CSI MasterFormat or Uniformat.",
    icon: ClipboardList,
  },
  {
    title: "Quality Assurance & Compliance",
    description:
      "Every estimate is rigorously audited by senior estimators to ensure precision and compliance with industry standards like AASHTO, ASTM, and CRSI.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What types of metals do you estimate?",
    answer:
      "We provide estimates for structural steel, rebar (reinforcing steel), and miscellaneous metals including railings, stairs, gratings, metal decking, joists, stud framing, and more for various construction types.",
  },
  {
    question: "How accurate are your metals estimates?",
    answer:
      "Our metals estimates boast a high accuracy rate, minimizing waste and change orders. We use advanced software and experienced estimators to ensure precise material and labor calculations.",
  },
  {
    question: "What software do you use for metals takeoffs?",
    answer:
      "We utilize industry-leading software such as PlanSwift, ASA Rebar Estimating Software, Tekla Structures, and AutoCAD to perform our metals takeoffs and detailing.",
  },
  {
    question: "What is the turnaround time for a metals estimate?",
    answer:
      "Most metals estimates are delivered within 24-48 hours. For larger or more complex projects, we will provide a specific timeline upon review of your plans.",
  },
  {
    question: "Do you provide detailing and shop drawings for metals?",
    answer:
      "Yes, in addition to estimating, we offer structural steel detailing and shop drawing services, including optimum bar bending schedules, adhering to relevant coding formats like ACI and CRSI.",
  },
];

export default function MetalsEstimatingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Metals Estimating Services | JU Estimating</title>
        <meta
          name="description"
          content="JU Estimating provides accurate structural steel, rebar, and miscellaneous metals estimating services for all construction projects."
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Placeholder for a metals-themed image */}
        <div className="absolute inset-0">
          <Image
            src="case.jpg" // Replace with an actual metals image path
            alt="Structural steel beams being erected on a construction site"
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
              METALS ESTIMATING SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Precision estimates for structural steel, rebar, and miscellaneous metals to build strong and cost-effectively.
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
            { value: "95%+", label: "Accuracy Rate", icon: CheckCircle },
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
            Our Metals Estimating Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive estimating solutions for all your metal construction needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Structural Steel Takeoffs",
              icon: <Wrench className="w-6 h-6 text-yellow-500" />,
              desc: "Precise quantification of beams, columns, plates, and connections for steel structures."
            },
            {
              title: "Rebar & Reinforcement Estimates",
              icon: <Nut className="w-6 h-6 text-yellow-500" />, // Using Nut as a rebar-like icon
              desc: "Detailed bar bending schedules and quantity takeoffs for all reinforcing steel."
            },
            {
              title: "Miscellaneous Metals",
              icon: <Bolt className="w-6 h-6 text-yellow-500" />, // Using Bolt for misc. metals
              desc: "Estimates for stairs, railings, ladders, gratings, metal decking, and joists."
            },
            {
              title: "Fabrication & Erection Costs",
              icon: <Factory className="w-6 h-6 text-yellow-500" />,
              desc: "Accurate pricing for material, labor, equipment, and erection man-hours."
            },
            {
              title: "Value Engineering for Metals",
              icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
              desc: "Identifying cost-saving alternatives without compromising structural integrity or quality."
            },
            {
              title: "Shop Drawings & Detailing",
              icon: <Layers className="w-6 h-6 text-yellow-500" />,
              desc: "Providing detailed shop drawings and structural steel detailing services."
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

      {/* What We Quantify in Metals Estimates */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
            Detailed Quantities in Our Metals Estimates
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Structural Steel Beams, Columns & Girders",
              "Steel Plates & Connectors",
              "Fasteners (bolts, nuts, washers)",
              "Rebar (all sizes and grades)",
              "Wire Mesh & Stirrups",
              "Lintels & Angles",
              "Metal Decking (composite, non-composite)",
              "Metal Joists & Trusses",
              "Stairs, Railings & Ladders",
              "Gratings & Catwalks",
              "Light Gauge Metal Framing (studs, tracks)",
              "Anchor Bolts & Embeds",
              "Shear Studs",
              "Welding Materials & Consumables",
              "Fabrication & Erection Man-Hours",
              "Painting & Coating for Metals",
              "Freight & Delivery Costs",
              "Equipment Rental (cranes, lifts)",
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

      {/* Large Section 1: Precision in Metals Estimating */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Unmatched Precision in Metals Estimating
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In the complex world of metal construction, accuracy is paramount. Our team of certified metals estimators utilizes cutting-edge software like Tekla Structures and PlanSwift to perform highly precise takeoffs for structural steel, rebar, and miscellaneous metals. We meticulously quantify every beam, column, plate, and fastener, ensuring that your estimates reflect the true scope of work down to the smallest detail. This rigorous approach minimizes material waste, prevents costly overruns, and provides you with a reliable foundation for your bids.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our expertise extends beyond just numbers; we understand the nuances of metal fabrication and erection. This allows us to provide not just quantities, but also detailed labor and equipment costs, helping you to truly understand the full financial picture of your metal projects. Trust JU Estimating to deliver the precision you need to win more bids and maximize profitability.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="case.jpg" // Placeholder image for precision/software
              alt="Engineer analyzing structural steel blueprints on a computer"
              width={600}
              height={400}
              className="rounded-xl shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Large Section 2: Outsourcing vs. In-House Comparison (with visual comparison) */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-1">
            {/* Simple Visual Comparison - Bar Chart Concept */}
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Cost & Efficiency Comparison</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-700 font-medium">In-House Estimator</span>
                  <div className="w-2/3 bg-red-200 h-8 rounded-md relative">
                    <div className="bg-red-500 h-full w-4/5 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">High Cost</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-700 font-medium">Outsourced (JU Estimating)</span>
                  <div className="w-2/3 bg-green-200 h-8 rounded-md relative">
                    <div className="bg-green-500 h-full w-2/5 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">Low Cost</div>
                  </div>
                </div>
                <div className="flex items-center pt-4">
                  <span className="w-1/3 text-gray-700 font-medium">In-House Turnaround</span>
                  <div className="w-2/3 bg-red-200 h-8 rounded-md relative">
                    <div className="bg-red-500 h-full w-3/4 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">Slower</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-700 font-medium">Outsourced Turnaround</span>
                  <div className="w-2/3 bg-green-200 h-8 rounded-md relative">
                    <div className="bg-green-500 h-full w-1/3 rounded-md flex items-center justify-end pr-2 text-white font-bold text-sm">Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Outsource Your Metals Estimates: A Strategic Advantage
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Maintaining an in-house metals estimator can be a significant overhead. From salaries and benefits to expensive software licenses and continuous training, the costs quickly add up. By outsourcing your metals estimating needs to JU Estimating, you can achieve substantial savings, often up to 60% compared to an in-house team. This allows you to reallocate resources, reduce fixed costs, and invest more in your core business operations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond cost savings, outsourcing provides unparalleled flexibility and access to specialized expertise. You get accurate, timely estimates only when you need them, without the commitment of a full-time employee. Our team of dedicated metals specialists ensures your bids are competitive, precise, and delivered quickly, giving you a distinct advantage in a demanding market. Focus on building, and let us handle the numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Metals Projects We Estimate
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We cover a broad spectrum of metal construction across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial Structural Steel",
              items: [
                "Office Buildings & High-Rises",
                "Retail Centers & Shopping Malls",
                "Educational & Institutional Facilities",
                "Parking Structures",
                "Mixed-Use Developments",
              ]
            },
            {
              title: "Industrial & Heavy Metals",
              items: [
                "Manufacturing Plants & Factories",
                "Warehouses & Distribution Centers",
                "Power Plants & Energy Facilities",
                "Bridges & Infrastructure",
                "Heavy Equipment Foundations",
              ]
            },
            {
              title: "Residential & Miscellaneous Metals",
              items: [
                "Custom Home Steel Framing",
                "Balconies & Railings",
                "Stairs & Ladders",
                "Decorative Ironwork",
                "Residential Rebar Foundations",
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
          Our Metals Estimation Process
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
              Our metals estimating services are tailored for a diverse range of clients in the construction industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "General Contractors", icon: Building2 },
              { title: "Steel Fabricators", icon: Factory },
              { title: "Rebar Contractors", icon: Nut },
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

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
              Why Choose JU Estimating for Metals?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just numbers - we provide competitive advantages for your metals bids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Accuracy",
                icon: ShieldCheck,
                desc: "Our certified metals estimators use cutting-edge software to deliver precise takeoffs, minimizing errors and costly material waste."
              },
              {
                title: "Fast Turnaround",
                icon: Clock,
                desc: "Receive detailed metals estimates within 24–48 hours, enabling you to meet tight bidding schedules with confidence."
              },
              {
                title: "Significant Cost Savings",
                icon: DollarSign,
                desc: "Outsourcing saves you up to 60% compared to in-house estimating, enhancing your project profitability on metal work."
              },
              {
                title: "Increased Bid Success",
                icon: TrendingUp,
                desc: "Our competitive and data-driven estimates significantly boost your chances of winning more structural steel and metals projects."
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
            Ready to Forge Ahead with Your Metals Project Bids?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with JU Estimating for fast, accurate, and cost-effective metals estimating services tailored to your project needs.
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