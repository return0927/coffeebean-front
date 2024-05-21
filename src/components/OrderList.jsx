import { useState } from 'react';
import './OrderList.css';

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
              <a href='#' id='link'>
                <i className='fa-solid fa-shop'></i> 상품 관리
              </a>
            </li>
            <li>
              <a href='#' id='link'>
                <i className='fa-solid list-check fa-list-check'></i> 주문 관리
              </a>
            </li>
            <li>
              <a href='#' id='link'>
                <i className='fa-solid comment-dot fa-comment-dots'></i> 요청
                관리
              </a>
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
