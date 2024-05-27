import { useState } from 'react';
import './index.css';
import Clickable from '../../components/Clickable';

const DeleteAccount = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);

  const myPageBox = loginInfo === undefined;

  return (
    <div>
      <div className='MainContents'>
        <h2>마이페이지</h2>

        <div className='front_bar'>
          <Clickable href={'/mypage'}>
            <label>비밀변호 변경</label>
          </Clickable>
          <Clickable href={'/myPage/orderHistory'}>
            <label>주문내역</label>
          </Clickable>
          <Clickable href={'/myPage/deleteAccount'}>
            <label className='Main'>회원탈퇴</label>
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
        </div>

        <div className='button_contain'>
          <button type='button' className='deleteAccountBtn'>
            회원 탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
