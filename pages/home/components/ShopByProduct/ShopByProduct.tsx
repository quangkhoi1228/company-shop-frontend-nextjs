import { CLS } from '@utils/utils';
import { RootState } from 'pages/_app';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_SHOP_BY_PRODUCT } from 'redux/actions/shopByProductAction';
import { ShopByProductDataType } from 'types/ShopByProductDataType';

const ShopByProduct = () => {
  const dispatch = useDispatch();
  const { shopByProduct } = useSelector((state: RootState) => state);
  return (
    <section
      className={CLS('shop-by-product', {
        'is-active': shopByProduct.isActive,
      })}
    >
      <div
        className='overlay'
        onClick={() =>
          dispatch({
            type: CLOSE_SHOP_BY_PRODUCT,
          })
        }
      />
      <div className='shop-by-product__content'>
        <header className='shop-by-product__header'>
          <span className='title'>Shop by product</span>
          <button className='button is-link is-medium'>See all markets</button>
        </header>
        <section className='shop-by-product__body'>
          <div className='columns is-multiline'>
            {shopByProductData.map((item: ShopByProductDataType, index) => (
              <div
                key={item.name + index}
                className='column is-3 is-4-tablet is-12-mobile'
              >
                <article className='product-menu '>
                  <header className='product-menu__header'>
                    <span className='product-menu__icon'>
                      <img src={item.icon} alt={item.name} />
                    </span>
                    <span className='product-menu__name'>{item.name}</span>
                  </header>
                  <ul className='product-menu__list'>
                    {item.products.map((menuItem) => (
                      <li key={menuItem.code}>{menuItem.name}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

const shopByProductData: ShopByProductDataType[] = [
  {
    name: 'Collectibles & Art',
    icon: '/images/shop-by-product/emoticon-poop.svg',
    products: [
      {
        name: 'Collectibles',
        code: 'Collectibles',
      },
      {
        name: 'Coins and Paper Money',
        code: 'Coins and Paper Money',
      },
      {
        name: 'Sports Memorabilia',
        code: 'Sports Memorabilia',
      },
      {
        name: 'Fantiki & Vkladish 🔥',
        code: 'Fantiki & Vkladish 🔥',
      },
      {
        name: 'Postcards',
        code: 'Postcards',
      },
    ],
  },
  {
    name: 'Fashion & Style',
    icon: '/images/shop-by-product/school.svg',
    products: [
      {
        name: 'Women',
        code: 'Women',
      },
      {
        name: 'Men',
        code: 'Men',
      },
      {
        name: 'Watches',
        code: 'Watches',
      },
      {
        name: 'Shoes',
        code: 'Shoes',
      },
      {
        name: 'Tapochki',
        code: 'Tapochki',
      },
    ],
  },
  {
    name: 'Sporting goods',
    icon: '/images/shop-by-product/fastfood.svg',
    products: [
      {
        name: 'Outdoor sports',
        code: 'Outdoor sports',
      },
      {
        name: 'Team watersports 💦',
        code: 'Team watersports 💦',
      },
      {
        name: 'Exercies & fitness',
        code: 'Exercies & fitness',
      },
      {
        name: 'Fantiki & Vkladishi',
        code: 'Fantiki & Vkladishi',
      },
      {
        name: 'Postcards',
        code: 'Postcards',
      },
    ],
  },
  {
    name: 'Collectibles & Art',
    icon: '/images/shop-by-product/emoticon-poop.svg',
    products: [
      {
        name: 'Collectibles',
        code: 'Collectibles',
      },
      {
        name: 'Coins and Paper Money',
        code: 'Coins and Paper Money',
      },
      {
        name: 'Sports Memorabilia',
        code: 'Sports Memorabilia',
      },
      {
        name: 'Fantiki & Vkladish 🔥',
        code: 'Fantiki & Vkladish 🔥',
      },
      {
        name: 'Postcards',
        code: 'Postcards',
      },
    ],
  },
  {
    name: 'Fashion & Style',
    icon: '/images/shop-by-product/school.svg',
    products: [
      {
        name: 'Women',
        code: 'Women',
      },
      {
        name: 'Men',
        code: 'Men',
      },
      {
        name: 'Watches',
        code: 'Watches',
      },
      {
        name: 'Shoes',
        code: 'Shoes',
      },
      {
        name: 'Tapochki',
        code: 'Tapochki',
      },
    ],
  },
  {
    name: 'Sporting goods',
    icon: '/images/shop-by-product/fastfood.svg',
    products: [
      {
        name: 'Outdoor sports',
        code: 'Outdoor sports',
      },
      {
        name: 'Team watersports 💦',
        code: 'Team watersports 💦',
      },
      {
        name: 'Exercies & fitness',
        code: 'Exercies & fitness',
      },
      {
        name: 'Fantiki & Vkladishi',
        code: 'Fantiki & Vkladishi',
      },
      {
        name: 'Postcards',
        code: 'Postcards',
      },
    ],
  },
  {
    name: 'Collectibles & Art',
    icon: '/images/shop-by-product/emoticon-poop.svg',
    products: [
      {
        name: 'Collectibles',
        code: 'Collectibles',
      },
      {
        name: 'Coins and Paper Money',
        code: 'Coins and Paper Money',
      },
      {
        name: 'Sports Memorabilia',
        code: 'Sports Memorabilia',
      },
      {
        name: 'Fantiki & Vkladish 🔥',
        code: 'Fantiki & Vkladish 🔥',
      },
      {
        name: 'Postcards',
        code: 'Postcards',
      },
    ],
  },
  {
    name: 'Fashion & StyleFashion & StyleFashion & Style',
    icon: '/images/shop-by-product/school.svg',
    products: [
      {
        name: 'Women',
        code: 'Women',
      },
      {
        name: 'Men',
        code: 'Men',
      },
      {
        name: 'Watches',
        code: 'Watches',
      },
      {
        name: 'Shoes',
        code: 'Shoes',
      },
      {
        name: 'Tapochki',
        code: 'Tapochki',
      },
    ],
  },
];

export default ShopByProduct;
