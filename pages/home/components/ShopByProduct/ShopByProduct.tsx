export interface ShopByProductDataType {
  name: string;
  icon: string;
  products: {
    code: string;
    name: string;
  }[];
}

const ShopByProduct = () => {
  return (
    <section className='shop-by-product'>
      <div className='overlay'></div>
      <div className='shop-by-product__content'>
        <header className='shop-by-product__header'>
          <span className='title'>Shop by product</span>
          <button className='button is-link is-medium'>See all markets</button>
        </header>
        <section className='shop-by-product__body'>
          <div className='columns is-multiline'>
            {shopByProductData.map((item: ShopByProductDataType) => (
              <div key={item.name} className='column is-3 is-4-tablet is-12-mobile'>
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
