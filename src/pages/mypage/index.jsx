import { useRecoilValue } from 'recoil';
import './index.css';
import Clickable from '../../components/Clickable';
import loginState from '../../state';
import SubMenuBar from './subMenuBar';

const MyPage = () => {
  const loginData = useRecoilValue(loginState);

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
