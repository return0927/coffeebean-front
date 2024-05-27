import '../login.css';
import MainContainer from '../../../components/MainContainer';

const SignUpPage = () => {
  // 회원가입 페이지
  const redirectSignup = () => {
    window.location.href = '/register';
  };

  // 로그인 완료 후 메인으로 이동
  const redirectTomain = () => {
    window.location.href = '/';
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
              name='first_name'
              placeholder={'Enter your ID'}
            />
            <p> e.g. 12345 </p>
          </div>
          <div>
            Password
            <input
              type='text'
              name='last_name'
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
              onClick={redirectTomain}
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
