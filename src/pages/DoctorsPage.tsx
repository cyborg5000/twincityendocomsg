import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Richard Ang',
    title: 'Endodontist',
    education: 'University of Otago',
    image: '/images/Asset-3@2x-1.png',
  },
  {
    name: 'Dr. Leslie Ang',
    title: 'Endodontist',
    education: 'University of Pennsylvania',
    image: '/images/Asset-7@2x-1.png',
  },
  {
    name: 'Dr. Lim Kian Chong, Gerald',
    title: 'Endodontist',
    education: 'University of Edinburgh',
    image: '/images/TCE-Doctor-Dr-Gerald-Lim.jpg',
  },
  {
    name: 'Dr. Lin Yu-Ping, Kimmy',
    title: 'Endodontist',
    education: 'Texas A&M Baylor',
    image: '/images/Asset-6@2x-1.png',
  },
  {
    name: 'Dr. Renee Fan Yuehong',
    title: 'Endodontist',
    education: 'University of San Francisco',
    image: '/images/Asset-9@2x-2.png',
  },
  {
    name: 'Dr. SooHyung Kim',
    title: 'Endodontist',
    education: 'Harvard University',
    image: '/images/Asset-8@2x-2.png',
  },
  {
    name: 'Dr. Surein Angamuthu',
    title: 'Endodontist',
    education: 'National University of Singapore',
    image: '/images/Twin-City-Dr-Surein-Angamuthu.jpg',
  },
];

export function DoctorsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#144458] mb-4">
            Meet Our Endodontists
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of seven full-time endodontists brings together expertise from 
            world-renowned universities. Each specialist is dedicated to providing 
            the highest standard of care for your dental health.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="overflow-hidden border-0 shadow-lg group">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#144458] mb-1">{doctor.name}</h3>
                <p className="text-[#086466] font-medium mb-2">{doctor.title}</p>
                <p className="text-gray-500 text-sm">{doctor.education}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Team */}
        <div className="mt-16 bg-gradient-to-br from-[#144458]/5 to-[#086466]/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#144458]">
                Supported by Certified Dental Nurses
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our endodontists are supported by certified trained dental nurses and 
                auxiliaries who ensure every procedure is conducted with the utmost care 
                and professionalism. Together, we provide a comfortable and safe 
                environment for all our patients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/Dr-Renee-Mircoscope-3.jpg"
                alt="Advanced equipment"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/images/Our-Doctors.png"
                alt="Medical team"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#144458] mb-4">
            Ready to Book Your Consultation?
          </h2>
          <p className="text-gray-600 mb-6">
            Visit one of our specialists today to discuss your treatment options.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#144458] hover:bg-[#0d2f3d] text-white">
              Book an Appointment
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}