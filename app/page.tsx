import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyWebsite } from "@/components/why-website"
import { Pricing } from "@/components/pricing"
import { Portfolio } from "@/components/portfolio"
import { MetricsSection } from "@/components/metrics-section"
import { HowItWorks } from "@/components/how-it-works"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyWebsite />
      <Pricing />
      <Portfolio />
      <MetricsSection />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
