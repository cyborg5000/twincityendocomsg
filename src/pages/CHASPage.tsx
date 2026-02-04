import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const chasRates = [
  { service: 'Consultation', limit: 'Up to 2 consultations per calendar year, with a 6-month interval', orange: '$13.50', blue: '$20.50', mgp: '$25.50', pg: '$30.50' },
  { service: 'Polishing', limit: 'Up to 2 polishing per calendar year', orange: '$13.50', blue: '$20.50', mgp: '$25.50', pg: '$30.50' },
  { service: 'Scaling', limit: 'Up to 2 scaling per calendar year', orange: '$20.00', blue: '$30.00', mgp: '$35.00', pg: '$40.00' },
  { service: 'Topical Fluoride', limit: 'Up to 2 topical fluoride per calendar year', orange: '$13.50', blue: '$20.50', mgp: '$25.50', pg: '$30.50' },
  { service: 'X-Ray', limit: 'Up to 6 x-rays per calendar year', orange: '$7.50', blue: '$11.00', mgp: '$16.00', pg: '$21.00' },
  { service: 'Extraction, Anterior', limit: 'Up to 4 extractions per calendar year (shared across all types)', orange: '$19.00', blue: '$28.50', mgp: '$33.50', pg: '$38.50' },
  { service: 'Extraction, Posterior', limit: 'Up to 4 extractions per calendar year (shared across all types)', orange: '$45.50', blue: '$68.50', mgp: '$73.50', pg: '$78.50' },
  { service: 'Filling, Complex', limit: 'Up to 6 fillings per calendar year (shared across all types)', orange: '$33.50', blue: '$50.00', mgp: '$55.00', pg: '$60.00' },
  { service: 'Filling, Simple', limit: 'Up to 6 fillings per calendar year (shared across all types)', orange: '$20.00', blue: '$30.00', mgp: '$35.00', pg: '$40.00' },
  { service: 'Re-cementation', limit: 'Up to 2 re-cementation per calendar year', orange: '$23.50', blue: '$35.00', mgp: '$40.00', pg: '$45.00' },
];

const chasRates2 = [
  { service: 'Denture Reline/Repair (Upper or Lower)', limit: 'Up to 1 upper and 1 lower denture reline/repair per calendar year', orange: '$50.00', blue: '$75.00', mgp: '$80.00', pg: '$85.00' },
  { service: 'Permanent Crown', limit: 'Up to 4 permanent crowns per calendar year', orange: '$410.00', blue: '$615.00', mgp: '$620.00', pg: '$625.00' },
  { service: 'Removable Denture, Complete (Upper or Lower)', limit: 'Up to 1 upper and 1 lower denture per 3 calendar years', orange: '$272.50', blue: '$408.50', mgp: '$413.50', pg: '$418.50' },
  { service: 'Removable Denture, Partial, Complex (Upper or Lower)', limit: 'Up to 1 upper and lower denture per 3 calendar years (shared)', orange: '$257.00', blue: '$385.50', mgp: '$390.50', pg: '$395.50' },
];

const chasRates3 = [
  { service: 'Root Canal Treatment (Anterior)', limit: 'Up to 2 root canal treatments per calendar year (shared across all types)', orange: '$217.50', blue: '$326.00', mgp: '$331.00', pg: '$336.00' },
  { service: 'Root Canal Treatment (Pre-molar)', limit: 'Up to 2 root canal treatments per calendar year (shared across all types)', orange: '$308.50', blue: '$462.50', mgp: '$467.50', pg: '$472.50' },
  { service: 'Root Canal Treatment (Molar)', limit: 'Up to 2 root canal treatments per calendar year (shared across all types)', orange: '$389.50', blue: '$584.50', mgp: '$589.50', pg: '$594.50' },
];

export function CHASPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2D5B5F] mb-4">
            CHAS & Dental Subsidies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We participate in the Community Health Assist Scheme (CHAS) and accept various 
            subsidy cards. Find the applicable rates below.
          </p>
        </div>

        {/* Info Card */}
        <Card className="border-0 shadow-lg mb-8 bg-gradient-to-br from-[#2D5B5F]/5 to-[#BCA868]/10">
          <CardContent className="p-6 flex items-start gap-4">
            <Info className="w-6 h-6 text-[#2D5B5F] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[#2D5B5F] mb-2">About CHAS</h3>
              <p className="text-gray-600 text-sm">
                The Community Health Assist Scheme (CHAS) provides subsidies for dental 
                treatments at participating clinics. Different subsidy tiers apply based 
                on your card type. Please bring your CHAS card and NRIC during your visit.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Rates Tables */}
        <div className="space-y-8">
          {/* Table 1 */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#2D5B5F] text-white">
              <CardTitle>Dental Services & Claim Limits</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-12 text-center">S/N</TableHead>
                      <TableHead>Dental Services</TableHead>
                      <TableHead className="text-xs">Claim Limits</TableHead>
                      <TableHead className="text-center text-orange-600">CHAS Orange</TableHead>
                      <TableHead className="text-center text-blue-600">CHAS Blue</TableHead>
                      <TableHead className="text-center text-purple-600">MG</TableHead>
                      <TableHead className="text-center text-pink-600">PG</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chasRates.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium">{index + 1}</TableCell>
                        <TableCell className="font-medium">{rate.service}</TableCell>
                        <TableCell className="text-xs text-gray-500">{rate.limit}</TableCell>
                        <TableCell className="text-center font-mono">{rate.orange}</TableCell>
                        <TableCell className="text-center font-mono">{rate.blue}</TableCell>
                        <TableCell className="text-center font-mono">{rate.mgp}</TableCell>
                        <TableCell className="text-center font-mono">{rate.pg}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Table 2 */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-12 text-center">S/N</TableHead>
                      <TableHead>Dental Services</TableHead>
                      <TableHead className="text-xs">Claim Limits</TableHead>
                      <TableHead className="text-center text-orange-600">CHAS Orange</TableHead>
                      <TableHead className="text-center text-blue-600">CHAS Blue</TableHead>
                      <TableHead className="text-center text-purple-600">MG</TableHead>
                      <TableHead className="text-center text-pink-600">PG</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chasRates2.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium">{index + 11}</TableCell>
                        <TableCell className="font-medium">{rate.service}</TableCell>
                        <TableCell className="text-xs text-gray-500">{rate.limit}</TableCell>
                        <TableCell className="text-center font-mono">{rate.orange}</TableCell>
                        <TableCell className="text-center font-mono">{rate.blue}</TableCell>
                        <TableCell className="text-center font-mono">{rate.mgp}</TableCell>
                        <TableCell className="text-center font-mono">{rate.pg}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Table 3 - Root Canal */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#BCA868] text-white">
              <CardTitle>Root Canal Treatment</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-12 text-center">S/N</TableHead>
                      <TableHead>Dental Services</TableHead>
                      <TableHead className="text-xs">Claim Limits</TableHead>
                      <TableHead className="text-center text-orange-600">CHAS Orange</TableHead>
                      <TableHead className="text-center text-blue-600">CHAS Blue</TableHead>
                      <TableHead className="text-center text-purple-600">MG</TableHead>
                      <TableHead className="text-center text-pink-600">PG</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chasRates3.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium">{index + 15}</TableCell>
                        <TableCell className="font-medium">{rate.service}</TableCell>
                        <TableCell className="text-xs text-gray-500">{rate.limit}</TableCell>
                        <TableCell className="text-center font-mono">{rate.orange}</TableCell>
                        <TableCell className="text-center font-mono">{rate.blue}</TableCell>
                        <TableCell className="text-center font-mono">{rate.mgp}</TableCell>
                        <TableCell className="text-center font-mono">{rate.pg}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Legend */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="font-semibold text-orange-700">CHAS Orange</p>
            <p className="text-sm text-orange-600">Singapore Citizens with orange card</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-700">CHAS Blue</p>
            <p className="text-sm text-blue-600">Singapore Citizens with blue card</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-700">MG</p>
            <p className="text-sm text-purple-600">Merdeka Generation</p>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="font-semibold text-pink-700">PG</p>
            <p className="text-sm text-pink-600">Pioneer Generation</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#2D5B5F] mb-4">
            Have Questions About Subsidies?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us to learn more about CHAS and other available subsidies.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#2D5B5F] hover:bg-[#1A3D42] text-white">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}