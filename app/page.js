// app/services/page.js
import Link from 'next/link';
import Navbar from './components/Navbar';

const services = [
  {
    id: 1,
    name: 'Web Development',
    price: '$500',
    imageSrc: '/images/web-development.jpg',  // Add your image URL here
    imageAlt: 'Web development services',
    href: '/services/1',  // Link to the service details page
  },
  {
    id: 2,
    name: 'SEO Optimization',
    price: '$300',
    imageSrc: '/images/seo-optimization.jpg',
    imageAlt: 'SEO optimization services',
    href: '/services/2',
  },
  {
    id: 3,
    name: 'Digital Marketing',
    price: '$400',
    imageSrc: '/images/digital-marketing.jpg',
    imageAlt: 'Digital marketing services',
    href: '/services/3',
  },
  {
    id: 4,
    name: 'Content Creation',
    price: '$350',
    imageSrc: '/images/content-creation.jpg',
    imageAlt: 'Content creation services',
    href: '/services/4',
  },
];

export default function ServicesPage() {
  return (<>
    <Navbar />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Services</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service) => (
            <div key={service.id} className="group relative">
              <img
                alt={service.imageAlt}
                src={service.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={service.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {service.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{service.imageAlt}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
