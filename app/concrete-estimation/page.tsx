"use client";

import Head from "next/head";
import Image from "next/image";
import { CheckCircle, ClipboardList, Layers, Clock, ChevronDown, HardHat, Truck, Building2, BarChart2 } from "lucide-react";
import {
  FileSearch,
  Ruler,
  DollarSign,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
	title: "Plan Analysis",
	description:
	  "Comprehensive review of project plans, specifications, and drawings to establish the concrete scope of work.",
	icon: FileSearch,
  },
  {
	title: "Quantity Takeoffs",
	description:
	  "Precise measurement of concrete materials and labor using advanced tools like PlanSwift and Bluebeam.",
	icon: Ruler,
  },
  {
	title: "Cost Estimation",
	description:
	  "Accurate pricing based on local labor rates, material costs, and RSMeans data tailored to your project's zip code.",
	icon: DollarSign,
  },
  {
	title: "Detailed Reporting",
	description:
	  "Organized Excel deliverables with line-item breakdowns, adhering to CSI MasterFormat standards.",
	icon: FileText,
  },
  {
	title: "Quality Review",
	description:
	  "Senior estimators audit each estimate to ensure precision and alignment with project requirements.",
	icon: ShieldCheck,
  },
];

const faqs = [
  {
	question: "What types of concrete projects do you estimate?",
	answer:
	  "We handle all Division 3 concrete projects, including foundations, slabs, sidewalks, driveways, retaining walls, parking lots, and more for residential, commercial, and industrial applications.",
  },
  {
	question: "How much does a concrete estimate cost?",
	answer:
	  "Our estimates average around $200, depending on project scope and complexity. Upload your plans for a precise quote within 5 minutes.",
  },
  {
	question: "What software do you use for concrete takeoffs?",
	answer:
	  "We utilize industry-standard tools like PlanSwift, Bluebeam, and Trimble to ensure accurate and efficient quantity takeoffs.",
  },
  {
	question: "What is the turnaround time for a concrete estimate?",
	answer:
	  "Most estimates are delivered within 24–48 hours, helping you meet tight bidding deadlines.",
  },
  {
	question: "Do you provide estimates for concrete repairs?",
	answer:
	  "Yes, we provide detailed estimates for concrete repair and rehabilitation projects including patching, resurfacing, and structural repairs.",
  },
];

export default function ConcreteTradePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
	setOpenFaq(openFaq === index ? null : index);
  };

  return (
	<>
	  <Head>
		<title>Concrete Estimating Services | JU Estimating</title>
		<meta
		  name="description"
		  content="JU Estimating provides accurate and timely concrete estimating services for contractors, covering all Division 3 concrete components for residential, commercial, and industrial projects."
		/>
	  </Head>

	  {/* Hero Section with Background Image */}
	  <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
		{/* Background Image */}
		<div className="absolute inset-0">
		  <Image
			src="case.jpg"
			alt="Concrete construction with workers pouring slab"
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
			  Expert Concrete Estimating Services
			</h1>
			<p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
			  Boost your bidding success with precise concrete takeoffs and cost estimates for foundations, slabs, pavements, and more.
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

	  {/* Stats Section - New */}
	  <section className="max-w-7xl mx-auto px-4 py-16 bg-white shadow-lg rounded-xl -mt-12 relative z-20 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
		  {[
			{ value: "24-48h", label: "Average Turnaround", icon: Clock },
			{ value: "98%", label: "Accuracy Rate", icon: CheckCircle },
			{ value: "500+", label: "Projects Monthly", icon: Building2 },
			{ value: "$200", label: "Average Cost", icon: DollarSign },
		  ].map((stat, index) => (
			<div key={index} className="p-6 bg-gray-50 rounded-xl">
			  <stat.icon className="w-10 h-10 mx-auto text-yellow-500 mb-3" />
			  <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
			  <p className="text-gray-600">{stat.label}</p>
			</div>
		  ))}
		</div>
	  </section>

	  {/* Services Grid - Enhanced */}
	  <section className="max-w-7xl mx-auto px-4 py-20">
		<div className="text-center mb-16">
		  <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
			Our Concrete Estimating Services
			<span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
		  </h2>
		  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
			Comprehensive estimating solutions for all your concrete construction needs
		  </p>
		</div>

		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
		  {[
			{
			  title: "Concrete Quantity Takeoffs",
			  icon: <Ruler className="w-6 h-6 text-yellow-500" />,
			  desc: "Detailed material and labor calculations for accurate budgeting"
			},
			{
			  title: "Bid Preparation & Submission",
			  icon: <FileText className="w-6 h-6 text-yellow-500" />,
			  desc: "Professional bid packages to help you win more projects"
			},
			{
			  title: "Foundation & Slab Estimates",
			  icon: <Layers className="w-6 h-6 text-yellow-500" />,
			  desc: "Precision estimates for structural concrete elements"
			},
			{
			  title: "Value Engineering",
			  icon: <BarChart2 className="w-6 h-6 text-yellow-500" />,
			  desc: "Cost-saving alternatives without compromising quality"
			},
			{
			  title: "Concrete Pavement & Flatwork",
			  icon: <HardHat className="w-6 h-6 text-yellow-500" />,
			  desc: "Accurate estimates for driveways, sidewalks, and paving"
			},
			{
			  title: "Rebar & Formwork Estimates",
			  icon: <ClipboardList className="w-6 h-6 text-yellow-500" />,
			  desc: "Detailed calculations for reinforcement and forming"
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

	  {/* Concrete Scope - Enhanced */}
	  <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24">
		<div className="max-w-7xl mx-auto px-4">
		  <h2 className="text-4xl font-extrabold text-slate-800 mb-16 text-center">
			What We Quantify in Concrete Estimates
		  </h2>

		  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{[
			  "Concrete Slabs & Flatwork",
			  "Foundations & Footings",
			  "Rebar & Reinforcement",
			  "Concrete Pavements",
			  "Retaining Walls",
			  "Concrete Curbs & Gutters",
			  "Formwork & Shoring",
			  "Waterproofing & Sealants",
			  "Precast Concrete Elements",
			  "Concrete Piles & Piers",
			  "Post-Tensioning Systems",
			  "Concrete Finishes & Textures",
			].map((item, idx) => (
			  <div
				key={idx}
				className="group bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 transition-transform hover:scale-[1.02] flex items-start gap-4"
			  >
				<div className="w-10 h-10 min-w-[2.5rem] bg-yellow-400 text-white flex items-center justify-center rounded-full shadow-lg">
				  <ClipboardList className="w-5 h-5" />
				</div>
				<div className="text-slate-700 font-medium text-sm group-hover:text-gray-900 transition">
				  {item}
				</div>
			  </div>
			))}
		  </div>
		</div>
	  </section>

	  {/* Project Types Section - New */}
	  <section className="max-w-7xl mx-auto px-4 py-20">
		<div className="text-center mb-16">
		  <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
			Concrete Projects We Estimate
			<span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
		  </h2>
		  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
			We cover all types of concrete construction across various sectors
		  </p>
		</div>

		<div className="grid md:grid-cols-3 gap-8">
		  {[
			{
			  title: "Residential Concrete",
			  items: [
				"Driveways & Patios",
				"House Foundations",
				"Garage Slabs",
				"Pool Decks",
				"Stamped Concrete"
			  ]
			},
			{
			  title: "Commercial Concrete",
			  items: [
				"Parking Structures",
				"Retail Foundations",
				"Office Building Slabs",
				"Warehouse Floors",
				"Mixed-Use Developments"
			  ]
			},
			{
			  title: "Industrial & Civil",
			  items: [
				"Factory Floors",
				"Bridge Decks",
				"Airport Runways",
				"Dams & Retaining Walls",
				"Heavy Equipment Pads"
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
		  Our Concrete Estimation Process
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

	  {/* Why Choose Us */}
	  <section className="bg-gray-50 py-20">
		<div className="max-w-7xl mx-auto px-4">
		  <div className="text-center mb-16">
			<h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
			  Why Choose JU Estimating
			  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-yellow-400 transform translate-y-2"></span>
			</h2>
			<p className="text-lg text-gray-600 max-w-2xl mx-auto">
			  We deliver more than just numbers - we provide competitive advantages
			</p>
		  </div>
		  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{[
			  {
				title: "Unmatched Accuracy",
				icon: Layers,
				desc: "Our certified estimators use advanced software to deliver precise concrete takeoffs, minimizing waste and ensuring budget compliance."
			  },
			  {
				title: "Fast Turnaround",
				icon: Clock,
				desc: "Receive detailed estimates within 24–48 hours, enabling you to meet tight bidding schedules with confidence."
			  },
			  {
				title: "Cost Savings",
				icon: DollarSign,
				desc: "Save up to 60% compared to in-house estimating, with accurate bids that enhance your project profitability."
			  },
			  {
				title: "Bid-Winning Precision",
				icon: ClipboardList,
				desc: "Our detailed and data-driven estimates help you craft competitive bids that stand out in the market."
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
			Ready to Win More Concrete Bids?
		  </h2>
		  <p className="text-lg mb-6 max-w-2xl mx-auto">
			Partner with JU Estimating for fast, accurate, and cost-effective concrete estimating services tailored to your project needs.
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