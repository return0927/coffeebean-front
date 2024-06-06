import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginState from '../../../state';
import '../index.css';
import styles from './add.module.css';

const AddProducts = () => {
  const loginData = useRecoilValue(loginState);
  const { token } = loginData;

  const navigator = useNavigate();

  const [productName, setProductName] = useState('');
  const [imageUrl, setImageUrl] = useState(
    'https://img.freepik.com/free-photo/coffee-beans_144627-22481.jpg?t=st=1716689949~exp=1716693549~hmac=6a19a9208ac148ddd47701eeae089a0f600de59f4733f8b0a215d164872cd8ee&w=360'
  );
  const [origins, setOrigins] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [processing, setProcessing] = useState('');
  const [grinding, setGrinding] = useState('');
  const [discounts, setDiscounts] = useState(0);
  const [price, setPrice] = useState(0);

  const validateInputs = () => {
    if (
      [
        productName,
        origins,
        quantity,
        processing,
        grinding,
        discounts,
        price,
      ].filter((e) => e === undefined).length > 0
    )
      return '빈 필드를 채워주세요';
    if (quantity <= 0) return '용량은 0g 보다 커야 합니다.';
    if (discounts < 0) return '할인액이 음수일 수 없습니다.';
    if (price <= 0) return '가격은 0원보다 커야 합니다.';
  };

  const createNewProduct = async () => {
    const resp = await fetch(`/products/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discounts,
        grinding,
        name: productName,
        origins,
        price,
        processing,
        quantity,
        imageUrl,
      }),
      token,
    });
    const data = await resp.json();

    return data;
  };

  const handleSubmit = () => {
    const error = validateInputs();
    if (error) {
      alert(error);
      return;
    }

    createNewProduct().then((data) => {
      if (data.error) {
        alert(`상품을 저장하는 중 오류가 발생했습니다. ${data.message}`);
        return;
      }

      const { productId } = data;
      alert('상품 등록에 성공했습니다!');
      navigator(`/products/${productId}`);
    });
  };

  return (
    <div className='SignIncontainer'>
      <aside className='SigninImage'>
        <img className={styles['image-preview']} src={imageUrl}></img>
      </aside>

      <div className='SigninContainer'>
        <div>
          판매자:
          <p> {loginData.meta.name}</p>
        </div>
        <div>
          상품이름
          <input
            type='text'
            name='name'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder={'상품 이름을 입력하세요'}
          />
        </div>
        <div>
          원산지
          <input
            type='text'
            name='origin'
            value={origins}
            onChange={(e) => setOrigins(e.target.value)}
            placeholder={'원산지를 입력하세요'}
          />
        </div>
        <div>
          이미지 URL
          <input
            type='text'
            name='origin'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={'원산지를 입력하세요'}
          />
        </div>
        <div>
          용량 (g)
          <input
            type='number'
            name='capacity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={'용량을 입력하세요'}
          />
        </div>
        <div>
          가공방식
          <input
            type='text'
            name='processing'
            value={processing}
            onChange={(e) => setProcessing(e.target.value)}
            placeholder={'가공 방식을 입력하세요'}
          />
        </div>
        <div>
          분쇄도
          <input
            type='text'
            name='grinding'
            value={grinding}
            onChange={(e) => setGrinding(e.target.value)}
            placeholder={'분쇄도를 입력하세요'}
          />
        </div>
        <div>
          할인액 (₩)
          <input
            type='number'
            name='discount'
            value={discounts}
            onChange={(e) => setDiscounts(e.target.value)}
            placeholder={'할인액을 입력하세요'}
          />
        </div>
        <div>
          판매가 (₩)
          <input
            type='number'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={'판매가를 입력하세요'}
          />
        </div>

        <button type='button' className='SignInButton' onClick={handleSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
