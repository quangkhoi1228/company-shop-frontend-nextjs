import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import Menu, { MenuItemDataType } from 'pages/template/components/Menu/Menu';
const FilterSidebar = () => {
  return (
    <aside className='filter-sidebar'>
      <button className='button is-large department-button'>
        <span className='icon'>
          <FilterListRoundedIcon />
        </span>
        <span className='text'> Departments</span>
      </button>
      <div className='filter-by-product'>
        <Menu data={menuData} hasExpandButton={true} />
      </div>
    </aside>
  );
};

export const menuData: MenuItemDataType[] = [
  {
    code: 'all',
    name: 'All Categories',
    description: 'Ecommerce patterns',
    active: true,
    children: [
      {
        code: 'Electronics',
        name: 'Electronics',
        active: true,
        children: [
          {
            code: 'Cell Phones & Smartphones',
            name: 'Cell Phones & Smartphones',
            active: true,
            maxChildrenShow: 4,
            children: [
              {
                code: 'Cell Phone Accessories',
                name: 'Cell Phone Accessories',
                href: '',
              },
              {
                code: 'Cell Phone Gatgets',
                name: 'Cell Phone Gatgets',
                href: '',
              },
              {
                code: 'Applications',
                name: 'Applications',
                href: '',
              },
              {
                code: 'Smart Watches',
                name: 'Smart Watches',
                href: '',
              },
              {
                code: 'Smart Watches1',
                name: 'Smart Watches1',
                href: '',
              },
            ],
          },
          {
            code: 'Business & Industrial',
            name: 'Business & Industrial',
            children: [
              {
                code: 'Business & Industrial1',
                name: 'Business & Industrial1',
                href: '',
              },
            ],
          },
          {
            code: 'Computers',
            name: 'Computers',
            description: 'Tablets & Networking',
            children: [
              {
                code: 'Computers1',
                name: 'Computers1',
                href: '',
              },
            ],
          },
          {
            code: 'Consumer Electroinics',
            name: 'Consumer Electroinics',
            children: [
              {
                code: 'Consumer Electroinics1',
                name: 'Consumer Electroinics1',
                href: '',
              },
            ],
          },
          {
            code: 'Home & Garden',
            name: 'Home & Garden',
            children: [
              {
                code: 'Home & Garden1',
                name: 'Home & Garden1',
                href: '',
              },
            ],
          },
          {
            code: 'Collectibles',
            name: 'Collectibles',
            children: [
              {
                code: 'Collectibles1',
                name: 'Collectibles1',
                href: '',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default FilterSidebar;
