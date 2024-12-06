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

          <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 sm:gap-y-6 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8">
  {Services.map((service) => (
    <Link key={service.id} href={`/services/${service.id - 1}`}>
      <CardDefault service={service} className="h-full w-full p-4 rounded-lg border shadow-sm" />
    </Link>
  ))}
</div>


        </div>
      </div>
      <Footer/>
    </>
  );
}
