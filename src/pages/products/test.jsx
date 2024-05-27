import { useParams } from 'react-router-dom';
import Clickable from '../../components/Clickable';
import Dropdown from '../../components/dropdown/Dropdown';
import DropSelection from '../../components/dropdown/DropSelection';
import './index.css';

const formatPrice = (price) => {
  if (price >= 1000) {
    return price.toLocaleString();
  }
  return price;
};

const Test = () => {
  const { id } = useParams();

  return (
    <div className='MainContent'>
      <aside className='productImg'>
        <img
          src='https://img.freepik.com/free-photo/coffee-beans_144627-22481.jpg?t=st=1716689949~exp=1716693549~hmac=6a19a9208ac148ddd47701eeae089a0f600de59f4733f8b0a215d164872cd8ee&w=360'
          width='300'
          height='400'
        ></img>
      </aside>

      <div>
        <div className='contents'>
          <table className='productDetail'>
            <tr>
              <th>상품ID</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>제조연월일</th>
              <td>당일</td>
            </tr>
            <tr>
              <th>원산지</th>
              <td>브라질 60%</td>
            </tr>
            <tr>
              <th>용량</th>
              <td>200g</td>
            </tr>
            <tr>
              <th>판매자</th>
              <td>top_seller</td>
            </tr>
            <tr>
              <th>로스팅</th>
              <td>
                <Dropdown>
                  <DropSelection>라이트 로스팅</DropSelection>
                  <DropSelection>시나몬 로스팅</DropSelection>
                  <DropSelection>미디엄 로스팅</DropSelection>
                  <DropSelection>하이 로스팅</DropSelection>
                  <DropSelection>시티 로스팅</DropSelection>
                  <DropSelection>풀 시티 로스팅</DropSelection>
                  <DropSelection>프렌치 로스팅</DropSelection>
                  <DropSelection>이탈리안 로스팅</DropSelection>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <th>분쇄도</th>
              <td>
                <Dropdown>
                  <DropSelection>에스프레소</DropSelection>
                  <DropSelection>사이폰</DropSelection>
                  <DropSelection>핸드드립</DropSelection>
                  <DropSelection>프렌치 프레스</DropSelection>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <th>개수</th>
              <td>
                <Dropdown>
                  <DropSelection>1</DropSelection>
                  <DropSelection>2</DropSelection>
                  <DropSelection>3</DropSelection>
                  <DropSelection>4</DropSelection>
                  <DropSelection>5</DropSelection>
                  <DropSelection>6</DropSelection>
                  <DropSelection>7</DropSelection>
                  <DropSelection>8</DropSelection>
                  <DropSelection>9</DropSelection>
                  <DropSelection>10</DropSelection>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <th>판매가</th>
              <td>{formatPrice(10000)}</td>
            </tr>
          </table>
        </div>
        <div className='button_contain'>
          <Clickable href={`/products/checkout/${id}`} className='button'>
            <label>구매하기</label>
          </Clickable>
        </div>
      </div>
    </div>
  );
};

export default Test;
