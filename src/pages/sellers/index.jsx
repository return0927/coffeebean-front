import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import './index.css';

const SellerList = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`/sellers/`);
      const body = await response.json();
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
        <label>상호명</label>
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