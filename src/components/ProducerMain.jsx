import { useState } from 'react';
import './OrderList.css';

const ProducerMain = () => {
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
                <i className='fa-solid fa-list-check'></i> 주문 관리
              </a>
            </li>
            <li>
              <a href='#' id='link'>
                <i className='fa-regular fa-comment-dots'></i> 요청 관리
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='MainItem'>
        <div>
          <h3>주문 처리대기</h3>
          <h3>주문제작 처리 대기</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th colSpan='9' id='title'>
                주문목록
              </th>
            </tr>
            <tr>
              <th colSpan='9' id='details'>
                <nav>
                  <a href='#' id='link'>
                    세부목록
                  </a>
                </nav>
              </th>
            </tr>
            <tr>
              <th>주문번호</th>
              <th>회원 ID</th>
              <th>커피콩 종류</th>
              <th>생두 종류</th>
              <th>원산지</th>
              <th>수량</th>
              <th>배전도</th>
              <th>분쇄도</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101010</td>
              <td>20202020202020</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>1 </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colSpan='9' id='title'>
                주문제작 승인 목록
              </th>
            </tr>
            <tr>
              <th colSpan='9' id='details'>
                <nav>
                  <a href='#' id='link'>
                    세부목록
                  </a>
                </nav>
              </th>
            </tr>
            <tr>
              <th>회원ID</th>
              <th>커피콩 종류</th>
              <th>생두 종류</th>
              <th>원산지</th>
              <th>수량</th>
              <th>배전도</th>
              <th>분쇄도</th>
              <th>가격</th>
              <th>수락여부</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ProducerMain;
