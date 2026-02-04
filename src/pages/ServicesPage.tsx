import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  RefreshCw, 
  Scissors, 
  AlertTriangle, 
  Ambulance, 
  Sprout,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Root Canal Treatment',
    description: `The dental pulp inside the root canal may become inflamed or infected due to 
      decay, cracked teeth, or trauma. Our root canal treatment involves the removal of 
      the inflamed or infected pulp, relieving dental pain and preserving the use of the tooth.`,
    details: [
      'Single or multiple visits (2-3) depending on complexity',
      'Performed under rubber dam for sterility',
      'Digital radiographs minimize radiation exposure',
      '85-95% success rate',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Root Canal Retreatment',
    description: `When a previous root canal treatment fails to heal properly or develops 
      new problems, retreatment may be necessary. We use advanced techniques and 
      technology to address complications and save your tooth.`,
    details: [
      'Assessment of previous treatment',
      'Removal of existing filling materials',
      'Thorough cleaning and disinfection',
      'Advanced imaging for complex cases',
    ],
  },
  {
    icon: Scissors,
    title: 'Root End Surgery (Apicoectomy)',
    description: `A surgical procedure to remove the tip of the tooth root and surrounding 
      infected tissue. This is performed when inflammation or infection persists in the 
      bony area around the end of your tooth after a root canal.`,
    details: [
      'Minimally invasive surgical approach',
      'Microscopic precision',
      'Rapid healing protocol',
      'High success rates for persistent infections',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Cracked Tooth Management',
    description: `Cracked teeth show a variety of symptoms, including erratic pain when 
      chewing, possibly with release of biting pressure, or pain when your tooth is 
      exposed to temperature extremes. We provide specialized diagnosis and treatment.`,
    details: [
      'Advanced diagnostic imaging',
      'Microscopic examination',
      'Treatment based on crack severity',
      'Tooth preservation focus',
    ],
  },
  {
    icon: Ambulance,
    title: 'Dental Trauma Management',
    description: `Dental injuries require immediate attention. Our team is experienced in 
      treating all types of dental trauma, from knocked-out teeth to root fractures, 
      with the goal of saving your natural teeth.`,
    details: [
      'Emergency appointments available',
      'Immediate stabilization',
      'Long-term follow-up care',
      'Coordination with general dentists',
    ],
  },
  {
    icon: Sprout,
    title: 'Regenerative Endodontics',
    description: `A cutting-edge treatment that enables continued root development in 
      immature permanent teeth with necrotic pulp. This procedure can strengthen the 
      root and improve the long-term prognosis for young patients.`,
    details: [
      'For immature permanent teeth',
      'Promotes root development',
      'Strengthens tooth structure',
      'Ideal for pediatric cases',
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2D5B5F] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive endodontic treatments using the latest technology 
            and techniques. Our clinic is equipped with a full range of Zeiss microscopes 
            and CBCT 3D imaging for both surgical and non-surgical procedures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-[#2D5B5F]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[#2D5B5F]" />
                </div>
                <CardTitle className="text-2xl text-[#2D5B5F]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#BCA868] rounded-full mt-2 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Section */}
        <div className="mt-20 bg-gradient-to-br from-[#2D5B5F]/5 to-[#BCA868]/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2D5B5F]">
                Advanced Technology
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our clinic is well equipped with state-of-the-art technology to ensure 
                precise diagnosis and treatment. We use Zeiss surgical microscopes for 
                enhanced visualization and CBCT 3D imaging for comprehensive assessment 
                of complex cases.
              </p>
              <ul className="space-y-3">
                {[
                  'Zeiss Surgical Microscopes',
                  'CBCT 3D Imaging',
                  'Digital Radiography',
                  'Electronic Apex Locators',
                  'Ultrasonic Equipment',
                ].map((tech) => (
                  <li key={tech} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#BCA868] rounded-full mr-3" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/190123-3226-CP-811-080319-s.png"
                alt="Advanced dental equipment"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#2D5B5F] mb-4">
            Have Questions About Our Services?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us to learn more about how we can help with your dental needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#2D5B5F] hover:bg-[#1A3D42] text-white">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="border-[#2D5B5F] text-[#2D5B5F]">
                View FAQ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}