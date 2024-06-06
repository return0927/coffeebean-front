import '../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import loginState from '../../../state';

const Addproducts = () => {
  const navigate = useNavigate();
  const setLoginData = useRecoilState(loginState)[1];

  const [discounts, setDiscounts] = useState(0);
  const [grinding, setGrinding] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [origins, setOrigins] = useState('');
  const [price, setPrice] = useState(0);
  const [processing, setProcessing] = useState('');
  const [quantity, setQuantity] = useState(0);

  const validateInputs = () => {
    if (
      [
        discounts,
        grinding,
        imageUrl,
        name,
        origins,
        price,
        processing,
        quantity,
      ].some((value) => !value)
    )
      return '빈 필드가 있습니다.';
  };

  const handleAdd = async () => {
    const validationMessage = validateInputs();
    if (validationMessage) {
      alert(validationMessage);
      return;
    }

    const resp = await fetch(`/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        discounts,
        grinding,
        imageUrl,
        name,
        origins,
        price,
        processing,
        quantity,
      }),
    });
    const data = await resp.json();

    // if error
    if (data.error) {
      const { message } = data;
      alert(`상품 추가 중 오류가 발생했습니다. ${message}`);
      navigate(0);
    } else {
      navigate('/index');
    }
  };

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
            value={name}
            placeholder={'상품 이름을 입력하세요'}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          원산지
          <input
            type='text'
            name='origin'
            value={origins}
            placeholder={'원산지를 입력하세요'}
            onChange={(e) => setOrigins(e.target.value)}
          />
        </div>
        <div>
          용량
          <input
            type='text'
            name='capacity'
            value={quantity}
            placeholder={'용량을 입력하세요'}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          판매자:
          <label> top_seller</label>
        </div>
        <div>
          가공방식
          <input
            type='text'
            name='processing'
            value={processing}
            placeholder={'가공 방식을 입력하세요'}
            onChange={(e) => setProcessing(e.target.value)}
          />
        </div>
        <div>
          분쇄도
          <input
            type='text'
            name='grinding'
            value={grinding}
            placeholder={'분쇄도를 입력하세요'}
            onChange={(e) => setGrinding(e.target.value)}
          />
        </div>
        <div>
          할인율
          <input
            type='text'
            name='discount'
            value={discounts}
            placeholder={'할인율을 입력하세요'}
            onChange={(e) => setDiscounts(e.target.value)}
          />
        </div>
        <div>
          판매가
          <input
            type='text'
            name='price'
            value={price}
            placeholder={'판매가를 입력하세요'}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type='button' className='SignInButton' onClick={handleAdd}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default Addproducts;
