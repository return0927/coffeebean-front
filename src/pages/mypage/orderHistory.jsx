import { useState } from 'react';
import './index.css';
import Clickable from '../../components/Clickable';

const MyPage = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);

  const myPageBox = loginInfo === undefined;

  return (
    <div>
      <div className='MainContents'>
        <h2>마이페이지</h2>
        <div className='front_bar'>
          <Clickable href={'/mypage'}>
            <label>비밀변호 변경</label>
          </Clickable>
          <Clickable href={'orderHistory/'}>
            <label className='Main'>주문내역</label>
          </Clickable>
          <Clickable href={'deleteAccount/'}>
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
                <td>101010</td>
                <td>세르메니아 블렌드 200g</td>
                <td>대기중</td>
                <td>3</td>
                <td>20000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
