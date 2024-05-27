import { useState } from 'react';
import './index.css';
import Clickable from '../../components/Clickable';

const formatPrice = (price) => {
  if (price >= 1000) {
    return price.toLocaleString();
  }
  return price;
};

const MyPage = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);

  const myPageBox = loginInfo === undefined;

  return (
    <div>
      <div className='MainContent'>
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
            <span>YSN2121-2E25EG</span>
            <span>상품명</span>
            <span>2</span>
            <span>{formatPrice(1000000)}</span>
            <span>2024/05/19 12:11</span>
          </div>
        </div>
        <div className='button_contain'>
          <button>
            <Clickable href={'/products'}>
              <label style={{ color: '#fff' }}>상품 더보기</label>
            </Clickable>
          </button>
          <button>
            <Clickable href={'/mypage/orderHistory'}>
              <label style={{ color: '#fff' }}>주문내역</label>
            </Clickable>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
