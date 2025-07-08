import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">{siteConfig.company.name}</h3>
            <p className="text-slate-300 mb-6">
              Precision estimating services for construction professionals. Trusted by contractors nationwide for over
              15 years.
            </p>
            {/* <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Commercial Estimating
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Residential Estimating
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Industrial Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  MEP Estimating
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Bid Preparation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Value Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-300 mb-4">Stay updated with industry insights and company news.</p>
            <div className="flex space-x-2 mb-4">
              <Input placeholder="Enter your email" className="bg-slate-800 border-slate-600 text-white" />
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">Subscribe</Button>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {siteConfig.phoneDisplay}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {siteConfig.email}
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.suite}
                  <br />
                  {siteConfig.address.city}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 {siteConfig.company.name}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
