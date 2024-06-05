import { useState, useEffect } from 'react';
import '../index.css';
import Clickable from '../../../components/Clickable';

const OrderList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsBySeller = async () => {
      const resp = await fetch('/api/products/my');
      const data = await resp.json();
      // 출력할 제품 정보들
      const filteredProducts = data.map((product) => ({
        name: product.name,
        brandName: product.brandName,
        origins: product.origins,
        quantity: product.quantity,
        price: product.price,
      }));
      setProducts(filteredProducts);
    };
    fetchProductsBySeller();
  }, []);

  // 로그인된 경우는 어떻게 설정해야하는지..?
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
          <h2>상품 관리</h2> <br />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>제품</th>
                <th>브랜드이름</th>
                <th>원산지</th>
                <th>용량</th>
                <th>판매가</th>
              </tr>
            </thead>
            <tbody>
              {/* 판매자의 상품 목록을 표시합니다. */}
              {products.map((product, idx) => (
                <tr key={idx}>
                  <td>{product.name}</td>
                  <td>{product.brandName}</td>
                  <td>{product.origins}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Clickable href={'/partners/myProducts/addproducts'}>
          <label id='right'>등록</label>
        </Clickable>
      </div>
    </div>
  );
};

export default OrderList;
