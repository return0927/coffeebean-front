import { useEffect, useState } from 'react';
import './index.css';
import { useRecoilState } from 'recoil';
import Clickable from '../../components/Clickable';
import loginState from '../../state';

const OrderList = () => {
  // const [loginInfo, setLoginInfo] = useState(undefined);
  const [loginData, setLoginData] = useRecoilState(loginState);
  const { token } = loginData;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersBySeller = async () => {
      const resp = await fetch('/api/orders/', { token });
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
        orderid: order.orderid,
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
  //  if (loginData.accountType !== 'PRODUCER')
  //    return <>판매자 로그인을 해주세요</>;
  return (
    <div>
      <div className='sidebar'>
        <nav className='main-nav'>
          <h3>Menu</h3>
          <ul>
            <li>
              <Clickable href={'/partners/myProducts'}>
                <i className='fa-solid fa-shop'></i> 상품 관리
              </Clickable>
            </li>
            <li>
              <Clickable href={'/partners/orders'}>
                <i className='fa-solid list-check fa-list-check'></i> 주문 관리
              </Clickable>
            </li>
            <li>
              <Clickable href={'/partners/requests'}>
                <i className='fa-regular fa-comment-dots'></i> 주문제작 관리
              </Clickable>
            </li>
          </ul>
        </nav>
      </div>

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
              <tr>
                <td>{orders.orderid}</td>
                <td>{orders.recipient}</td>
                <td>{orders.price}</td>
                <td>{orders.amount}</td>
                <td>{orders.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
