import '../login.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import loginState from '../../../state';
import MainContainer from '../../../components/MainContainer';
import { handleSellerLogin } from '../handleLogin';

const SignUpPage = () => {
  const navigate = useNavigate();
  const setLoginData = useRecoilState(loginState)[1];

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  // 회원가입 페이지
  const redirectSignup = () => {
    navigate('/register/business/');
  };

  // 로그인 완료 후 메인으로 이동
  const handleLogin = async () => {
    const resp = await fetch(`/login/producer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginId,
        password,
      }),
    });
    const data = await resp.json();

    /* on error */
    if (data.error) {
      const { message } = data;
      alert(`로그인에 실패했습니다. (${message})`);
      navigate(0);
    } else {
      const name = handleSellerLogin(data, setLoginData);

      alert(`환영합니다, ${name} 님!`);
      navigate('/');
    }
  };

  return (
    <MainContainer>
      <div className='SignIn_Container'>
        <div className='Sign_IN_Type'>
          <div className='button_contain'>
            <button type='button' className='SignButton_Left'>
              구매자
            </button>
            <button type='button' className='SignButton_Right active'>
              판매자
            </button>
          </div>
          <div className='LogIn_Type'>Seller Login</div>
        </div>

        <div className='SignIn_Block'>
          <div>
            ID
            <input
              type='text'
              name='id'
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              placeholder={'Enter your ID'}
            />
            <p> e.g. 12345 </p>
          </div>
          <div>
            Password
            <input
              type='password'
              name='pw'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={'Enter your password'}
            />
            <p> e.g. 12345 </p>
          </div>
          <div className='SignIn_Button_contain'>
            <button
              type='button'
              className='SignInButton_Left'
              onClick={redirectSignup}
            >
              가입하기
            </button>
            <button
              type='button'
              className='SignInButton_Right'
              onClick={handleLogin}
            >
              로그인하기
            </button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default SignUpPage;
