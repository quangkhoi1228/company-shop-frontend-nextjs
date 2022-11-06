import Template from '../template/template/Template';
import CategoriesNavbar from './components/CategoriesNavbar';
import ControlBar from './components/ControlBar/ControlBar';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import ProductList from './components/ProductList/ProductList';
import ShopByProduct from './components/ShopByProduct/ShopByProduct';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'pages/_app';

const Home = () => {
  const state = useSelector((state: RootState) => state);
  console.log(state);
  return (
    <Template>
      <div className='container'>
        <CategoriesNavbar />
        <div className='columns is-multiline'>
          <aside className='column is-3 is-4-tablet is-12-mobile home__aside-container'>
            <FilterSidebar />
          </aside>
          <section className='column is-8-tablet is-12-mobile'>
            <section className='home-product-list-container'>
              <ControlBar />
              <ProductList />
            </section>
          </section>
        </div>
      </div>
      <ShopByProduct />
    </Template>
  );
};

export default Home;
