import Template from '../template/Template';
import CategoriesNavbar from './components/CategoriesNavbar';

const Home = () => {
  return (
    <Template>
      <div className='container'>
        <CategoriesNavbar />
      </div>
    </Template>
  );
};

export default Home;
