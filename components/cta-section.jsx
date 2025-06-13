import ctaData from "@/data/cta-section-data.json"

export default function CTASection() {
  return (
    <section className="py-20 bg-[#4a6fa5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{ctaData.title}</h2>
          <p className="text-xl text-white/90 mb-8">
            {ctaData.subtitle}
          </p>
          <a
            href={ctaData.button.href}
            className="inline-flex items-center px-8 py-4 bg-white text-[#4a6fa5] font-bold rounded-md hover:bg-gray-100 transition-colors shadow-lg"
          >
            {ctaData.button.text}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
