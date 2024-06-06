import { useState } from 'react';
import './index.css';
import Clickable from '../../components/Clickable';
import Dropdown from '../../components/dropdown/Dropdown';
import DropSelection from '../../components/dropdown/DropSelection';
import LeftMenuBar from './leftMenuBar';

const RequestList = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);
  const [view, setView] = useState(false);

  const myPageBox = loginInfo === undefined;

  return (
    <div>
      <LeftMenuBar />

      <div className='MainItem'>
        <div className='Title'>
          <h2>주문제작 관리</h2> <br />
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>회원ID</th>
                <th>품종</th>
                <th>생두 종류</th>
                <th>원산지</th>
                <th>수량</th>
                <th>배전도</th>
                <th>분쇄도</th>
                <th>가격</th>
                <th>주문번호</th>
                <th>승낙여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101010</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>2020</td>
                <td>test</td>
                <td>test</td>
                <td>10000</td>
                <td>1</td>
                <td>
                  <Dropdown>
                    <DropSelection>수락</DropSelection>
                    <DropSelection>거절</DropSelection>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default RequestList;
