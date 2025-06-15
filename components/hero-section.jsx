import Link from "next/link"
import heroData from "@/data/hero-section-data.json"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center bg-background">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-15"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Membangun <span className="text-primary">Masa Depan</span> yang Kokoh
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {heroData.subtitle}
            </p>
            <Link
              href={heroData.button.href}
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-[100px] hover:bg-primary/90 transition-colors shadow-lg"
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
          
          {/* Right side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src={heroData.backgroundImage} 
              alt="Hero image"
              className="max-w-sm md:max-w-md lg:max-w-[350px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
