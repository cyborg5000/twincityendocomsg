import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Microscope, Building2, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'Full range of Zeiss microscopes and CBCT 3D imaging for precise treatment.',
  },
  {
    icon: Building2,
    title: 'Two Locations',
    description: 'Conveniently located at Ngee Ann City and Forum Shopping Mall.',
  },
  {
    icon: Stethoscope,
    title: 'Specialist Care',
    description: 'Team of 7 full-time endodontists with international training.',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5B5F]/5 to-[#BCA868]/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#2D5B5F] leading-tight">
                Expert Endodontic Care in Singapore
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Twin City Endodontics Pte Ltd has been providing specialized root canal 
                treatment since 2008. Our team of seven endodontists delivers expert care 
                using advanced technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#2D5B5F] hover:bg-[#1A3D42] text-white">
                    Book Appointment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/our-doctors">
                  <Button size="lg" variant="outline" className="border-[#2D5B5F] text-[#2D5B5F]">
                    Meet Our Doctors
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/190123-3226-CP-811-080319-s.png"
                alt="Dental microscope"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-[#2D5B5F]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#2D5B5F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D5B5F]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D5B5F]/5 to-[#BCA868]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2D5B5F]">
                About Twin City Endodontics
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Twin City Endodontics Pte Ltd is an endodontic specialist clinic that started 
                in 2008. We have a team of seven full-time endodontists who received their 
                trainings from prestigious universities including University of Pennsylvania, 
                Texas A&M Baylor, Harvard University, University of San Francisco, University 
                of Otago, University of Edinburgh, and the University of Singapore.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our clinic is well equipped with a full range of Zeiss microscopes and CBCT 3D 
                imaging x-ray machine for surgical and non-surgical root canal treatment. We 
                practice a compulsory referral back system, ensuring patients return to their 
                dentists for routine care after treatment.
              </p>
              <Link to="/our-doctors">
                <Button className="bg-[#2D5B5F] hover:bg-[#1A3D42] text-white">
                  Meet Our Doctors
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/Dr-Renee-Mircoscope-3.jpg"
                alt="Doctor with microscope"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/Our-Doctors.png"
                alt="Our medical team"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2D5B5F] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive endodontic treatments using the latest technology 
              and techniques.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Root Canal Treatment',
              'Root Canal Retreatment',
              'Root End Surgery (Apicoectomy)',
              'Cracked Tooth Management',
              'Dental Trauma Management',
              'Regenerative Endodontics',
            ].map((service) => (
              <div
                key={service}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-[#2D5B5F]/5 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#BCA868] mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="border-[#2D5B5F] text-[#2D5B5F]">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D5B5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Visit one of our specialists to answer all your inquiries about root canal treatment.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#2D5B5F] hover:bg-gray-100">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}