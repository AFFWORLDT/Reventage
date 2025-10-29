import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const sitemapLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/offPlans", label: "Off-Plan" },
  { href: "/rent", label: "Rent" },
  { href: "/communities", label: "Communities" },
  { href: "/whyDubai", label: "Why Dubai" },
  { href: "/service", label: "Services" },
  { href: "/contactUs", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 md:py-12 px-4 md:px-6 lg:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-8">
        {/* Newsletter Section */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full bg-gradient-to-r from-[#c8b180]/10 to-[#a68b5b]/10 p-4 md:p-6 rounded-2xl border border-[#c8b180]/20">
          <h3 className="text-xl font-light tracking-wide leading-relaxed w-full md:flex-none md:w-[40%] text-white font-sans">
            Receive our exceptional real estate listings delivered straight to
            your inbox.
          </h3>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:flex-1">
            <label htmlFor="email-subscribe" className="sr-only">
              Email address for newsletter subscription
            </label>
            <Input
              id="email-subscribe"
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-white/10 text-white border-[#c8b180]/50 placeholder:text-white/60 focus-visible:ring-offset-0 focus-visible:ring-[#c8b180] focus:border-[#c8b180] rounded-lg md:w-1/2 w-full h-12 backdrop-blur-sm"
            />
            <Button className="bg-gradient-to-r from-[#c8b180] to-[#a68b5b] hover:from-[#a68b5b] hover:to-[#8b7350] text-white font-medium tracking-wider py-3 px-6 transition-all duration-300 uppercase h-12 rounded-lg md:w-1/3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-sans">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-lg  mb-4 font-sans">Sitemap</h4>
          <ul className="space-y-2 text-sm font-sans">
            {sitemapLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="relative inline-block hover:text-gray-300 transition-colors
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[2px] after:w-0 after:bg-[#c8b180]
                             after:transition-all after:duration-300 hover:after:w-full font-sans"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="font-sans">
          <h4 className="text-lg mb-4 font-sans">Contact</h4>
          <address className="not-italic space-y-3 text-sm font-sans leading-relaxed">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#c8b180] mt-0.5 flex-shrink-0" />
              <div>
                <a 
                  href="https://www.google.com/maps/place/25%C2%B006'36.0%22N+55%C2%B022'38.0%22E/@25.1100081,55.3746401,751m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.1100081!4d55.377215?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#c8b180]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
                >
                  <p>Office No.1001, Lynx Tower, Silicon Oasis</p>
                  <p>Dubai, UAE</p>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#c8b180] flex-shrink-0" />
              <a
                href="tel:+97142345644"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#c8b180]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                +971 4 234 5644
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#c8b180] flex-shrink-0" />
              <a
                href="mailto:info@revantage.com"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#c8b180]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                info@revantage.com
              </a>
            </div>
            {/* Social Media */}
            <div className="pt-4 border-t border-white/10 mt-3">
              <p className="text-sm text-gray-400 mb-2 font-sans">Social Media</p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/revantagedxb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c8b180] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#c8b180]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/revantagedxb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c8b180] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#c8b180]" />
                </a>
                <a
                  href="https://www.instagram.com/revantagedxb/?igsh=Mmo2eXdsN3o1bzgx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c8b180] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#c8b180]" />
                </a>
              </div>
            </div>
          </address>
        </div>

      </div>

      {/* Legal Links */}
      <div className="container mx-auto border-t border-white/20 mt-8 pt-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-4">
          <a href="/privacy-policy" className="hover:text-white transition-colors font-sans">
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="hover:text-white transition-colors font-sans">
            Terms & Conditions
          </a>
          <a href="/cookie-policy" className="hover:text-white transition-colors font-sans">
            Cookie Policy
          </a>
          <a href="/disclaimer" className="hover:text-white transition-colors font-sans">
            Disclaimer
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
        <p className="font-sans">
          &copy; {"2025 Revantage. All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
}
