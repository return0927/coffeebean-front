import './success.css';

const SignInEnd = () => {
  const redirectToLogin = () => {
    window.location.href = '/login';
  };

  // 메인 페이지로 이동하는 함수
  const redirectToMain = () => {
    window.location.href = '/';
  };

  return (
    <div className='SignEndcontainer'>
      <div className='SignEndcircle'>
        <img
          src='https://cdn.pixabay.com/photo/2012/04/24/12/40/ticks-39830_1280.png'
          width='100'
          height='100'
        ></img>
      </div>

      <div className='text-upper'>회원가입</div>
      <div className='text-below'>회원가입이 완료되었습니다!</div>

      <div className='Buttoncontainer'>
        <button
          type='button'
          className='SquareButton_w'
          onClick={redirectToLogin}
        >
          로그인
        </button>
        <button
          type='button'
          className='SquareButton_b'
          style={{ color: '#FFFFFF' }}
          onClick={redirectToMain}
        >
          메인으로
        </button>
      </div>
    </div>
  );
};

export default SignInEnd;
