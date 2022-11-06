import { CLS } from 'utils/utils';
import RatingStar from './RatingStar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ProductDataType } from 'types/ProductDataType';

const ProductList = () => {
  return (
    <section className='product-list'>
      {[...productList, ...productList, ...productList, ...productList].map(
        (product: ProductDataType, index) => {
          return (
            <article key={index} className='product-item'>
              <img
                className='product__thumpnail'
                src={product.thumbnail}
                alt={product.name}
              />
              <p className='product__name'>{product.name}</p>
              <div className='product__price-info'>
                <span className='product__price'>${product.price}</span>
                {product.tag && (
                  <span
                    className={CLS('product__tag', `is-${product.tag.color}`)}
                  >
                    {product.tag.content}
                  </span>
                )}
              </div>
              <div
                className='product__description'
                dangerouslySetInnerHTML={{ __html: product.descriptions }}
              />
              <div className='product__meta'>
                <RatingStar point={product.vote} />
                <button className='button is-hidden-mobile'>Buy now</button>
                <button className='button is-icon is-medium is-hidden-desktop is-hidden-tablet'>
                  <span className='icon'>
                    <FavoriteBorderIcon />
                  </span>
                </button>
              </div>
            </article>
          );
        }
      )}
    </section>
  );
};

const productList = [
  {
    name: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
    descriptions: 'Eligible for Shipping To Mars or somewhere else',
    category: ['entertainment'],
    price: 49.5,
    vote: 4.05,
    createAt: '2022-11-3',
    yearOfMnufacture: '2022-11-3',
    thumbnail: '/images/product/image-11.svg',
  },
  {
    name: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
    descriptions: `1258 bids, 359 watchers
    <b>$5.95 for shipping</b>`,
    category: ['travel'],
    price: 13.95,
    vote: 4.56,
    createAt: '2022-11-3',
    yearOfMnufacture: '2022-11-3',
    thumbnail: '/images/product/image-5.svg',
  },
  {
    name: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
    descriptions: 'Eligible for Shipping To Mars or somewhere else',
    category: ['entertainment'],
    price: 49.5,
    tag: { content: `50% OFF`, color: `green` },
    vote: 4.05,
    createAt: '2022-11-3',
    yearOfMnufacture: '2022-11-3',
    thumbnail: '/images/product/image-11.svg',
  },
];

export default ProductList;
