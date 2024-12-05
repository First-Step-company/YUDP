// app/services/page.js
'use client';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from "next/image";
import { Services } from '@/data/data';


const services = [...Services];
export default function ServicesPage() {
  return (<>
    <Navbar />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Services</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service) => (
            <div key={service.id} className="flex group relative flex-col items-center border border-black/15 rounded-3xl">
                <Image src={service.imageSrc} width={300} height={300} alt={service.imageAlt}/>
              <div className="mt-4 flex items-center ">
                <div className='flex flex-col w-full'>
                  <h3 className="text-sm text-gray-700 font-semibold text-center w-full">
                    <Link href={service.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {service.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 text-center">{service.imageAlt}</p>
                </div>
                <p className="rounded-full text-white font-bold bg-red-600 w-1/2 text-center">{service.price}</p>
                {/* Contact button */}
              {/* <button
                type="button"
                onClick={() => window.open('https://wa.me/212665830816', '_blank')}
                className="mb-5 mt-5 h-[40px] w-full items-center text-center  rounded-md border border-transparent bg-indigo-600 px-8  text-base font-medium text-white hover:bg-indigo-700 "
                >
                Contact us on WhatsApp
              </button> */}
              </div>

            </div>
            ))}
        </div>
      </div>
    </div>
    </>
  );
}
