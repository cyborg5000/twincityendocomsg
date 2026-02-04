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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/twin-city-dental.svg"
              alt="Twin City Endodontics"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? 'text-[#144458] bg-[#144458]/10'
                    : 'text-gray-700 hover:text-[#144458] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+6590170923">
              <Button className="bg-[#144458] hover:bg-[#0d2f3d] text-white">
                <Phone className="w-4 h-4 mr-2" />
                +65 9017 0923
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-3 text-base font-medium rounded-md ${
                  location.pathname === item.href
                    ? 'text-[#144458] bg-[#144458]/10'
                    : 'text-gray-700 hover:text-[#144458] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+6590170923" className="block px-3 py-3">
              <Button className="w-full bg-[#144458] hover:bg-[#0d2f3d] text-white">
                <Phone className="w-4 h-4 mr-2" />
                +65 9017 0923
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}