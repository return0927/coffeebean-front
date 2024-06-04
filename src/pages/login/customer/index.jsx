import '../login.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import loginState from '../../../state';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useRecoilState(loginState);

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  // 회원가입 페이지
  const redirectSignup = () => {
    window.location.href = '/register/personal/';
  };

  // 로그인 완료 후 메인으로 이동
  const handleLogin = async () => {
    const resp = await fetch(`/login/customer`, {
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
      const { token: tokenData, firstName, lastName } = data;
      const { token } = tokenData;
      const accountType = tokenData.authScope.type;
      const name = `${firstName}${lastName}`;

      setLoginData((before) => {
        return {
          ...before,
          loggedIn: true,
          accountType,
          token,
          meta: {
            name,
          },
        };
      });

      alert(`환영합니다, ${firstName} ${lastName} 님!`);
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
            <button type='button' className='SignButton_Right'>
              판매자
            </button>
          </div>
          <div className='LogIn_Type'>Customer Login</div>
        </div>

        <div className='SignIn_Block'>
          <div>
            ID
            <input
              type='text'
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
