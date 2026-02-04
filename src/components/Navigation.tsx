import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Doctors', href: '/our-doctors' },
  { label: 'Services', href: '/services' },
  { label: 'Referring Dentists', href: '/referring-dentists' },
  { label: 'CHAS', href: '/chas' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Logo size based on scroll state
  const logoHeight = isScrolled ? 'h-10' : 'h-14';
  const headerHeight = isScrolled ? 'h-16' : 'h-20';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      {/* Top bar with phone number - desktop only */}
      <div className="hidden lg:block bg-[#2D5B5F] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span>Twin City Endodontics - Expert Endodontic Care Since 2008</span>
          <div className="flex items-center space-x-4">
            <span>📍 Ngee Ann City #08-07 | Forum #06-04</span>
            <span>📞 +65 6235 9888 / +65 6235 3063</span>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${headerHeight} transition-all duration-300 flex items-center justify-between`}>
        {/* Mobile: Center Logo + Left Menu Button */}
        <div className="lg:hidden flex items-center flex-1">
          <button
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 -ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Centered Logo on Mobile - shrinks on scroll */}
          <Link to="/" className="flex-1 flex justify-center">
            <img
              src="/images/twin-city-dental.svg"
              alt="Twin City Endodontics"
              className={`${logoHeight} w-auto transition-all duration-300`}
            />
          </Link>
          
          {/* Phone button on right */}
          <a href="tel:+6590170923" className="p-2">
            <Phone className="w-5 h-5 text-[#2D5B5F]" />
          </a>
        </div>

        {/* Desktop: Logo + Nav + CTA */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo - larger at top, shrinks on scroll */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/twin-city-dental.svg"
              alt="Twin City Endodontics"
              className={`${logoHeight} w-auto transition-all duration-300`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? 'text-[#2D5B5F] bg-[#2D5B5F]/10'
                    : 'text-gray-700 hover:text-[#2D5B5F] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a href="tel:+6590170923">
            <Button className="bg-[#2D5B5F] hover:bg-[#1A3D42] text-white">
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg ${
                  location.pathname === item.href
                    ? 'text-[#2D5B5F] bg-[#2D5B5F]/10'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a href="tel:+6590170923">
                <Button className="w-full bg-[#2D5B5F] hover:bg-[#1A3D42] text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +65 6235 9888
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="w-full border-[#2D5B5F] text-[#2D5B5F]">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
