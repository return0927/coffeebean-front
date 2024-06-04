import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import './index.css';

const SellerList = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`/sellers/`);
      const body = await response.json();
      console.log(body);
      setData(body);
    }

    fetcher();
  }, []);

  return (
    <div className='seller-list-container'>
      <div className='seller-title'>
        <label>판매자 리스트</label>
      </div>

      <div className='seller-bar'>
        <label>ID</label>
        <label>판매 물품수</label>
      </div>

      <ul className='seller-list'>
        {data &&
          data.map((seller) => (
            <li key={seller.id} className='seller-list-item'>
              <Link to={`/sellers/detail/${seller.id}`}>
                <div className='seller-link'>
                  <div>{seller.id}</div>
                  <div>{seller.companyName}</div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SellerList;
