import { useState, useEffect } from 'react';
import '../index.css';
import { useRecoilState } from 'recoil';
import Clickable from '../../../components/Clickable';
import loginState from '../../../state';
import LeftMenuBar from '../leftMenuBar';

const OrderList = () => {
  const [loginData] = useRecoilState(loginState);
  const [products, setProducts] = useState([]);

  const { token } = loginData;

  useEffect(() => {
    const fetchProductsBySeller = async () => {
      const resp = await fetch('/products/my', { token });
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
  }, [token]);

  return (
    <div>
      <LeftMenuBar />

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
