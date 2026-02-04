import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Upload, ArrowRight } from 'lucide-react';

export function ReferringPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#144458] mb-4">
            Referring Dentists
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We welcome referrals from general dentists and specialists. Our team is committed 
            to providing excellent endodontic care with a compulsory referral back system.
          </p>
        </div>

        {/* Referral Form Info */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-[#144458] to-[#086466] text-white">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Online Referral Form
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-gray-700">
                Please fill out the online referral form with the following information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Patient Name & Contact',
                  'Preferred Specialist',
                  'Treatment Needed',
                  'Tooth Number',
                  'Crack Tooth/Pain Assessment',
                  'X-Ray attachment (max 5MB)',
                  'Referral Notes',
                ].map((item) => (
                  <div key={item} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#086466] rounded-full mr-3" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> For referring dentists, a copy of the online 
                  referral will be sent via the clinic email provided.
                </p>
              </div>
              <a
                href="https://twincityendo.com.sg/referring-dentists/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#144458] hover:bg-[#0d2f3d] text-white">
                  <Upload className="w-4 h-4 mr-2" />
                  Fill Online Referral Form
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Referral Process */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { step: '1', title: 'Submit Referral', desc: 'Fill out the online form with patient details and treatment needs' },
            { step: '2', title: 'We Contact Patient', desc: 'Our team will reach out to schedule the appointment' },
            { step: '3', title: 'Treatment & Referral Back', desc: 'After treatment, patient is referred back to you for restorative care' },
          ].map((item) => (
            <Card key={item.step} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#144458] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#144458] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-[#144458]/5 to-[#086466]/10">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-[#144458] mb-4">Our Commitment</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Professional endodontic care using advanced technology',
                'Microscopic and CBCT-guided treatment',
                'Prompt scheduling for referred patients',
                'Detailed referral reports after treatment',
                'Compulsory referral back to referring dentist',
                'Open communication throughout the treatment',
              ].map((commitment, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-[#086466] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{commitment}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#144458] mb-4">
            Questions About Referring Patients?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our team for any questions about the referral process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#144458] hover:bg-[#0d2f3d] text-white">
              Call +65 9017 0923
            </Button>
            <Button size="lg" variant="outline" className="border-[#144458] text-[#144458]">
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}