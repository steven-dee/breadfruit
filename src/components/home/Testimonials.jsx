function Testimonials() {
  const testimonials = [
    {
      content: "I saved over $400 on my Toyota Corolla insurance by comparing quotes on Breadfruit. The entire process took less than 10 minutes and I didn't have to call anyone!",
      author: "Marcus Thompson",
      role: "Castries, St. Lucia"
    },
    {
      content: "After getting my license, I was worried about finding affordable insurance as a new driver. Breadfruit helped me find coverage that fit my budget, and I could pay monthly instead of annually.",
      author: "Lisa Charles",
      role: "Gros Islet, St. Lucia"
    },
    {
      content: "When I added my daughter's car to my policy, Breadfruit found me a multi-car discount that my previous insurer never mentioned. The digital experience was seamless.",
      author: "David Antoine",
      role: "Babonneau, St. Lucia"
    }
  ];

  return (
    <div className="bg-primary-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What our customers are saying
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden px-6 py-8"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;