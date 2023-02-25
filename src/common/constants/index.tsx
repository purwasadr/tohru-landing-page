import { StaticImageData } from 'next/image';
import { avaon1, ellaFreya, ellaFreya2, ellaFreya3, mikasa } from '../assets';
import { BinanceSvg, CoinbaseSvg, PolyNetwork } from '../components/svg';
import Kucoin from '../components/svg/Kucoin';

interface NavbarItem {
  id: number;
  caption: string;
}

const navbarItems: NavbarItem[] = [
  {
    id: 1,
    caption: "Portals"
  },
  {
    id: 2,
    caption: 'Overview'
  },
  {
    id: 3,
    caption: 'App'
  },
  {
    id: 4,
    caption: 'Investors'
  },
  {
    id: 5,
    caption: 'Meet Our Team'
  },
]

interface PartnerCompany {
  id: number;
  icon: JSX.Element;
}

const partners: PartnerCompany[] = [
  {
    id: 1,
    icon: <Kucoin />
  },
  {
    id: 2,
    icon: <CoinbaseSvg />
  },
  {
    id: 3,
    icon: <Kucoin />
  },
  {
    id: 4,
    icon: <PolyNetwork />
  },
]

interface SupportedTrading {
  id: number;
  icon: JSX.Element;
}

const supportedTrading: SupportedTrading[] = [
  {
    id: 1,
    icon: <CoinbaseSvg />
  }, 
  {
    id: 2,
    icon: <Kucoin />
  }, 
  {
    id: 3,
    icon: <BinanceSvg />
  }, 
  {
    id: 4,
    icon: <PolyNetwork />
  }, 
  {
    id: 5,
    icon: <Kucoin />
  }, 
]

export interface OperationalTeam {
  id: number;
  img: StaticImageData;
  name: string;
  description: string;
}

const operationalTeams: OperationalTeam[] = [
  {
    id: 1,
    img: mikasa,
    name: "Mikasa Ackerman",
    description: "Shineeee....."
  },
  {
    id: 2,
    img: ellaFreya2,
    name: "Ella Freya",
    description: "CMO, Head of Social Media Community"
  },
  {
    id: 3,
    img: ellaFreya2,
    name: "Sarah Chloe",
    description: "CMO, Head of Social Media Community"
  },
  {
    id: 4,
    img: ellaFreya,
    name: "Ella Yukata",
    description: "CMO, Head of Social Media Community"
  },
  {
    id: 5,
    img: ellaFreya2,
    name: "Carla Kiwami",
    description: "CMO, Head of Social Media Community"
  },
  {
    id: 6,
    img: ellaFreya3,
    name: "Ella Nezuko",
    description: "CMO, Head of Social Media Community"
  },
  {
    id: 7,
    img: ellaFreya2,
    name: "Carla Kiwami",
    description: "CMO, Head of Social Media Community"
  },
  {
    id: 8,
    img: ellaFreya2,
    name: "Jessica Berlin",
    description: "CMO, Head of Social Media Community"
  },
]

interface FooterLink {
  id: number;
  category: string;
  links: {
    id: number;
    caption: string;
  }[];
}

const footerLinks: FooterLink[] = [
  {
    id: 1,
    category: 'Company',
    links: [
      {
        id: 1,
        caption: 'About us'
      },
      {
        id: 2,
        caption: 'Blog'
      },
      {
        id: 3,
        caption: 'Careers'
      },
    ]
  },
  {
    id: 2,
    category: 'Products',
    links: [
      {
        id: 1,
        caption: 'Accound & Card'
      },
      {
        id: 2,
        caption: 'Security'
      },
      {
        id: 3,
        caption: 'Crypto'
      },
    ]
  },
  {
    id: 3,
    category: 'Help',
    links: [
      {
        id: 1,
        caption: 'Support and Guides'
      },
      {
        id: 2,
        caption: 'Developer docs'
      },
      {
        id: 3,
        caption: 'Status'
      }
    ]
  }
]

export {
  navbarItems,
  partners,
  supportedTrading,
  operationalTeams,
  footerLinks
}