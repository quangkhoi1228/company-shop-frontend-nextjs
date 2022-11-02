import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useEffect, useState } from 'react';
import { CLS } from 'utils/utils';

export interface MenuItemDataType {
  code: string;
  name: string;
  description?: string;
  active?: boolean;
  href?: string;
  maxChildrenShow?: number;
  onClick?: Function;
  children?: MenuItemDataType[];
}

const Menu = ({
  data,
  hasExpandButton = false,
  parent,
}: {
  data: MenuItemDataType[];
  hasExpandButton?: boolean;
  parent?: MenuItemDataType;
}) => {
  const maxChildrenShow =
    parent && parent?.maxChildrenShow ? parent.maxChildrenShow : 10000;
  return (
    <ul className='menu'>
      {data.map((menuItem: MenuItemDataType, index: number) => {
        return (
          maxChildrenShow &&
          maxChildrenShow > index && (
            <MenuItem key={menuItem.code} data={menuItem} />
          )
        );
      })}
      {hasExpandButton && (
        <li className='expand-button-container'>
          <button className='button'>Expand</button>
        </li>
      )}
    </ul>
  );
};

const MenuItem = ({ data }: { data: MenuItemDataType }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    data?.active && setIsActive(data.active);
  }, [data]);

  return (
    <li
      className={CLS('menu-item-container', {
        'has-submenu': data.children,
        'is-active': isActive,
      })}
    >
      <div className='menu-item' onClick={() => setIsActive(!isActive)}>
        <p className='menu-name'> {data.name}</p>
        {data.description && (
          <p className='menu-description'> {data.description}</p>
        )}
        {data.children && <ChevronRightRoundedIcon className='menu-arrow' />}
      </div>
      {data.children && <Menu data={data.children} parent={data}/>}
      {data.maxChildrenShow &&
        data.children &&
        data.maxChildrenShow < data?.children?.length && (
          <li className='show-more-button-container'>
            <button className='button'>
              <span className='text'>Show more</span>
              <span className='icon'>
                <ChevronRightRoundedIcon />
              </span>
            </button>
          </li>
        )}
    </li>
  );
};

export default Menu;
