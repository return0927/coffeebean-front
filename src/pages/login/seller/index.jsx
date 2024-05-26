import './index.css';


const SignUpPage = () => {
    // 회원가입 페이지
    const redirectSignup = () => {
      window.location.href = '/register';
    };

    //로그인 완료 후 메인으로 이동
    const redirectTomain = () => {
      window.location.href = '/';
    };


  return (
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
            <div className='LogIn_Type'>
                Seller Login
            </div>
        </div>

        <div className='SignIn_Block'>
            <div>
                Seller ID  
                <input type='seller_id' name='seller_id' placeholder={'Enter your Seller ID'} />
                <p> e.g. Sell123 </p>
            </div>
            <div>
                ID  
                <input type='id' name='id' placeholder={'Enter your ID'} />
                <p> e.g. 12345 </p>
            </div>
            <div>
                Password 
            <input type='password' name='pw' placeholder={'Enter your password'} />
                <p> e.g. 12345 </p>
            </div>
            <div className='SignIn_Button_contain'>
                <button type='button' className='SignInButton_Left' onClick={redirectSignup}>
                    가입하기
                </button>
                <button type='button' className='SignInButton_Right' onClick={redirectTomain}>
                    로그인하기
                </button>

            </div>
        </div>

    </div>
  );
};

export default SignUpPage;
