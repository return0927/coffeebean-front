import '../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Clickable from '../../../components/Clickable';
import { handleCustomerLogin } from '../../login/handleLogin';
import loginState from '../../../state';

const SignInPage = () => {
  const navigate = useNavigate();
  const setLoginData = useRecoilState(loginState)[1];

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(0);
  const [birthday, setBirthday] = useState('2001-01-01');
  const [address, setAddress] = useState('');
  const [phone, setPHone] = useState('');

  // 다시 로그인 페이지로
  const redirectToLogin = () => {
    window.location.href = '/login';
  };

  const validateInputs = () => {
    if (
      [
        loginId,
        password,
        passwordCheck,
        firstName,
        lastName,
        gender,
        birthday,
        address,
        phone,
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

    const resp = await fetch(`/register/customer`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
        birthDate: birthday,
        firstName,
        lastName,
        loginId,
        password,
        phone,
        gender,
      }),
    });
    const data = await resp.json();

    // if error
    if (data.error) {
      const { message } = data;
      alert(`회원가입 중 오류가 발생했습니다. ${message}`);
      navigate(0);
    } else {
      handleCustomerLogin(data, setLoginData);
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
          성
          <input
            type='text'
            name='last_name'
            placeholder={'성'}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          이름
          <input
            type='text'
            name='first_name'
            placeholder={'이름'}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>성별</div>

        <div className='SignInGender'>
          <input
            type='radio'
            name='gender'
            placeholder='M'
            onClick={() => setGender(0)}
            defaultChecked={gender === 0}
          />{' '}
          남
          <input
            type='radio'
            name='gender'
            placeholder='F'
            onClick={() => setGender(1)}
            defaultChecked={gender === 1}
          />{' '}
          여
        </div>

        <div>
          생일
          <input
            type='date'
            name='birthday'
            min='1900-01-01'
            max='2025-12-31'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        <div>
          주소
          <input
            type='text'
            name='address'
            placeholder={'주소를 입력하세요'}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          전화번호
          <input
            type='text'
            name='phonenumber'
            placeholder={'전화번호를 입력하세요'}
            value={phone}
            onChange={(e) => setPHone(e.target.value)}
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
