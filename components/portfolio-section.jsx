import portfolioData from "@/data/portfolio-section-data.json"

export default function PortfolioSection() {
  return (
    <section id="portofolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{portfolioData.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {portfolioData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.detailsLink} className="inline-block mt-4 text-[#4a6fa5] font-medium hover:underline">
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={portfolioData.viewAllButton.href}
            className="inline-flex items-center px-6 py-3 border border-[#4a6fa5] text-[#4a6fa5] font-medium rounded-md hover:bg-[#4a6fa5] hover:text-white transition-colors"
          >
            {portfolioData.viewAllButton.text}
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
