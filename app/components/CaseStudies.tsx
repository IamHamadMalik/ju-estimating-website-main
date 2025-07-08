import Link from "next/link"
import Image from "next/image"
import { Clock, ChevronDown } from "lucide-react"

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      {/* Save 30% Button Centered */}
      <div className="flex justify-center mb-8">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#FACC22] to-[#F83600] hover:bg-[#F83600] text-white px-10 py-2 rounded-md text-xl font-bold shadow transition-colors"
        >
          Save 30%
        </Link>
      </div>

      {/* Heading and View All Row */}
      <div className="flex items-center justify-between mb-6 max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-5xl font-semibold text-black">Case Study</h2>
        <Link
          href="/case-studies"
          className="flex items-center text-black hover:text-orange-600 font-medium text-base"
        >
          View all
          <span className="ml-2 flex items-center justify-center bg-gray-100 rounded-full w-8 h-8">
            <ChevronDown className="w-4 h-4 text-black" />
          </span>
        </Link>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-16">
        {/* Case Study 1 */}
        <div className="bg-white rounded-sm shadow p-6 flex flex-col ">
          <div className="pb-16">
            <div className="-mx-6 -mt-6 mb-4">
            <Image
              src="/case.jpg"
              alt="Residential Project"
              width={800}
              height={300}
              className="rounded-t-xl w-full h-48 object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Residential Project Success</h3>
          <div className="pb-5">
            <p className="text-black mb-4 flex-1 line-clamp-6">
            How we helped a residential contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround time in half. contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround ti
          </p>
          </div>
          
          <div className="flex gap-3 mt-auto">
            {/* Clock Button */}
            <span className="flex items-center justify-center bg-white border border-black rounded-full w-16 h-7 text-sm text-black">
              <Clock className="w-4 h-4 mr-1" />
              1 min
            </span>
            {/* Case Study Button */}
            <span className="flex items-center justify-center bg-white border border-black rounded-full w-20 h-7 text-xs text-black">
              Case Study
            </span>
          </div>
          </div>
        </div>
        {/* Case Study 2 */}
        <div className="bg-white rounded-sm shadow p-6 flex flex-col">
          <div className="pb-16">
            <div className="-mx-6 -mt-6 mb-4">
            <Image
              src="/case.jpg"
              alt="Commercial Growth"
              width={800}
              height={300}
              className="rounded-t-xl w-full h-48 object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Commercial Growth Story</h3>
          <div className="pb-5">
            <p className="text-black mb-4 flex-1 line-clamp-6">
                How we helped a residential contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround time in half. contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround ti
            </p>
          </div>
          <div className="flex gap-3 mt-auto">
            <span className="flex items-center justify-center bg-white border border-black rounded-full w-16 h-7 text-sm text-black">
              <Clock className="w-4 h-4 mr-1" />
              1 min
            </span>
            <span className="flex items-center justify-center bg-white border border-black rounded-full w-20 h-7 text-xs text-black">
              Case Study
            </span>
          </div>
          </div>
        </div>
        {/* Case Study 3 */}
        <div className="bg-white rounded-sm shadow p-6 flex flex-col">
          <div className="pb-16">
            <div className="-mx-6 -mt-6 mb-4">
            <Image
              src="/case.jpg"
              alt="Industrial Efficiency"
              width={800}
              height={300}
              className="rounded-t-xl w-full h-48 object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Industrial Efficiency</h3>
          <div className="pb-5">
            <p className="text-black mb-4 flex-1 line-clamp-6">
                How we helped a residential contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround time in half. contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround contractor increase bid wins by 40% and save 30% on estimating costs. See how our estimating support helped an industrial client cut turnaround ti
            </p>
          </div>
          <div className="flex gap-3 mt-auto">
            <span className="flex items-center justify-center bg-white border border-black rounded-full w-16 h-7 text-sm text-black">
              <Clock className="w-4 h-4 mr-1" />
              1 min
            </span>
            <span className="flex items-center justify-center bg-white border border-black rounded-full w-20 h-7 text-xs text-black">
              Case Study
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
