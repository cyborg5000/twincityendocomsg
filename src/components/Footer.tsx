import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2D5B5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/images/twin-city-dental.svg"
              alt="Twin City Endodontics"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              Specialist endodontic clinic providing advanced root canal treatment 
              since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/our-doctors" className="text-gray-300 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Ngee Ann City */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ngee Ann City</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Tower B, 391B Orchard Road, #08-07, Singapore 238874</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+6562359888" className="hover:text-white">+65 6235 9888</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:ngeeann@twincityendo.com" className="hover:text-white">ngeeann@twincityendo.com</a>
              </li>
            </ul>
          </div>

          {/* Forum */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Forum Shopping Mall</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>583 Orchard Road, #06-04, Singapore 238884</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+6562353063" className="hover:text-white">+65 6235 3063</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:forum@twincityendo.com" className="hover:text-white">forum@twincityendo.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-gray-300 text-sm">
              <Clock className="w-5 h-5 mr-2" />
              <span>Mon – Fri: 9:00 am – 6:00 pm | Saturday: 9:00 am – 1:00 pm</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 TWINCITY Endodontics Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}