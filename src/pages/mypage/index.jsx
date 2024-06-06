import { useState } from 'react';
import { useRecoilState } from 'recoil';
import './index.css';
import Clickable from '../../components/Clickable';
import loginState from '../../state';

const MyPage = () => {
  // const [loginInfo, setLoginInfo] = useState(undefined);
  const [loginData, setLoginData] = useRecoilState(loginState);
  const { token } = loginData;
  const [orders, setOrders] = useState([]);

  // const myPageBox = loginInfo === undefined;

  const menuType = {
    CUSTOMER: (
      <Clickable href={'/myPage/orderHistory'}>
        <label>주문내역</label>
      </Clickable>
    ),
    SELLER: (
      <Clickable href={'/partners'}>
        <label>대시보드</label>
      </Clickable>
    ),
  };

  return (
    <div>
      <div className='MainContents'>
        <h2>마이페이지</h2>

        <div className='frontBar'>
          <Clickable href={'/mypage'}>
            <label className='Main'>비밀변호 변경</label>
          </Clickable>
          {menuType[loginData.accountType]}
          <Clickable href={'/myPage/deleteAccount'}>
            <label>회원탈퇴</label>
          </Clickable>
        </div>

        <div className='forms'>
          <div>
            현재 비밀번호
            <input
              type='text'
              name='currentPw'
              placeholder={'현재 비밀번호를 입력하세요'}
            />
          </div>
          <br />
          <div>
            비밀번호 재입력
            <input
              type='text'
              name='confirmPw'
              placeholder={'비밀번호를 다시 입력하세요'}
            />
          </div>
          <br />
          <div>
            새 비밀번호 입력
            <input
              type='text'
              name='newPw'
              placeholder={'새 비밀번호를 입력하세요'}
            />
          </div>
          <br />
        </div>

        <div className='button_contain'>
          <button type='button' className='PwChangeBtn'>
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
