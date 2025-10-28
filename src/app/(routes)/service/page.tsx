import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Property Management",
    description:
      "Comprehensive property management services for your Dubai real estate investments. We handle every aspect from tenant screening to maintenance coordination.",
    additionalInfo:
      "At Revantage, we provide complete property management solutions including rent collection, maintenance oversight, regular inspections, and legal compliance. Our dedicated team ensures your property investment is protected and optimized for maximum returns.",
    imageUrl: "/images/third.webp",
  },
  {
    id: 2,
    title: "Conveyancing",
    description:
      "Specializing in Property Conveyancing Services, we seamlessly collaborate with essential stakeholders in Dubai's property market.",
    additionalInfo:
      "Our team possesses extensive transactional expertise and proficiency in both financial and cash-based transfers, ensuring your property transactions are handled with the highest level of professionalism and efficiency. We simplify the buying and selling process, ensuring a smooth and hassle-free experience.",
    imageUrl: "/images/marketprofiling.webp",
  },
  {
    id: 3,
    title: "Property Valuation",
    description:
      "Expert property valuation services to determine the accurate market value of your Dubai property investments.",
    additionalInfo:
      "Our comprehensive analysis includes market trends, comparable properties, and future growth potential. Whether you're buying, selling, or refinancing, we provide accurate valuations to help you make informed real estate decisions.",
    imageUrl: "/images/analysis.webp",
  },
  {
    id: 4,
    title: "Development Sales and Consultancy",
    description:
      "Expert guidance on Dubai's dynamic real estate market. We analyze market trends, ROI potential, and help you make strategic investment decisions.",
    additionalInfo:
      "Our team provides comprehensive analysis of emerging neighborhoods, off-plan projects, and established luxury communities. We specialize in connecting properties with the right people, delivering the highest standards of real estate advisory services.",
    imageUrl: "/images/third.webp",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 text-black font-serif font-bold">
            Services
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center mb-20 ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <div className={`${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
                    <div className="relative overflow-hidden rounded-none shadow-none">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full  sm:h-[600px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                  <div className={`${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
                    <h2 className="text-3xl sm:text-4xl  font-mono text-gray-700 mb-6 font-serif">
                      {service.title}
                    </h2>

                    <p className="text-sm text-neutral-500 mb-6 ">
                      {service.description}
                    </p>

                    <p className="text-sm text-neutral-500 mb-8 ">
                      {service.additionalInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

