import { useState } from 'react';
import Clickable from './Clickable';
import './TopMenu.css';

const TopMenu = () => {
  const [loginInfo] = useState(undefined);

  const myPageBox =
    loginInfo === undefined ? (
      <Clickable href={'/login'}>
        <div className='menu-content'>
          <label>Login</label>
        </div>
      </Clickable>
    ) : (
      <>
        <Clickable href={'/mypage'}>
          <div className='menu-content'>
            <label>MyPage</label>
          </div>
        </Clickable>
        <Clickable href={'/logout'}>
          <div className='menu-content'>
            <label>LogOut</label>
          </div>
        </Clickable>
      </>
    );

  return (
    <div className='top-menu'>
      <div className='menu-content logo'>
        <img src='https://www.ajou.ac.kr/_res/ajou/kr/img/common/img-logo.png' />
      </div>

      <div className='menu-left'>
        <Clickable href={'/'}>
          <div className='menu-content'>
            <span>Home</span>
          </div>
        </Clickable>
        <Clickable href={'/products'}>
          <div className='menu-content'>
            <span>Products</span>
          </div>
        </Clickable>
        <Clickable href={'/sellers'}>
          <div className='menu-content'>
            <span>Sellers</span>
          </div>
        </Clickable>
      </div>

      <div className='menu-right'>{myPageBox}</div>
    </div>
  );
};

export default TopMenu;
