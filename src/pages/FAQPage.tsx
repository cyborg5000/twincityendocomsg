import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Why do I need Root Canal Treatment?',
    answer: `The dental pulp, the soft tissue inside the root canal, may become inflamed or infected 
      due to decay, cracked teeth or trauma. If left untreated, it can cause pain or lead to an abscess. 
      Root canal treatment involves the removal of the inflamed or infected pulp. This will help to 
      relieve dental pain and preserve the use of the tooth.`,
  },
  {
    question: 'What are the things I need to avoid or look out for after Root Canal Treatment?',
    answer: `• Do not eat until the numbness is completely gone\n
      • Avoid biting hard food on the affected tooth to reduce the risk of fracture until you have had it restored by your general dentist\n
      • Maintain good oral hygiene, including brushing and flossing, around the affected tooth\n
      • You may experience some discomfort for the first few days after the treatment. You may take some analgesics to relieve the discomfort.`,
  },
  {
    question: 'What is the duration of Root Canal Treatment?',
    answer: `Root canal treatment can be done in a single session or in multiple visits (2-3 visits) 
      depending on the complexity of the case. Your endodontist will advise you on the best approach 
      for your specific situation.`,
  },
  {
    question: 'Will Root Canal Treatment be painful?',
    answer: `Topical anaesthetic gel is applied to the gums to numb the area. Subsequently, local 
      anaesthetic is placed gently to ensure full anaesthesia. Once the site is fully anaesthetized, 
      the root canal treatment should be comfortable with little or no pain.`,
  },
  {
    question: 'What is the success rate of Root Canal Treatment?',
    answer: `Endodontic treatment has a high success rate, 85% – 95% depending on the condition of 
      the tooth. Many root canal-treated teeth last a lifetime with proper care and regular dental 
      check-ups.`,
  },
  {
    question: 'How much does Root Canal Treatment cost?',
    answer: `The cost of root canal treatment starts from $800. As the cost varies depending on how 
      complex the problem is and which tooth is affected, please feel free to contact us for full details. 
      We can provide a more accurate estimate after examining your specific case.`,
  },
  {
    question: 'How is Root Canal Treatment performed in Twin City Endodontics?',
    answer: `On your first visit, a consultation and necessary digital radiographs will be performed. 
      Digital radiographs ensure that patient's risk of radiation exposure is minimized. Upon establishing 
      the diagnosis, you will be comfortably anaesthetized. The treatment will be performed under a rubber 
      dam to ensure sterility of the operation site. The root canal procedure will be done using rotary 
      instruments under microscopic vision.`,
  },
  {
    question: 'Do I need a referral from my dentist?',
    answer: `While we accept referrals from general dentists, you can also make a direct appointment 
      with us. However, we practice a compulsory referral back system, which means patients will be 
      referred back to their dentists for routine and restorative care after root canal treatment.`,
  },
  {
    question: 'What is the difference between a dentist and an endodontist?',
    answer: `Endodontists are dentists who specialize in saving teeth through root canal treatment and 
      other procedures involving the dental pulp and tissues surrounding the roots of a tooth. They have 
      completed additional years of specialized training beyond dental school.`,
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: `Please bring any relevant dental records, X-rays, or referral letters from your dentist if 
      available. Also, please arrive 15 minutes early to complete any necessary paperwork.`,
  },
];

export function FAQPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#144458]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-[#144458]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#144458] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about root canal treatment and our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 lg:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                  <AccordionTrigger className="text-left text-lg font-medium text-[#144458] hover:text-[#086466] py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4 whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#144458] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Contact us for more information about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#144458] hover:bg-[#0d2f3d] text-white">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+6590170923">
              <Button size="lg" variant="outline" className="border-[#144458] text-[#144458]">
                Call +65 9017 0923
              </Button>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Our Doctors', href: '/our-doctors', desc: 'Meet our specialists' },
            { title: 'Services', href: '/services', desc: 'What we offer' },
            { title: 'CHAS', href: '/chas', desc: 'Subsidy information' },
          ].map((link) => (
            <Link key={link.title} to={link.href}>
              <Card className="border-0 shadow hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-[#144458] mb-1">{link.title}</h3>
                  <p className="text-sm text-gray-500">{link.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}