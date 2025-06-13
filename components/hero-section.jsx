import Link from "next/link"
import heroData from "@/data/hero-section-data.json"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/50 z-10"></div>
      <div style={{ backgroundImage: `url('${heroData.backgroundImage}')` }} className="absolute inset-0 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {heroData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {heroData.subtitle}
          </p>
          <Link
            href={heroData.button.href}
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-[#3a5a8a] transition-colors shadow-lg"
          >
            {heroData.button.text}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
