import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styles from './index.module.css';

const SellerList = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`/sellers/?size=25`);
      const body = await response.json();
      setData(body);
    }

    fetcher();
  }, []);

  return (
    <div className={styles['seller-list-container']}>
      <div className={styles['seller-title']}>
        <label>판매자 리스트</label>
      </div>

      <div className={styles['seller-bar']}>
        <label>ID</label>
        <label>상호명</label>
      </div>

      <ul className={styles['seller-list']}>
        {data &&
          data.map((seller) => (
            <li key={seller.id} className={styles['seller-list-item']}>
              <Link to={`/sellers/detail/${seller.id}`}>
                <div className={styles['seller-link']}>
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
