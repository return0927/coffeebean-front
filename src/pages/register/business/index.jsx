import '../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Clickable from '../../../components/Clickable';
import { handleSellerLogin } from '../../login/handleLogin';
import loginState from '../../../state';

const SignInPage = () => {
  const navigate = useNavigate();
  const setLoginData = useRecoilState(loginState)[1];

  const [loginId, setLoginId] = useState('sassas');
  const [password, setPassword] = useState('1234');
  const [passwordCheck, setPasswordCheck] = useState('1234');
  const [companyName, setCompanyName] = useState('badassda');
  const [businessAddress, setBusinessAddress] = useState('shipso');
  const [companyNum, setCompanyNum] = useState('355636322313');

  const redirectToLogin = () => {
    window.location.href = '/login';
  };
  // gender는 항상 값이 있으니까 유효성검사를 하지않음, address
  const validateInputs = () => {
    if (
      [
        businessAddress,
        loginId,
        password,
        passwordCheck,
        companyName,
        companyNum,
      ].some((value) => !value)
    )
      return '빈 필드가 있습니다.';
    if (password !== passwordCheck)
      return '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
  };

  const handleRegister = async () => {
    const validationMessage = validateInputs();
    if (validationMessage) {
      alert(validationMessage);
      return;
    }
    // address삭제
    const resp = await fetch(`/register/producer`, {
      method: 'PUT',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        businessAddress,
        companyName,
        companyNum,
        loginId,
        password,
      }),
    });
    console.log(resp);
    const data = await resp.json();
    if (data.error) {
      const { message } = data;
      alert(`회원가입 중 오류가 발생했습니다. ${message}`);
      navigate(0);
    } else {
      handleSellerLogin(data, setLoginData);
      navigate('/register/success');
    }
  };

  return (
    <div className='SignIncontainer'>
      <aside className='SigninImage'>
        <img
          src='https://img.freepik.com/free-vector/flat-design-illustration-people-talking_23-2149075614.jpg?t=st=1716254385~exp=1716257985~hmac=a994b2a67e01c76e2107d213a08b283d88a4e2c3c21d1da5b5b623797794958d&w=900'
          width='450'
          height='350'
          style={{ borderRadius: '15%' }}
        ></img>
      </aside>

      <div className='SigninContainer'>
        <div>
          아이디
          <input
            type='text'
            name='id'
            placeholder={'아이디를 입력하세요'}
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>
        <div>
          비밀번호
          <input
            type='password'
            name='pw'
            placeholder={'비밀번호를 입력하세요'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          비밀번호 재확인
          <input
            type='password'
            name='pw'
            placeholder={'비밀번호를 다시 입력하세요'}
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </div>

        <div>
          사업자 이름
          <input
            type='text'
            name='business_name'
            placeholder={'사업자 명'}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div>
          사업자 주소
          <input
            type='text'
            name='business_address'
            placeholder={'사업자 주소를 입력하세요'}
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
        </div>

        <div>
          사업자 전화번호
          <input
            type='text'
            name='business_phonenumber'
            placeholder={'전화번호를 입력하세요'}
            value={companyNum}
            onChange={(e) => setCompanyNum(e.target.value)}
          />
        </div>

        <div className='button_contain'>
          <button
            type='button'
            className='SignInButton'
            onClick={handleRegister}
          >
            가입하기
          </button>
          <button
            type='button'
            className='SignInButton'
            onClick={redirectToLogin}
          >
            이전으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
