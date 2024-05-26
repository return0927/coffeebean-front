import { useState } from 'react';
import './index.css';
import Clickable from '../../components/Clickable';

const OrderList = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);

  const myPageBox = loginInfo === undefined;

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
                <td>101010</td>
                <td>20202020202020</td>
                <td>1</td>
                <td>test</td>
                <td>2024-05-20</td>
              </tr>
              <tr>
                <td>101010</td>
                <td>20202020202020</td>
                <td>1</td>
                <td>test</td>
                <td>2024-05-20</td>
              </tr>
              <tr>
                <td>101010</td>
                <td>20202020202020</td>
                <td>1</td>
                <td>test</td>
                <td>2024-05-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
