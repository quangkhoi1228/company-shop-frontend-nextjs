import Template from '../template/template/Template';
import CategoriesNavbar from './components/CategoriesNavbar';
import ControlBar from './components/ControlBar/ControlBar';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import ProductList from './components/ProductList/ProductList';

const Home = () => {
  return (
    <Template>
      <div className='container'>
        <CategoriesNavbar />
        <div className='columns'>
          <aside className='column is-3 is-4-tablet'>
            <FilterSidebar />
          </aside>
          <section className='column is-8-tablet'>
            <section className='home-product-list-container'>
              <ControlBar />
              <ProductList />
            </section>
          </section>
        </div>
      </div>
    </Template>
  );
};

export default Home;
