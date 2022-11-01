import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='header'>
      <Link href={'/'} className='logo'>
        <img src={'/images/logo.svg'} alt='logo' />
      </Link>
      <div className='search-bar'>
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
        <div className='buttons'>
          <a href='' className='button'>
            Sign in
          </a>
          <a href='' className='button has-shadow is-borderless'>
            My cart
            <span className='badge is-red'>5</span>
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
