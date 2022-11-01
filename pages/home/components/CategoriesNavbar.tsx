import { CLS } from 'utils/utils';
import { categoriesList, CategoryDataType } from '../configs/categories';

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

export default CategoriesNavbar;
