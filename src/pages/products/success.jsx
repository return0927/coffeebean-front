import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'react-router-dom';
import Clickable from '../../components/Clickable';
import loginState from '../../state';
import MainContainer from '../../components/MainContainer';
import a from './index.module.css';
import b from './success.module.css';

const styles = { ...a, ...b };

const formatPrice = (price) => {
  if (price >= 1000) {
    return price.toLocaleString();
  }
  return price;
};

const MyPage = () => {
  const loginData = useRecoilValue(loginState);
  const { token } = loginData;

  const [params] = useSearchParams();
  const orderId = +params.get('orderId');
  const [order, setOrder] = useState(undefined);

  useEffect(() => {
    const fetchOrderId = async () => {
      const resp = await fetch(`/orders/${orderId}`, { token });
      const data = await resp.json();

      if (data.error) {
        const { message } = data;
        alert(`주문 정보를 받아오는데 실패했습니다. ${message}`);
      } else {
        setOrder(data);
      }
    };

    fetchOrderId();
  }, [orderId]);

  if (!order) return <MainContainer>주문 정보를 받아오는 중</MainContainer>;

  return (
    <div>
      <div className='ScsMain'>
        <h1
          style={{
            fontSize: 'bold',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          주문 완료!
        </h1>

        <div className='purchaseDetails'>
          <div>
            <span>주문번호</span>
            <span>상품명</span>
            <span>수량</span>
            <span>입금 금액</span>
            <span>주문일</span>
          </div>
          <div>
            <span>{orderId}</span>
            <span>{order.name}</span>
            <span>{order.amount}</span>
            <span>{formatPrice(order.price * order.amount)}</span>
            <span>{order.createAt}</span>
          </div>
        </div>
        <div className='button_contain'>
          <button>
            <Clickable href={'/products'} className={styles.button}>
              <label>상품 더보기</label>
            </Clickable>
          </button>
          <button>
            <Clickable href={'/mypage/orderHistory'} className={styles.button}>
              <label>주문내역</label>
            </Clickable>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
