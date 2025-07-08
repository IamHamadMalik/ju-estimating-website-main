"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Calculator, Package, Calendar, FileText, Building } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/config"
import { Mail, Phone } from "lucide-react";


const servicesCategories = [
	{
		id: "cost-estimation",
		title: "Cost Estimation",
		icon: Calculator,
		href: "/services/cost-estimating",
		subServices: [
			{ title: "Residential", href: "/services/residential-estimating" },
			{ title: "Commercial", href: "/services/commercial-estimating" },
			{ title: "Industrial", href: "/services/industrial-estimating" },
			{ title: "Xactimate", href: "/services/xactimate-estimating" },
			{ title: "Preliminary Estimate", href: "/services/preliminary-estimate" },
		],
	},
	{
		id: "construction-takeoff",
		title: "Construction Takeoff",
		icon: Package,
		href: "/services/construction-takeoff",
		subServices: [
			{ title: "Quantity Takeoff", href: "/services/quantity-takeoff" },
			{ title: "Material Takeoff", href: "/services/material-takeoff" },
		],
	},
	{
		id: "bid-consultancy",
		title: "Bid Consultancy",
		icon: FileText,
		href: "/services/bid-consultancy",
		subServices: [
			{ title: "Bid Preparation", href: "/services/bid-preparation" },
			{ title: "Proposal Development", href: "/services/proposal-development" },
			{ title: "Competitive Analysis", href: "/services/competitive-analysis" },
		],
	},
	{
		id: "project-management",
		title: "Project Management",
		icon: Calendar,
		href: "/services/project-management",
		subServices: [
			{ title: "CPM Scheduling", href: "/services/cpm-scheduling" },
			{ title: "Project Planning", href: "/services/project-planning" },
			{ title: "Timeline Management", href: "/services/timeline-management" },
			{ title: "Resource Allocation", href: "/services/resource-allocation" },
		],
	},
	{
		id: "construction-consultant",
		title: "Construction Estimating Consultant",
		icon: Building,
		href: "/services/construction-consultant",
		subServices: [
			{ title: "Monthly Services", href: "/services/monthly-services" },
			{ title: "Dedicated Estimator", href: "/services/dedicated-estimator" },
		],
	},
	{
		id: "our-orders",
		title: "Trades",
		icon: FileText,
		href: "/trades",
		subServices: [
			{ title: "Concrete Estimating", href: "/concrete-estimation" },
			{ title: "Electrician Estimating", href: "/electrical-estimator" },
			{ title: "Interior & Exterior Finishes  ", href: "/interior-exterior-finishes" },
			{ title: "Masonry Estimating", href: "/masonry-estimating-services" },
			{ title: "MEP Estimating", href: "/mep-estimating-services" },
			{ title: "Metals Estimating ", href: "/metals-estimating-services" },
			{ title: "Openings Estimating", href: "/openings-estimating-services" },
			{ title: "Thermal/ Moisture Protection Estimating", href: "/thermal-moisture-protection-estimating-services" },
			{ title: "Sitework Estimating ", href: "/sitework-estimating-services" },
			{ title: "Lumber Takeoff", href: "/lumber-takeoff" },
		],
	},

    {
        id: "sample",
        title: "Sample",
        icon: FileText, // You can choose a more suitable icon if you want
        href: "/samples",
        subServices: [],
    },
]

export default function ServicesNavigation() {
	const [activeCategory, setActiveCategory] = useState<string | null>(null)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<>
			{/* Main Navigation */}
			<nav className="bg-white shadow-sm border-b border-slate-200 z-40">
				<div className="container mx-auto px-1">
					<div className="flex items-center justify-between h-32 md:h-32">
						{/* Logo */}
						<Link href="/" className="flex items-center">
							<Image
								src="/logo-transparent.png"
								alt="JU Estimating All Services Logo"
								width={700}
								height={350}
								className="w-auto h-56 md:h-64"
							/>
						</Link>
						{/* Center Section: Links + Promo Button + Contact Info */}
            <div className="hidden md:flex items-end h-full pb-2 space-x-10">
              {/* Navigation Links */}
              <div className="flex space-x-6">
                <Link href="/services" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Services</Link>
                <Link href="/about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">About</Link>
                <Link href="/pricing" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Pricing</Link>
                <Link href="/faq" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">FAQ</Link>
                <Link href="#process" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Process</Link>
                <Link href="/contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Contact</Link>
              </div>

              {/* Promo Button */}
				<div className="pb-1">
				<Link
					href="/contact"
					className="w-64 text-center bg-gradient-to-r from-[#30B8F6] to-[#1C1259] hover:from-[#1C1259] hover:to-[#30B8F6] text-white px-8 py-1 rounded-lg text-base font-semibold transition-colors shadow"
				>
					Avail 30% OFF
				</Link>
				</div>

              {/* Contact Info & CTA */}
              <div className="flex flex-col justify-end">
                {/* Email row */}
                <div className="flex items-center text-slate-600 mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">info@juestimating.com</span>
                </div>

                {/* Phone and Button row */}
                <div className="flex space-x-4 items-center text-slate-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{siteConfig.phoneDisplay}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>

						
						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>

					{/* Mobile Menu */}
					{isMobileMenuOpen && (
						<div className="md:hidden py-4 border-t border-slate-200">
							<div className="flex flex-col space-y-4">
								{/* Services Dropdown */}
								<div>
									<button
										onClick={() =>
											setActiveCategory(
												activeCategory === "services" ? null : "services"
											)
										}
										className="w-full text-left flex items-center justify-between text-slate-700 hover:text-amber-600 font-medium"
									>
										<span>Services</span>
										<ChevronDown
											className={`h-4 w-4 transform transition-transform ${
												activeCategory === "services" ? "rotate-180" : ""
											}`}
										/>
									</button>
									{activeCategory === "services" && (
										<div className="mt-2 pl-4 space-y-2">
											{servicesCategories.map((category) => (
												<div key={category.id}>
													<Link
														href={category.href}
														className="block text-slate-600 hover:text-amber-600 text-sm font-medium"
													>
														{category.title}
													</Link>
													<div className="pl-4 mt-1 space-y-1">
														{category.subServices.map((sub) => (
															<Link
																key={sub.title}
																href={sub.href}
																className="block text-xs text-slate-500 hover:text-amber-600"
															>
																{sub.title}
															</Link>
														))}
													</div>
												</div>
											))}
										</div>
									)}
								</div>

								<Link
									href="/about"
									className="text-slate-700 hover:text-amber-600 font-medium"
								>
									About
								</Link>
								<Link
									href="/pricing"
									className="text-slate-700 hover:text-amber-600 font-medium"
								>
									Pricing
								</Link>
								<Link
									href="/faq"
									className="text-slate-700 hover:text-amber-600 font-medium"
								>
									FAQ
								</Link>
								<Link
									href="#process"
									className="text-slate-700 hover:text-amber-600 font-medium"
								>
									Process
								</Link>
								<Link
									href="/contact"
									className="text-slate-700 hover:text-amber-600 font-medium"
								>
									Contact
								</Link>

								{/* Contact & CTA */}
								<div className="pt-4 border-t border-slate-200">
									<div className="flex items-center text-slate-600 mb-3">
										<Phone className="h-4 w-4 mr-2" />
										<span className="text-sm font-medium">
											{siteConfig.phoneDisplay}
										</span>
									</div>
									<Link
										href="/contact"
										className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-block"
									>
										Get Free Quote
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Services Navigation - Sticky */}
			<div
				className={`hidden md:block bg-blue-900 border-b border-blue-800 sticky top-0 z-50 transition-shadow ${
					scrolled ? "shadow-sm" : ""
				}`}
			>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex items-center py-1.5">
						<div className="flex items-center space-x-1">
							{servicesCategories.map((category) => {
							const IconComponent = category.icon
							const isSample = category.id === "sample"
							return (
								<div key={category.id} className="relative group">
								<Link
									href={category.href}
									className="flex items-center px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-blue-800 rounded-md transition-all duration-200 group"
								>
									<IconComponent className="h-3.5 w-3.5 mr-1.5 text-slate-300 group-hover:text-white" />
									<span>{category.title}</span>
									{!isSample && (
									<ChevronDown className="ml-1 h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0 text-white" />
									)}
								</Link>

								{/* Dropdown content for all except Sample */}
								{!isSample && (
									<div
									className={`absolute top-full left-0 w-64 bg-white rounded-md shadow-lg border border-slate-100 py-1.5 z-50 transition-all duration-200 ${
										activeCategory === category.id
										? "opacity-100 visible transform translate-y-0"
										: "opacity-0 invisible transform translate-y-1"
									}`}
									>
									<div className="px-3 py-1.5 border-b border-slate-50">
										<h4 className="text-xs font-semibold text-slate-700">
										{category.title}
										</h4>
									</div>
									{category.subServices.map((subService) => (
										<Link
										key={subService.title}
										href={subService.href}
										className="block px-3 py-1.5 text-xs text-slate-600 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
										>
										{subService.title}
										</Link>
									))}
									<div className="px-3 py-1.5 border-t border-slate-50 mt-1">
										<Link
										href={category.href}
										className="text-xs text-amber-600 hover:text-amber-700 font-medium"
										>
										View All {category.title} →
										</Link>
									</div>
									</div>
								)}
								</div>
							)
							})}

						</div>
					</div>
				</div>
			</div>
		</>
	)
}
