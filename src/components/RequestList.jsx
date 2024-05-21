import { useState } from 'react';
import './OrderList.css';

const RequestList = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);

  const myPageBox = loginInfo === undefined;

  return (
    <div>
      <div className='MainItem'>
        <div className='Title'>
          <h2>주문제작</h2> <br />
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>신청</th>
                <th>판매자</th>
                <th>상세정보</th>
                <th>승낙여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101010</td>
                <td>20202020202020</td>
                <td>1</td>
                <td className='button-like'>test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestList;
