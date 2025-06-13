import clientLogosData from "@/data/client-logos-data.json"

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">{clientLogosData.title}</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogosData.logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={logo.logo || "/placeholder.svg"}
                alt={`${logo.name} logo`}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
