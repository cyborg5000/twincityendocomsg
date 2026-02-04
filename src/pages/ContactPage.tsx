import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const locations = [
  {
    name: 'Ngee Ann City',
    address: 'Tower B, 391B Orchard Road, #08-07, Singapore 238874',
    phone: '+65 6235 9888',
    email: 'ngeeann@twincityendo.com',
    hours: ['Mon – Fri: 9:00 am – 6:00 pm', 'Saturday: 9:00 am – 1:00 pm'],
  },
  {
    name: 'Forum the Shopping Mall',
    address: '583 Orchard Road, #06-04, Singapore 238884',
    phone: '+65 6235 3063',
    email: 'forum@twincityendo.com',
    hours: ['Mon – Fri: 9:00 am – 6:00 pm', 'Saturday: 9:00 am – 1:00 pm'],
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#144458] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Book your appointment today. Visit one of our specialists at either 
            of our conveniently located clinics in Orchard.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((location) => (
            <Card key={location.name} className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-[#144458]" />
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#144458] mb-6">{location.name}</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#086466] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#086466] mr-3 flex-shrink-0" />
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-[#144458]">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#086466] mr-3 flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-[#144458]">
                      {location.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#086466] mt-1 mr-3 flex-shrink-0" />
                    <div className="text-gray-700">
                      {location.hours.map((hour) => (
                        <p key={hour}>{hour}</p>
                      ))}
                      <p className="text-sm text-gray-500 mt-1">Open During Lunch Hour</p>
                      <p className="text-sm text-gray-500">Closed on Sundays and Public Holidays</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                  >
                    <Button className="w-full bg-[#144458] hover:bg-[#0d2f3d] text-white">
                      Call Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Appointment Info */}
        <div className="bg-gradient-to-br from-[#144458] to-[#086466] rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Book Your Appointment</h2>
              <p className="text-gray-200 leading-relaxed">
                We accept referrals from general dentists and direct appointments from 
                patients. Our team is ready to provide you with expert endodontic care.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3" />
                  Emergency appointments available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3" />
                  Referral back system to your dentist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3" />
                  Two convenient Orchard locations
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="text-gray-200">
                  <strong className="text-white">General Enquiries:</strong><br />
                  <a href="tel:+6590170923" className="hover:text-white">+65 9017 0923</a>
                </p>
                <p className="text-gray-200">
                  <strong className="text-white">WhatsApp:</strong><br />
                  <a href="https://wa.me/6590170923" className="hover:text-white">+65 9017 0923</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#144458] mb-6 text-center">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#144458] mx-auto mb-2" />
                <p className="text-gray-600 font-medium">Ngee Ann City</p>
                <p className="text-sm text-gray-500">391B Orchard Road, #08-07</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#144458] mx-auto mb-2" />
                <p className="text-gray-600 font-medium">Forum Shopping Mall</p>
                <p className="text-sm text-gray-500">583 Orchard Road, #06-04</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}