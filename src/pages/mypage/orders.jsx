import { useState } from 'react';
import './mypage.css';
import Clickable from '../../components/Clickable';

const MyOrder = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);

  const myPageBox = loginInfo === undefined;

  return (
    <div>
      <div className='MainItem'>
        <div className='Title'>
          <h2>마이페이지</h2> <br />
          <h3>주문내역</h3>
        </div>

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
                <td>asdf1234</td>
                <td>세르메니아 블렌드</td>
                <td>대기중</td>
                <td>1</td>
                <td>2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MyOrder;
