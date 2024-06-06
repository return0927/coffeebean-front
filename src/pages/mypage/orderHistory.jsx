import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import './index.css';
import Clickable from '../../components/Clickable';
import loginState from '../../state';

const formatPrice = (price) => {
  if (price >= 1000) {
    return price.toLocaleString();
  }
  return price;
};

const MyPage = () => {
  // const [loginInfo, setLoginInfo] = useState(undefined);
  const [loginData, setLoginData] = useRecoilState(loginState);
  const { token } = loginData;
  const [orders, setOrders] = useState([]);

  // const myPageBox = loginInfo === undefined;

  useEffect(() => {
    const fetchOrdersByCustomer = async () => {
      const resp = await fetch('/api/orders/', { token });
      const data = await resp.json();
      // 출력할 주문 정보들
      const orderLists = data.map((order) => ({
        amount: order.amount,
        orderid: order.orderid,
        price: order.price,
        recipient: order.recipient,
        status: order.status,
      }));
      setOrders(orderLists);
    };
    fetchOrdersByCustomer();
  });

  const menuType = {
    CUSTOMER: (
      <Clickable href={'/myPage/orderHistory'}>
        <label className='Main'>주문내역</label>
      </Clickable>
    ),
    SELLER: (
      <Clickable href={'/partners'}>
        <label>대시보드</label>
      </Clickable>
    ),
  };

  return (
    <div>
      <div className='MainContents'>
        <h2>마이페이지</h2>
        <div className='frontBar'>
          <Clickable href={'/mypage'}>
            <label>비밀변호 변경</label>
          </Clickable>
          {menuType[loginData.accountType]}
          <Clickable href={'/myPage/deleteAccount'}>
            <label>회원탈퇴</label>
          </Clickable>
        </div>
        <br /> <br />
        <div>
          <table>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>상품정보</th>
                <th>주문상태</th>
                <th>수량</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{orders.orderid}</td>
                <td>{orders.recipient}</td>
                <td>{orders.status}</td>
                <td>{orders.amount}</td>
                <td>{formatPrice(orders.price)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
