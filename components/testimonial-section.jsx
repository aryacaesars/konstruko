import testimonials from "@/data/testimonial-data.json"

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman langsung dari klien yang telah bekerja sama dengan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mb-6 text-[#4a6fa5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
