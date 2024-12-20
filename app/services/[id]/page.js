'use client';
import Head from 'next/head';
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';  // Import Image component
import { Services } from '@/data/data';
import Link from 'next/link';
import NotFound from '@/app/components/NotFound';


const servicesDetails = [...Services];

export default function ServiceDetail({ params }) {
  const { id } = React.use(params);
  const service = servicesDetails[id-1];

  if (!service) {
    return <NotFound/>
  }

  return (
    <>
      <Navbar />
      <Head>
        <title>{service.name} - Service Details</title>
        <meta name="description" content={service.description} />
      </Head>

      <div className="bg-white ">
        <div className="pt-6 flex items-center flex-col">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className='w-full'>
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li className="text-sm font-medium text-gray-900"><Link href={'/'}>Services</Link></li>
              <li className="text-sm font-medium text-gray-900">{service.name}</li>
            </ol>
          </nav>
          {/* Image gallery */}
          <div className="flex items-center sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8 ">
            <Image
              alt={service.imageAlt}
              src={service.imageSrc}
              width={300} // Adjust width as needed
              height={367} // Adjust height as needed
              className="rounded-lg object-cover"
            />
          </div>

          {/* Service details */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{service.name}</h1>
              {/* Description */}
              <div className="mt-6 space-y-6">
                <p className="text-base text-black">{service.description}</p>
              </div>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="text-black">For price informations, please contact us at:</h2>
              <strong className="text-black">from {service.price}</strong>
              {/* Contact button */}
              <button
                type="button"
                onClick={() => window.open('https://wa.me/212665830816', '_blank')}
                className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buy it & Make it yours
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
