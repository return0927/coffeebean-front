import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import MainContainer from '../../components/MainContainer';
import TopMenu from '../../components/TopMenu';
import './index.css';
import Clickable from '../../components/Clickable';

export default function LoginPage() {
  return (
    <>
      <TopMenu />
      <MainContainer>
        <div className='login-modal'>
          <div className='login-row'>
            <Clickable href={'customer/'}>
              <div className='login customer'>
                <FontAwesomeIcon icon={faRightToBracket} />
                <label>일반 고객 로그인</label>
              </div>
            </Clickable>
            <Clickable href={'seller/'}>
              <div className='login seller clickable'>
                <FontAwesomeIcon icon={faRightToBracket} />
                <label>판매자 로그인</label>
              </div>
            </Clickable>
          </div>
          <div className='register-row'>
            <Clickable href={'/register'}>
              <div className='register'>
                <FontAwesomeIcon icon={faRightToBracket} />
                <label>회원가입하기</label>
              </div>
            </Clickable>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
