export interface CategoryDataType {
  name: string;
  icon: string;
  code: string;
}

export const categoriesList: CategoryDataType[] = [
  {
    name: 'Clothing & Shoes',
    icon: '/images/categories/hanger.svg',
    code: 'clothing-shoes',
  },
  { name: 'Entertainment', icon: '/images/categories/cinema.svg', code: '' },
  { name: 'Music', icon: '/images/categories/concert.svg', code: '' },
  {
    name: 'Sport & Lifestyle',
    icon: '/images/categories/fitness.svg',
    code: '',
  },
  { name: 'Pets', icon: '/images/categories/pets.svg', code: '' },
  {
    name: 'Kitchen Accessories',
    icon: '/images/categories/restaraunt.svg',
    code: '',
  },
  {
    name: 'Travel Equipment',
    icon: '/images/categories/observation.svg',
    code: '',
  },
  { name: 'Growing & Garden', icon: '/images/categories/barley.svg', code: '' },
  {
    name: 'Electrical Tools',
    icon: '/images/categories/powerstation.svg',
    code: '',
  },
  { name: 'Mother Care', icon: '/images/categories/babysitter.svg', code: '' },
  {
    name: 'Toys & Entertainment',
    icon: '/images/categories/nuclear-station.svg',
    code: '',
  },
  { name: 'Vintage', icon: '/images/categories/ship-wheel.svg', code: '' },
];
