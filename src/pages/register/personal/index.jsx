import '../index.css';
import Clickable from '../../../components/Clickable';

const SignInPage = () => {
  // 다시 로그인 페이지로
  const redirectToLogin = () => {
    window.location.href = '/login';
  };

  // 가입완료페이지

  const redirectTosuccess = () => {
    window.location.href = '/register/success';
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
          <input type='text' name='id' placeholder={'아이디를 입력하세요'} />
        </div>
        <div>
          비밀번호
          <input
            type='password'
            name='pw'
            placeholder={'비밀번호를 입력하세요'}
          />
        </div>
        <div>
          비밀번호 재확인
          <input
            type='password'
            name='pw'
            placeholder={'비밀번호를 다시 입력하세요'}
          />
        </div>

        <div>
          성
          <input type='text' name='first_name' placeholder={'성'} />
        </div>
        <div>
          이름
          <input type='text' name='last_name' placeholder={'이름'} />
        </div>

        <div>성별</div>

        <div className='SignInGender'>
          <input type='radio' name='gender' placeholder='M' /> 남
          <input type='radio' name='gender' placeholder='F' /> 여
        </div>

        <div>
          생일
          <input
            type='date'
            name='birthday'
            value={'2024-05-20'}
            min='1900-01-01'
            max='2025-12-31'
          />
        </div>

        <div>
          주소
          <input type='text' name='address' placeholder={'주소를 입력하세요'} />
        </div>

        <div>
          전화번호
          <input type='text' name='phonenumber' placeholder={'전화번호를 입력하세요'} />
        </div>

        <div className='button_contain'>
          <button
            type='button'
            className='SignInButton'
            onClick={redirectTosuccess}
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