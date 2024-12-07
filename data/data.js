import SteamCard from '@/public/steam-card.gif';
import Canva from '@/public/CanvaProAccouts.gif';
import netflixshahid from '@/public/netflixshahidpop.png';
import spoitune from '@/public/spoitune.png';
import gamesKeyAccounts from '@/public/gamesKeyAccounts.gif';
export const Services = [
    // Steam Cards
    {
      id: 2,
      name: 'Steam Cards',
      price:'4$',
      imageSrc: SteamCard,  // Add your image URL here
      imageAlt: 'Steam Cards : 5$, 10$, 20$, 50$, 100$ ...',
      description:'We provide all Steam Cards.',
      href: '/services/1',  // Link to the service details page
      popular:true,
      categorie:'cards',
      categorieId:''
    },
    {
      id: 3,
      name: 'Canva Accounts',
      imageSrc: Canva,
      price : '1$',
      imageAlt: 'Canva Accounts (1/3/6/12)months / life time',
      description:'We provide Canva Accounts .',
      href: '/services/2',
      popular:true,
      categorie:'accounts',
      categorieId:''
    },
    {
      id: 4,
      name: 'Movies & Series',
      imageSrc: netflixshahid,
      price : '12$',
      imageAlt: 'Netflix & Shahid Accounts (1/3/6/12)months .',
      description:'We provide all Steam Cards.',
      href: '/services/3',
      categorie:'Movies & Series',
      categorieId:''
    },
    {
      id: 5,
      name: 'Spotiy & Apple Music',
      imageSrc: spoitune,
      price : '12$',
      imageAlt: 'Spotify & Apple Music Accounts (1/3/6/12)months .',
      description: 'We provide all Spotify & Apple Music Accounts',
      href: '/services/4',
      categorie:'music',
      categorieId:''
    },
    {
      id: 6,
      name: 'Games Key & Accounts',
      imageSrc: gamesKeyAccounts,
      price : '12$',
      imageAlt: 'Games Key & Accounts  .',
      description: 'We provide all Spotify & Apple Music Accounts',
      href: '/services/4',
      popular: true,
      categorie:'Key & Accounts',
      categorieId:''
    },
  ];
