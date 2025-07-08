import CompanyIntro from "@/app/components/CompanyIntro"
import About from "@/app/components/About"
import Testimonials from "@/app/components/Testimonials"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <CompanyIntro />
      <About />
      <Testimonials />
    </main>
  )
}
