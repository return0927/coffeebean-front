import '../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { handleSellerLogin } from '../../login/handleLogin';
import loginState from '../../../state';

const SignInPage = () => {
  const navigate = useNavigate();

  const [_, setLoginData] = useRecoilState(loginState);

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');

  // 다시 로그인 페이지로
  const redirectToLogin = () => {
    navigate('/login');
  };

  const validateInputs = () => {
    if (
      [
        loginId,
        password,
        passwordCheck,
        businessName,
        businessAddress,
        businessNumber,
      ].some((value) => value === undefined)
    )
      return '빈 필드가 있습니다.';
    if (password !== passwordCheck)
      return '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
  };

  const handleSignup = async () => {
    const error = validateInputs();
    if (error) {
      alert(error);
      return;
    }

    const resp = await fetch(`/register/producer`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        businessAddress,
        companyName: businessName,
        companyRegistrationNumber: businessNumber,
        loginId,
        password,
      }),
    });
    const data = await resp.json();

    // if error
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
            name='pwCheck'
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
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
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
          사업자 등록번호
          <input
            type='text'
            name='business_phonenumber'
            placeholder={'숫자만 입력'}
            value={businessNumber}
            onChange={(e) =>
              setBusinessNumber(e.target.value.replace(/[^\d]+/, ''))
            }
          />
        </div>

        <div className='button_contain'>
          <button
            type='button'
            className='SignInButton'
            onClick={redirectToLogin}
          >
            이전으로
          </button>
          <button type='button' className='SignInButton' onClick={handleSignup}>
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
