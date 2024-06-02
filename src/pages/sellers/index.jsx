import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const sellers = [
  { id: 'seller1', name: 'Seller 1', products: 5 },
  { id: 'seller2', name: 'Seller 2', products: 3 },
  { id: 'seller3', name: 'Seller 3', products: 8 },
  { id: 'seller4', name: 'Seller 4', products: 6 },
];

const SellerList = () => {
  return (
    <div className="seller-list-container">

      <div className='seller-title'>
        <label>판매자 리스트</label>
      </div>

      <div className='seller-bar'>
        <label>ID</label>
        <label>판매 물품수</label>
      </div>

      <ul className="seller-list">
        {sellers.map(seller => (
          <li key={seller.id} className="seller-list-item">
            <Link to={`/sellers/detail/${seller.id}`}>
              <div className="seller-link">
                <div>{seller.name}</div>
                <div>{seller.products}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerList;
