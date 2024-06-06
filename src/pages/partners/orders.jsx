import { useEffect, useState } from 'react';
import './index.css';
import { useRecoilState } from 'recoil';
import Clickable from '../../components/Clickable';
import loginState from '../../state';
import LeftMenuBar from './leftMenuBar';
import { SHIP_STATUS } from '../../consts/order';

const OrderList = () => {
  // const [loginInfo, setLoginInfo] = useState(undefined);
  const [loginData, setLoginData] = useRecoilState(loginState);
  const { token } = loginData;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersBySeller = async () => {
      const resp = await fetch('/orders/', { token });
      const data = await resp.json();
      // console.log('Response:', resp);
      // console.log('Data:', data);

      if (data.error) {
        const { message } = data;
        alert(`데이터 불러오기에 실패했습니다. (${message})`);
      }

      // 출력할 주문 정보들
      /*
      const orderLists = data.map((order) => ({
        amount: order.amount,
        orderId: order.orderId,
        price: order.price,
        recipient: order.recipient,
        status: order.status,
      })); */
      setOrders(data);
    };
    fetchOrdersBySeller();
  }, [token]);

  // const myPageBox = loginInfo === undefined;

  if (orders === undefined) return <>Loading...</>;
  if (loginData.loggedIn !== true || loginData.accountType !== 'SELLER')
    return <>판매자 로그인을 해주세요</>;
  return (
    <div>
      <LeftMenuBar />

      <div className='MainItem'>
        <div className='Title'>
          <h2>주문목록</h2> <br />
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>회원ID</th>
                <th>주문가격</th>
                <th>주문상태</th>
                <th>주문날짜</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.recipient}</td>
                    <td>{(order.price * order.amount).toLocaleString()}</td>
                    <td>{order.amount}</td>
                    <td>{SHIP_STATUS[order.status]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
