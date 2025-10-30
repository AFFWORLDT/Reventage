import React from "react";
import ClientTestimonials from "@/src/view/list-property/ClientTestimonials";

const servicesData = [
  {
    id: 1,
    title: "Property Management",
    description:
      "Managing a property requires time, knowledge, and a hands-on approach. Our property management services are designed to simplify ownership and optimize your returns. We handle every aspect—from listing and leasing to tenant communication, repairs, and financial reporting.",
    additionalInfo:
      "With a dedicated team and technology-driven solutions, we ensure your property is well-maintained and consistently profitable. Whether you're a first-time landlord or a seasoned investor, we provide customized strategies to meet your goals and reduce your workload.",
    imageUrl: "/images/third.webp",
    bulletPoints: [
      "Professional Care for Your Property - End-to-end management services to protect your property and keep your rental income steady.",
      "Your Property, Our Priority - We handle tenants, maintenance, and everything in between so you don't have to.",
      "Stress-Free Property Ownership - From rent collection to 24/7 maintenance—let us manage your property with care and expertise.",
      "Maximize Returns, Minimize Hassle - Trusted property management that increases value while saving you time.",
      "Expert Management, Exceptional Results - We take care of your property like it's our own—with transparency, efficiency, and professionalism.",
    ],
  },
  {
    id: 2,
    title: "Conveyancing",
    description:
      "Buying or selling property is one of the biggest financial decisions you'll make—and our conveyancing team is here to make sure it's done right. We manage all the legal, financial, and administrative aspects of transferring property ownership.",
    additionalInfo:
      "From drafting and reviewing contracts to conducting title searches and liaising with all parties involved, we ensure your transaction is smooth, transparent, and fully compliant with local regulations. Whether you're a first-time buyer or an experienced investor, we provide clear communication, expert guidance, and timely execution every step of the way.",
    imageUrl: "/images/marketprofiling.webp",
    bulletPoints: [
      "Smooth & Secure Property Transfers - We handle all legal aspects of buying or selling property, ensuring a safe and seamless transaction.",
      "Expert Conveyancing You Can Trust - From contract to completion, our team ensures your property transfer is legally sound and hassle-free.",
      "Stress-Free Property Transactions - Professional conveyancing for buyers, sellers, and investors—transparent, timely, and efficient.",
      "Your Legal Partner in Property Deals - We manage the paperwork, legal checks, and compliance—so you can focus on your move or investment.",
    ],
  },
  {
    id: 3,
    title: "Property Valuation",
    description:
      "Whether you're planning to sell, buy, rent, or invest, understanding your property's accurate market value is essential. Our certified property valuation services combine industry expertise, local market knowledge, and real-time data to deliver precise, transparent reports.",
    additionalInfo:
      "We assess all critical factors—from location and condition to market trends and legal status—to ensure you receive a fair and informed valuation. Ideal for homeowners, investors, developers, and financial institutions.",
    imageUrl: "/images/analysis.webp",
    bulletPoints: [
      "Know Your Property's True Worth - Accurate, expert valuations for sales, rentals, investments, or legal purposes.",
      "Certified Property Valuation Services - Get a market-driven valuation backed by data, experience, and local insights.",
      "Reliable Valuations You Can Trust - We provide detailed property assessments to guide your decisions with confidence.",
      "Maximize Value, Minimize Guesswork - Whether buying, selling, or leasing—our valuations give you a clear picture of your property's worth.",
      "Expert Valuations for Every Property Type - Residential, commercial, or off-plan—we deliver precise reports aligned with market trends.",
    ],
  },
  {
    id: 4,
    title: "Development Sales and Consultancy",
    description:
      "Our Development, Sales, and Consultancy division is built to support investors, developers, and property owners through every stage of the real estate journey.",
    additionalInfo:
      "From initial planning and feasibility studies to project marketing and final sales, we bring deep market knowledge, regulatory expertise, and creative strategy to the table. Whether you're launching a new residential project, repositioning an asset, or entering a new market, our experienced team ensures smart development planning, effective go-to-market execution, and strong returns on investment.",
    imageUrl: "/images/third.webp",
    bulletPoints: [
      "From Vision to Reality - We guide property development from planning to sales, backed by expert consultancy at every stage.",
      "Your Partner in Property Growth - Strategic development, sales execution, and market consultancy under one roof.",
      "Smart Development, Seamless Sales - Unlock the full potential of your property with our end-to-end development and advisory services.",
      "Build, Sell, Succeed - Comprehensive support for property developers—from concept to closing.",
      "Real Estate Expertise You Can Rely On - We offer professional guidance in property development, sales strategy, and market positioning.",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-medium mb-3 text-black font-serif font-bold">
            Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Welcome to your <span className="text-[#c8b180] font-semibold">luxury dream home</span>
          </p>
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

                    <p className="text-sm text-neutral-500 mb-6 ">
                      {service.additionalInfo}
                    </p>

                    {/* Bullet Points */}
                    {service.bulletPoints && service.bulletPoints.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {service.bulletPoints.map((point, idx) => {
                          const [title, description] = point.split(" - ");
                          return (
                            <li key={idx} className="flex items-start space-x-3">
                              <span className="text-[#c8b180] mt-1">▪</span>
                              <div>
                                <strong className="text-gray-800 font-semibold block mb-1">
                                  {title}
                                </strong>
                                <span className="text-neutral-500 text-sm">
                                  {description}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Testimonials Section */}
      <ClientTestimonials />
    </div>
  );
}

