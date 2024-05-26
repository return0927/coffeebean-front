/*
export default function PartnersMainPage() {
  return <div>판매자용 메인 페이지입니다</div>;
}
*/

import { useState } from 'react';
import './index.css';
import Clickable from '../../components/Clickable';

const PartnersMainPage = () => {
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
        <div>
          <h3>주문 처리대기 : </h3>
          <h3>주문제작 처리 대기 : </h3>
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

export default PartnersMainPage;
