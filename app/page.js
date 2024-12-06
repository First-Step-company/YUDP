// app/services/page.js
'use client';
import Navbar from './components/Navbar';
import { Services } from '@/data/data';
import { CardDefault } from './components/card';
import Link from 'next/link';
import {Footer} from './components/footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Services</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2 sm:gap-96 lg:grid-cols-3 xl:grid-cols-3">
            {Services.map((service) => (
                <Link key={service.id} href={`/services/${service.id-1}`}>
              <CardDefault  service={service} />
                </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
