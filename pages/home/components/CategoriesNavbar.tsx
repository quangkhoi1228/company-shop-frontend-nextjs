import { CategoryDataType } from 'types/CategoryDataType';
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

export const categoriesList: CategoryDataType[] = [
  {
    name: 'Clothing & Shoes',
    icon: '/images/categories/hanger.svg',
    code: 'clothing-shoes',
  },
  {
    name: 'Entertainment',
    icon: '/images/categories/cinema.svg',
    code: 'entertainment',
  },
  { name: 'Music', icon: '/images/categories/concert.svg', code: '' },
  {
    name: 'Sport & Lifestyle',
    icon: '/images/categories/fitness.svg',
    code: 'sport',
  },
  { name: 'Pets', icon: '/images/categories/pets.svg', code: 'pets' },
  {
    name: 'Kitchen Accessories',
    icon: '/images/categories/restaraunt.svg',
    code: 'kitchen',
  },
  {
    name: 'Travel Equipment',
    icon: '/images/categories/observation.svg',
    code: 'travel',
  },
  {
    name: 'Growing & Garden',
    icon: '/images/categories/barley.svg',
    code: 'growing',
  },
  {
    name: 'Electrical Tools',
    icon: '/images/categories/powerstation.svg',
    code: 'electric',
  },
  {
    name: 'Mother Care',
    icon: '/images/categories/babysitter.svg',
    code: 'mother-care',
  },
  {
    name: 'Toys & Entertainment',
    icon: '/images/categories/nuclear-station.svg',
    code: 'toy',
  },
  {
    name: 'Vintage',
    icon: '/images/categories/ship-wheel.svg',
    code: 'vintage',
  },
];

export default CategoriesNavbar;
