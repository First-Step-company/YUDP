import SteamCard from '@/public/steam-card.gif';
import Canva from '@/public/CanvaProAccouts.gif';
export const Services = [
    // Steam Cards
    {
      id: 2,
      name: 'Steam Cards',
      price: '$500',
      imageSrc: SteamCard,  // Add your image URL here
      imageAlt: 'Steam Cards : 5$, 10$, 20$, 50$, 100$ ...',
      description:'We provide all Steam Cards.',
      href: '/services/1',  // Link to the service details page
    },
    {
      id: 3,
      name: 'SEO Optimization',
      price: '$30',
      imageSrc: Canva,
      imageAlt: 'SEO optimization services',
      href: '/services/2',
    },
    {
      id: 4,
      name: 'Digital Marketing',
      price: '$400',
      imageSrc: '/images/digital-marketing.jpg',
      imageAlt: 'Digital marketing services',
      href: '/services/3',
    },
    {
      id: 5,
      name: 'Content Creation',
      price: '$350',
      imageSrc: '/images/content-creation.jpg',
      imageAlt: 'Content creation services',
      href: '/services/4',
    },
  ];
