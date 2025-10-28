import React from 'react';
import { Star, ChevronRight, User } from 'lucide-react';

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Mohamed Basha",
      time: "In the last week",
      title: "Professional and Reliable",
      review: "I had a very good experience with Saba when renting out my flat in Dubai. She was friendly, honest, professional and took care of everything — from listing the property and arranging viewings to help in completing the agreement and Ejari. Communication was clear and always kept me updated. I'm very happy with the service and recommend to anyone who wants to rent out their property in Dubai.",
      avatar: <User className="w-8 h-8" />
    },
    {
      name: "Sahab Qamar",
      time: "3 weeks ago",
      title: "Excellent Experience",
      review: "I had an excellent experience working with Saba from Revantage in renting out my apartment in Townsquare Dubai. She demonstrated professionalism, efficiency, and clear communication throughout the entire process. From coordinating viewings to finalizing the agreement, everything was handled seamlessly. I truly appreciate her support and would highly recommend her services to anyone seeking reliable real estate assistance.",
      avatar: <User className="w-8 h-8" />
    },
    {
      name: "kuncham sai navya",
      time: "2 months ago",
      title: "Outstanding Service for Newcomers",
      review: "I recently moved to Dubai and was on the lookout for a rental space close to my office in Town Square. Being new to the city, the process felt overwhelming—until I connected with Saba. From the very beginning, she was incredibly supportive, professional, and genuinely committed to helping me find the right place. Saba guided me through the entire procedure seamlessly and made everything so easy and stress-free.",
      avatar: <User className="w-8 h-8" />
    },
    {
      name: "Rahul Guwlani",
      time: "6 months ago",
      title: "Transparent and Knowledgeable",
      review: "Mr Rahul Guwlani of Revantage Real Estate - Dubai is very kind, knowledgeable, transparent, reliable, and wonderful at his job. Rahul's inside scoop on the city was invaluable. We had a lot of questions and Rahul ensured to answer these questions with real, local and current data and personalised approach. I could not imagine finding a better agent.",
      avatar: <User className="w-8 h-8" />
    },
    {
      name: "Eldar Yusupov",
      time: "2 months ago",
      title: "Professional Service Excellence",
      review: "Revantage Real Estate Brokerage Agent Ajay assisted me with all required formalities from beginning till the end. He is very polite person and professional Real Estate Agent, he is always available to speak on the phone and answering my messages immediately without keeping me waiting, he is very transparent with all information details.",
      avatar: <User className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {testimonial.title}
              </h3>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrow */}
        <div className="flex justify-end mt-8">
          <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
