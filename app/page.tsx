import Hero from "@/app/components/Hero"
import CompanyIntro from "@/app/components/CompanyIntro"
import Services from "@/app/components/Services"
import ClientTypes from "@/app/components/ClientTypes"
import Process from "@/app/components/Process"
import Portfolio from "@/app/components/Portfolio"
import Testimonials from "@/app/components/Testimonials"
import TimeChallenge from "@/app/components/TimeChallenge"
import MissedOpportunities from "@/app/components/MissedOpportunities"
import CaseStudies from "@/app/components/CaseStudies"
import LocalPricing from "@/app/components/LocalPricing"
import NegotiationStrategies from "@/app/components/NegotiationStrategies"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CompanyIntro />
      <Services />
      <Process />
      <MissedOpportunities />
      <CaseStudies />
      <ClientTypes />
      <Portfolio />
      <Testimonials />
    </main>
  )
}
