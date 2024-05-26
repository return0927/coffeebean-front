import '../index.css';

const addproducts = () => {
  return (
    <div className='SignIncontainer'>
      <aside className='SigninImage'>
        <img
          src='https://img.freepik.com/free-photo/coffee-beans_144627-22481.jpg?t=st=1716689949~exp=1716693549~hmac=6a19a9208ac148ddd47701eeae089a0f600de59f4733f8b0a215d164872cd8ee&w=360'
          width='300'
          height='400'
        ></img>
      </aside>

      <div className='SigninContainer'>
        <div>
          상품이름
          <input
            type='text'
            name='name'
            placeholder={'상품 이름을 입력하세요'}
          />
        </div>
        <div>
          제조연월일
          <input
            type='text'
            name='date'
            placeholder={'제조연월일을 입력하세요'}
          />
        </div>
        <div>
          원산지
          <input
            type='text'
            name='origin'
            placeholder={'원산지를 입력하세요'}
          />
        </div>
        <div>
          용량
          <input
            type='text'
            name='capacity'
            placeholder={'용량을 입력하세요'}
          />
        </div>
        <div>
          판매자:
          <label> top_seller</label>
        </div>
        <div>
          로스팅
          <input
            type='text'
            name='roasting'
            placeholder={'로스팅 방식을 입력하세요'}
          />
        </div>
        <div>
          분쇄도
          <input
            type='text'
            name='grinding'
            placeholder={'분쇄도를 입력하세요'}
          />
        </div>
        <div>
          개수
          <input
            type='text'
            name='grinding'
            placeholder={'분쇄도를 입력하세요'}
          />
        </div>
        <div>
          판매가
          <input type='text' name='price' placeholder={'판매가를 입력하세요'} />
        </div>

        <button type='button' className='SignInButton' onClick={''}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default addproducts;
