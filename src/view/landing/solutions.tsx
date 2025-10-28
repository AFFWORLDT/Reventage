import { ArrowRight, User, Building, Download, MapPin } from "lucide-react";

function Solutions() {
  const solutions = [
    {
      icon: <User className="h-10 w-10 text-[#c8b180]" />,
      title: "Expert Guidance",
      description:
        "Our dedicated agents are experts in guiding clients through the complexities of the market, ensuring a smooth journey from initial search to final sales agreement.",
      arrow: <ArrowRight className="h-5 w-5 text-[#c8b180]" />,
    },
    {
      icon: <Building className="h-10 w-10 text-[#c8b180]" />,
      title: "Tailored Solutions",
      description:
        "Every property listed with us receives the utmost attention and care. Our team tirelessly works to find the perfect home for each client.",
      arrow: <ArrowRight className="h-5 w-5 text-[#c8b180]" />,
    },
    {
      icon: <Download className="h-10 w-10 text-[#c8b180]" />,
      title: "Exceptional Service",
      description:
        "We deliver the highest standards of real estate service, going above and beyond to exceed expectations for every client.",
      arrow: <ArrowRight className="h-5 w-5 text-[#c8b180]" />,
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#c8b180]" />,
      title: "Trusted Expertise",
      description:
        "A leading full-service boutique brokerage with 15+ years of experience in the UAE real estate market.",
      arrow: <ArrowRight className="h-5 w-5 text-[#c8b180]" />,
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-24 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#c8b180]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a68b5b]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Luxury Header */}
          <div className="mb-8 sm:mb-12 md:mb-20 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-light font-serif text-gray-800 leading-tight px-2">
              Welcome to your luxury <em><span className="text-[#c8b180] not-italic">dream home</span></em>
            </h2>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl mt-4 max-w-4xl mx-auto leading-relaxed">
              We specialize in connecting properties with the right people, driven by our commitment to delivering the highest standards of real estate service.
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#c8b180] to-[#a68b5b] mx-auto mt-4 sm:mt-6 md:mt-8"></div>
          </div>

          {/* Ultra Luxury Solutions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-[#c8b180]/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/95 hover:border-[#c8b180]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                {/* Luxury Icon Container */}
                <div className="mb-3 sm:mb-4 md:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#c8b180]/10 to-[#a68b5b]/10 rounded-xl flex items-center justify-center group-hover:from-[#c8b180]/20 group-hover:to-[#a68b5b]/20 transition-all duration-300">
                    {solution.icon}
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#c8b180]/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title with Luxury Arrow */}
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <h3 className="text-gray-800 font-medium text-sm sm:text-base md:text-lg lg:text-xl font-serif group-hover:text-[#c8b180] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    {solution.arrow}
                  </div>
                </div>

                {/* Elegant Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>

                {/* Luxury Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#c8b180]/20 via-transparent to-[#a68b5b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
