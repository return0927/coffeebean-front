import { useRecoilValue } from 'recoil';
import './index.css';
import Clickable from '../../components/Clickable';
import loginState from '../../state';
import SubMenuBar from './subMenuBar';

const DeleteAccount = () => {
  const loginData = useRecoilValue(loginState);

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
        <SubMenuBar accountType={loginData.accountType} />

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
