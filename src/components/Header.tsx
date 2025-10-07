import { useState } from 'react';
import { Menu, X, Heart, Phone, Facebook, Instagram } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold tracking-wider">
              Y THE BROKERS
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-brand-orange transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-white hover:text-brand-orange transition-colors duration-200">
              About Us
            </a>
            <div className="relative group">
              <a href="#projects" className="text-white hover:text-brand-orange transition-colors duration-200 flex items-center">
                Projects
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#contact" className="text-white hover:text-brand-orange transition-colors duration-200">
              Contact Us
            </a>
            <a href="#careers" className="text-white hover:text-brand-orange transition-colors duration-200">
              Careers
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="#login" className="text-white hover:text-brand-orange transition-colors duration-200">
              Login
            </a>
            <a href="#register" className="text-white hover:text-brand-orange transition-colors duration-200">
              Register
            </a>
            <button className="text-white hover:text-brand-orange transition-colors duration-200">
              <Heart className="w-5 h-5" />
            </button>
            <a href="#facebook" className="text-brand-orange hover:text-brand-orange-hover transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#instagram" className="text-brand-orange hover:text-brand-orange-hover transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-brand-orange transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-white hover:text-brand-orange transition-colors duration-200 py-2">
              Home
            </a>
            <a href="#about" className="block text-white hover:text-brand-orange transition-colors duration-200 py-2">
              About Us
            </a>
            <a href="#projects" className="block text-white hover:text-brand-orange transition-colors duration-200 py-2">
              Projects
            </a>
            <a href="#contact" className="block text-white hover:text-brand-orange transition-colors duration-200 py-2">
              Contact Us
            </a>
            <a href="#careers" className="block text-white hover:text-brand-orange transition-colors duration-200 py-2">
              Careers
            </a>
            <div className="border-t border-gray-700 pt-3 mt-3">
              <a href="#login" className="block text-white hover:text-brand-orange transition-colors duration-200 py-2">
                Login
              </a>
              <a href="#register" className="block text-white hover:text-brand-orange transition-colors duration-200 py-2">
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
