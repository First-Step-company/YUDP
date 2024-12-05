import SteamCard from '@/public/steam-card.gif';
import Canva from '@/public/CanvaProAccouts.gif';
import netflixshahid from '@/public/netflixshahidpop.png';
import spoitune from '@/public/spoitune.png';
export const Services = [
    // Steam Cards
    {
      id: 2,
      name: 'Steam Cards',
      imageSrc: SteamCard,  // Add your image URL here
      imageAlt: 'Steam Cards : 5$, 10$, 20$, 50$, 100$ ...',
      description:'We provide all Steam Cards.',
      href: '/services/1',  // Link to the service details page
    },
    {
      id: 3,
      name: 'Canva Accounts',
      imageSrc: Canva,
      imageAlt: 'Canva Accounts (1/3/6/12)months / life time',
      description:'We provide Canva Accounts .',
      href: '/services/2',
    },
    {
      id: 4,
      name: 'Movies & Series',
      imageSrc: netflixshahid,
      imageAlt: 'We provide all Netflix & Shahid Accounts (1/3/6/12)months .',
      description:'We provide all Steam Cards.',
      href: '/services/3',
    },
    {
      id: 5,
      name: 'Spotiy & Apple Music',
      imageSrc: spoitune,
      imageAlt: 'Content creation services',
      href: '/services/4',
    },
  ];
