export type Partner = {
  name: string;
  image: string;
};

export type ProductItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  availability: string;
  displayOrder: number;
};

export const siteConfig = {
  companyName: 'ISHA NANDINI ICE CREAM DISTRIBUTORS',
  logoPath: '/isha.jpeg',
  phone: '+91 9901499813',
  whatsapp: '+91 9901499813',
  email: 'shravnadevadiga@gmail.com',
  instagram: 'ishaa_nandini',
  address: 'Opposite to Anegudde Temple, Kumbhashi, Kundapura',
  gstNumber: '29BOEPA0396G2Z1',
  partners: [
    {
      name: '',
      image: '',
    },
    {
      name: 'Shravan Devadiga',
      image: '/shravan.jpeg',
    },
    {
      name: 'Arjun Devadiga',
      image: '/arjun.jpeg',
    },
  ] as Partner[],
};

export const defaultProducts: ProductItem[] = [
  {
    id: 'classic-scoop',
    name: 'Classic Scoop',
    category: 'Premium Ice Cream',
    description: 'A clean, family-friendly assortment for retail counters and everyday customers.',
    image: '',
    price: '₹199',
    availability: 'In stock',
    displayOrder: 1,
  },
  {
    id: 'vanilla-tub',
    name: 'Vanilla Family Tub',
    category: 'Bulk Dessert',
    description: 'Ready for retail demand and high-volume distribution across the region.',
    image: '',
    price: '₹499',
    availability: 'Available',
    displayOrder: 2,
  },
  {
    id: 'fruit-fusion',
    name: 'Fruit Fusion Cup',
    category: 'Quick Serve',
    description: 'A bright and refreshing range suited to outlets serving quick dessert needs.',
    image: '',
    price: '₹149',
    availability: 'In stock',
    displayOrder: 3,
  },
];

export const storageKeys = {
  gallery: 'isha-nandini-gallery-images',
  products: 'isha-nandini-product-list',
  adminSession: 'isha-nandini-admin-auth',
};
