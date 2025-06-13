import Navbar from "../components/navbar"
import HeroSection from "../components/hero-section"
import ServicesSection from "../components/services-section"
import PortfolioSection from "../components/portfolio-section"
import ClientLogos from "../components/client-logos"
import TestimonialSection from "../components/testimonial-section"
import CTASection from "../components/cta-section"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientLogos />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
