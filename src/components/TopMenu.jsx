import { useState } from 'react';
import './TopMenu.css';

const TopMenu = () => {
    const [loginInfo, setLoginInfo] = useState(undefined);

    const myPageBox = (loginInfo === undefined) ? (
        <div className='menu-content'>
            <label>Login</label>
        </div>
    ) : (<>
        <div className='menu-content'>
            <label>MyPage</label>
        </div>
        <div className='menu-content'>
            <label>LogOut</label>
        </div>
    </>);
``
    return (
        <div className='top-menu'>
            <div className='menu-content logo'>
                <img src='https://www.ajou.ac.kr/_res/ajou/kr/img/common/img-logo.png' />
            </div>

            <div className='menu-left'>
                <div className='menu-content'>
                    <span>Home</span>
                </div>
                <div className='menu-content'>
                    <span>Products</span>
                </div>
                <div className='menu-content'>
                    <span>Sellers</span>
                </div>
            </div>

            <div className='menu-right'>
                {myPageBox}
            </div>
        </div>
    );
};

export default TopMenu;
