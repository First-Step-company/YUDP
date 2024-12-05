// app/services/page.js
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
            <div key={service.id} className="group relative">
                <Image src={service.imageSrc} width={300} height={300} alt={service.imageAlt}/>
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
