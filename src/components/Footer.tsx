import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Y THE BROKERS</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Egypt's leading real estate advisory firm specializing in premium properties, luxury residences, and investment opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange-hover flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange-hover flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#buy" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Buy A Home
                </a>
              </li>
              <li>
                <a href="#sell" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Sell A Home
                </a>
              </li>
              <li>
                <a href="#rent" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Rent A Home
                </a>
              </li>
              <li>
                <a href="#compare" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Compare Listings
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  New Cairo, Egypt
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  +20 123 456 7890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  info@ythebrokers.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Y The Brokers. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center">
              Please enter your username or email address to receive a link to create a new password via email.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
