import { CLS } from 'utils/utils';

const CategoriesNavbar = () => {
  return (
    <nav className='categories-navbar'>
      {categoriesList.map((category: CategoryDataType) => {
        const isActive = category.code === 'clothing-shoes';
        return (
          <article
            key={category.name}
            className={CLS('category', {
              'is-active': isActive,
            })}
          >
            <img
              src={
                isActive
                  ? `${category.icon.replace('.svg', '-active')}.svg`
                  : category.icon
              }
              alt={category.name}
              className={CLS('category__icon')}
            />
            <p className='category__name'>{category.name}</p>
          </article>
        );
      })}
    </nav>
  );
};

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

export default CategoriesNavbar;
