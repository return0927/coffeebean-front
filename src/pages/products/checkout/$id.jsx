import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './orderpage.module.css';
import loginState from '../../../state';
import MainContainer from '../../../components/MainContainer';
import Agreement from './agree';

const OrderPage = () => {
  const navigate = useNavigate();

  const loginData = useRecoilValue(loginState);
  const { token } = loginData;

  const { id } = useParams();
  const [params] = useSearchParams();
  const amount = +params.get('quantity');

  const [product, setProduct] = useState(undefined);
  const [deliveryPrice] = useState(3000);

  const [recipient, setRecipient] = useState(loginData.meta.name);
  const [deliveryAddress, setDeliverAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [payment, setPayment] = useState();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      const resp = await fetch(`/products/${id}`);
      const data = await resp.json();

      setProduct(data);
    };

    fetchProductData();
  }, [id]);

  if (!product) return <MainContainer>상품 정보를 불러오는 중</MainContainer>;

  const cancel = () => {
    navigate(-1);
  };

  const submitOrder = async () => {
    const resp = await fetch(`/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        deliverAddress: deliveryAddress,
        itemId: id,
        recipient,
      }),
      token,
    });
    const data = await resp.json();

    if (data.error) {
      const { message } = data;
      alert(`정확한 폼을 작성해주세요. ${message}`);
    }
    return data;
  };

  const validateInputs = () => {
    if (
      [recipient, deliveryAddress, phone].filter((value) => !value).length > 0
    ) {
      return '빈 값을 채워주세요';
    }
    if (!payment) return '결제 수단을 선택해주세요.';
    if (!isChecked) return '약관에 동의해주세요.';
    if (!phone.match(/^\d{2,3}-\d{3,4}-\d{3,4}$/)) {
      return '연락처 형식을 010-0000-0000 으로 만들어주세요';
    }

    return undefined;
  };

  const handleSubmit = () => {
    const errors = validateInputs();
    if (errors) {
      alert(errors);
      return;
    }

    submitOrder().then((data) => {
      console.log(JSON.stringify(data));

      if (!data.error) {
        const { orderId } = data;

        alert('주문에 성공했습니다!');
        navigate(`/products/success?orderId=${orderId}`);
      }
    });
  };

  return (
    <div className={styles['order-page']}>
      <main>
        <h1>주문/결제</h1>
        <section className={styles['shipping-info']}>
          <h2>배송지 입력</h2>
          <form>
            <div className={styles['form-group']}>
              <label>받는사람</label>
              <input
                type='text'
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder='Input text'
              />
            </div>
            <div className={styles['form-group']}>
              <label>주소</label>
              <input
                type='text'
                value={deliveryAddress}
                onChange={(e) => setDeliverAddress(e.target.value)}
                placeholder='Input text'
              />
            </div>
            <div className={styles['form-group']}>
              <label>휴대전화</label>
              <input
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='010-0000-0000'
              />
            </div>
          </form>
        </section>
        <section className={styles['order-summary']}>
          <h2>주문상품</h2>
          <div className={styles.product}>
            <div className={styles['product-image']}>
              <img src={product.imageUrl}></img>
            </div>
            <div className={styles['product-info']}>
              <p>{product.name}</p>
              <p>수량 : {amount}개</p>
              <p>{(product.price * amount).toLocaleString()}원</p>
            </div>
          </div>
        </section>
        <section className={styles['payment-info']}>
          <h2>결제정보</h2>
          <div className={styles['payment-details']}>
            <p>주문상품 {(product.price * amount).toLocaleString()}원</p>
            <p>배송비 {deliveryPrice.toLocaleString()}원</p>
            <p>
              총액 {(product.price * amount + deliveryPrice).toLocaleString()}원
            </p>
          </div>
        </section>
        <section className={styles['payment-method']}>
          <h2>결제수단</h2>
          <form>
            <div className={styles['form-group']}>
              <label>
                <input
                  type='radio'
                  name='payment'
                  checked={payment === 'ACCOUNT'}
                  onChange={() => setPayment('ACCOUNT')}
                />{' '}
                계좌이체
              </label>
              <label>
                <input
                  type='radio'
                  name='payment'
                  checked={payment === 'CARD'}
                  onChange={() => setPayment('CARD')}
                />{' '}
                카드 결제
              </label>
              <label>
                <input
                  type='radio'
                  name='payment'
                  checked={payment === 'PHONE'}
                  onChange={() => setPayment('PHONE')}
                />{' '}
                휴대폰 결제
              </label>
            </div>
          </form>
        </section>
        <section className={styles.terms}>
          <div className={styles['terms-container']}>
            <h2>이용 약관</h2>
            <div className={styles['terms-content']}>
              <p>
                <Agreement />
              </p>
            </div>
            <label className={styles['terms-checkbox']}>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                }}
              />
              약관에 동의합니다.
            </label>
          </div>
          <div className={styles.buttons}>
            <button type='button' onClick={cancel}>
              취소하기
            </button>
            <button type='button' onClick={handleSubmit}>
              결제하기
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrderPage;
