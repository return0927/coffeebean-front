import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Clickable from '../../../components/Clickable';
import './$id.css';

const SellerDetail = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState(undefined);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`/sellers/${id}`);
      const body = await response.json();
      setSeller(body);
    }

    fetcher();
  }, [id]);

  if (!seller) return <div>데이터를 불러오는 중</div>;

  return (
    <div className='seller-detail-container'>
      <div>
        <label className='seller-name'>{seller.companyName}</label>
      </div>

      <div>
        <p className='seller-salespoint'>{seller.businessAddress}</p>
      </div>

      <div>
        <p className='seller-count'>판매 물품 개수: {seller.products.length}</p>
      </div>
      <div className='feature_products'>
        {seller.products &&
          seller.products.map((product) => (
            <div key={product.productId} className='product_container'>
              <div className='product_image'>
                <img src={product.imageUrl} alt='product_image6'></img>
              </div>
              <div className='product_info'>
                <p>{product.name}</p>
                <p>{product.quantity.toLocaleString()}g</p>
              </div>
              <div className='product_weight'>
                <p>{product.price.toLocaleString()} 원</p>
                <Clickable href={`/products/${product.productId}`}>
                  <p>+더보기</p>
                </Clickable>
              </div>
            </div>
          ))}
      </div>

      <Link to='/sellers'>Back to Seller List -&gt;</Link>
    </div>
  );
};

export default SellerDetail;
