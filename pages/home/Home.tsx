import Template from '../template/Template';
import CategoriesNavbar from './components/CategoriesNavbar';
import ControlBar from './components/ControlBar/ControlBar';

const Home = () => {
  return (
    <Template>
      <div className='container'>
        <CategoriesNavbar />
        <div className='columns'>
          <aside className='column is-3'>a</aside>
          <section className='column'>
            <section className='home-product-list-container'>
              <ControlBar />
            </section>
          </section>
        </div>
        
      </div>
    </Template>
  );
};

export default Home;
