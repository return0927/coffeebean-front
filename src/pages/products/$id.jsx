import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './id.css';

// 1000단위로 표시하는 함수
const formatPrice = (price) => {
  if (price >= 1000) {
    return price.toLocaleString();
  }
  return price;
};

// [id] 처럼 매칭하는 방법은 https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes 를 참고해주세요
const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`/products/${id}`);
      const body = await response.json();
      setData(body);
    }

    fetcher();
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  if (data === undefined) return <>Loading...</>;
  return (
    <div className="product-detail-container">
      <div className="product-image">이미지</div>
      <div className="product-info">
        <h1>{data.name}</h1>
        <ul>
          <li>원산지: {data.origins}</li>
          <li>용량: {data.quantity}g</li>
          <li>판매자: {data.brandName}</li>
          <li>가공방식: {data.processing}</li>
          <li>분쇄도: {data.grinding}</li>
          <li>
            개수: 
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </li>
          <li>판매가: {formatPrice(data.price*quantity)}원</li>
        </ul>
        <button className="buy-button">BUY</button>
      </div>
    </div>
  );
};

export default ProductDetail;
