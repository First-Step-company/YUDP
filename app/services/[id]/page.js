// app/services/[id]/page.js
'use client';
import Head from 'next/head';
import React from 'react'

const servicesDetails = {
  1: {
    name: 'Web Development',
    description: 'Full-stack web development services.',
    price: '$500',
    imageSrc: '/images/web-development.jpg',  // Add image URL
    imageAlt: 'Web development services'
  },
  2: {
    name: 'SEO Optimization',
    description: 'Improve your search engine rankings.',
    price: '$300',
    imageSrc: '/images/seo-optimization.jpg',  // Add image URL
    imageAlt: 'SEO optimization services'
  },
  3: {
    name: 'Digital Marketing',
    description: 'Social media and ad campaigns to grow your business.',
    price: '$400',
    imageSrc: '/images/digital-marketing.jpg',  // Add image URL
    imageAlt: 'Digital marketing services'
  },
};

export default function ServiceDetail({ params }) {
    const { id } = React.use(params);
  const service = servicesDetails[id];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Head>
        <title>{service.name} - Service Details</title>
        <meta name="description" content={service.description} />
      </Head>

      <div className="bg-white">
        <div className="pt-6">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li className="text-sm font-medium text-gray-900">Services</li>
              <li className="text-sm font-medium text-gray-900">{service.name}</li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <img
              alt={service.imageAlt}
              src={service.imageSrc}
              className="aspect-[3/4] w-4 rounded-lg object-cover"
            />
          </div>

          {/* Service details */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{service.name}</h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Service information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{service.price}</p>

              {/* Description */}
              <div className="mt-6 space-y-6">
                <p className="text-base text-gray-900">{service.description}</p>
              </div>

              {/* Contact button */}
              <button
  type="button"
  onClick={() => window.open('https://wa.me/212665830816', '_blank')}
  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
  Contact us on WhatsApp
</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
