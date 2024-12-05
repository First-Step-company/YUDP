import SteamCard from '@/public/steam-card.gif';
import Canva from '@/public/CanvaProAccouts.gif';
export const Services = [
    {
      id: 1,
      name: 'Web Development',
      price: '$500',
      imageSrc: SteamCard,  // Add your image URL here
      imageAlt: 'Web development services',
      href: '/services/1',  // Link to the service details page
    },
    {
      id: 2,
      name: 'SEO Optimization',
      price: '$300',
      imageSrc: Canva,
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
