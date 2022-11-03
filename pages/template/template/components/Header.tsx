import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <header className='header'>
      <Link href={'/'} className='logo'>
        <img src={'/images/logo.svg'} alt='logo' />
      </Link>
      <div className='search-bar is-hidden-mobile'>
        <span className='search-bar__icon'>
          <img src='/images/search-bar__icon.svg' alt='search-bar__icon.svg' />
        </span>
        <input
          type='search'
          placeholder='useless items on white background'
          className='search-bar__input'
        />
      </div>
      <div className='header-meta'>
        <div className='buttons is-mobile'>
          <a href='' className='button is-hidden-mobile'>
            Sign in
          </a>
          <a
            href=''
            className='button has-shadow is-borderless is-hidden-mobile'
          >
            My cart
            <span className='badge is-red'>5</span>
          </a>
          <a
            href=''
            className='button is-icon is-rounded is-outlined is-hidden-desktop is-hidden-tablet'
          >
            <span className='icon'>
              <SearchIcon />
            </span>
          </a>
          <a
            href=''
            className='button is-icon is-rounded  is-outlined is-hidden-desktop is-hidden-tablet'
          >
            <span className='icon'>
              <ShoppingCartIcon />
            </span>
          </a>
        </div>
        <img
          className='has-padding-left-0.75rem'
          src='/images/header-avatar.svg'
          alt=''
        />
      </div>
    </header>
  );
};

export default Header;
