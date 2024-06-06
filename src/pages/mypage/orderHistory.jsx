import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import loginState from '../../state';
import SubMenuBar from './subMenuBar';
import { SHIP_STATUS } from '../../consts/order';
import './index.css';

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
      const resp = await fetch('/orders/', { token });
      const data = await resp.json();

      if (data.error) {
        const { message } = data;
        alert(`데이터 불러오기에 실패했습니다. (${message})`);
      }

      // 출력할 주문 정보들
      const orderLists = data.map((order) => ({
        amount: order.amount,
        orderId: order.orderId,
        price: order.price,
        recipient: order.recipient,
        status: order.status,
      }));
      setOrders(orderLists);
    };
    fetchOrdersByCustomer();
  }, [token]);

  return (
    <div>
      <div className='MainContents'>
        <h2>마이페이지</h2>
        <SubMenuBar accountType={loginData.accountType} />
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
              {orders &&
                orders.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.recipient}</td>
                    <td>{SHIP_STATUS[order.status]}</td>
                    <td>{order.amount}</td>
                    <td>{formatPrice(order.price * order.amount)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
