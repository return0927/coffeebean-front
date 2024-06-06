import { useEffect, useState } from 'react';
import './index.css';
import { useRecoilState } from 'recoil';
import { useNavigation } from 'react-router-dom';
import Clickable from '../../components/Clickable';
import loginState from '../../state';
import LeftMenuBar from './leftMenuBar';
import { SHIP_STATUS } from '../../consts/order';
import Dropdown from '../../components/dropdown/Dropdown';
import DropSelection from '../../components/dropdown/DropSelection';

const OrderList = () => {
  const navigator = useNavigation();
  const [loginData, setLoginData] = useRecoilState(loginState);
  const { token } = loginData;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersBySeller = async () => {
      const resp = await fetch('/orders/', { token });
      const data = await resp.json();

      if (data.error) {
        const { message } = data;
        alert(`데이터 불러오기에 실패했습니다. (${message})`);
      }

      setOrders(data);
    };
    fetchOrdersBySeller();
  }, [token]);

  const updateState = async (productId, selection) => {
    const resp = await fetch(`/orders/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: Object.keys(SHIP_STATUS).filter(
          (key) => SHIP_STATUS[key] === selection
        )[0],
      }),
      token,
    });
    const data = await resp.json();

    if (data.error) {
      const { message } = data;
      alert(`업데이트 중 오류가 발생했습니다. ${message}`);
      navigator(0);
      return;
    }

    setOrders((ancient) => {
      const old = [...ancient];
      old.forEach((o) => {
        if (o.productId !== productId) return;

        const order = o;
        order.brandName = data.brandName;
        order.discounts = data.discounts;
        order.grinding = data.grinding;
        order.name = data.name;
        order.imageUrl = data.imageUrl;
        order.price = data.price;
        order.processing = data.processing;
        order.quantity = data.quantity;
      });
      return old;
    });
  };

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
                    <td>
                      <Dropdown
                        initSelection={SHIP_STATUS[order.status]}
                        onSelect={(e) => updateState(order.orderId, e)}
                      >
                        {Object.keys(SHIP_STATUS).map((key) => {
                          return (
                            <DropSelection key={`${order.orderId}-${key}`}>
                              {SHIP_STATUS[key]}
                            </DropSelection>
                          );
                        })}
                      </Dropdown>
                    </td>
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
