import { useEffect, useState } from 'react';
import styles from './index.module.css';
import Clickable from '../../components/Clickable';

const selections = Object.freeze({
  kind: ['Decaffeine', 'Blended', 'Cold Brew'],
  amount: ['200g', '500g', '1kg'],
  origin: ['Africa', 'Latin America', 'Asia', 'Pacific'],
  sort: ['Popularity', 'Lowest Price', 'Highest Price', 'Newest', 'Oldest'],
});

const selectionBuilder = (
  array,
  handler,
  selectedIndex,
  selectedClass = 'active'
) => {
  return array.map((elem, index) => {
    return (
      <button
        className={`search_category${index === selectedIndex ? ` ${selectedClass}` : ''}`}
        data-filter={elem}
        key={`${index} ${elem}`}
        onClick={() => handler(index)}
      >
        {' '}
        {elem}{' '}
      </button>
    );
  });
};

const SearchPage = () => {
  const [selectedKind, setSelectedKind] = useState(undefined);
  const [selectedAmount, setSelectedAmount] = useState(undefined);
  const [selectedOrigin, setSelectedOrigin] = useState(undefined);
  const [selectedSort, setSelectedSort] = useState(undefined);

  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/products/`);
      const payload = await resp.json();

      console.log(payload);
      setProducts(payload);
    })();
  }, []);

  const handleKind = (index) => {
    setSelectedKind((origin) => (origin === index ? undefined : index));
  };

  const handleAmount = (index) => {
    setSelectedAmount((origin) => (origin === index ? undefined : index));
  };

  const handleOrigin = (index) => {
    setSelectedOrigin((origin) => (origin === index ? undefined : index));
  };

  const handleSort = (index) => {
    setSelectedSort((origin) => (origin === index ? undefined : index));
  };

  return (
    <div className={styles.MainContainer}>
      <div className={styles.search_engine}>
        <input type='text' placeholder={'원하는 원두 유형을 검색해보세요'} />
        <Clickable href={'/search/'}>
          <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png'></img>
        </Clickable>
      </div>

      <div className={styles.search_container}>
        <div className={styles.kind}>
          <p>유형</p>
          {selectionBuilder(selections.kind, handleKind, selectedKind)}
        </div>

        <div className={styles.amount}>
          <p>용량</p>
          {selectionBuilder(selections.amount, handleAmount, selectedAmount)}
        </div>

        <div className={styles.origin}>
          <p>원산지</p>
          {selectionBuilder(selections.origin, handleOrigin, selectedOrigin)}
        </div>

        <div className={styles.sortby}>
          <p>정렬기준</p>
          {selectionBuilder(selections.sort, handleSort, selectedSort)}
        </div>
      </div>

      <div className={styles.feature_name}>
        <label>Products</label>
      </div>

      <div className={styles.feature_products}>
        {products &&
          products.map((product) => (
            <div key={product.productId} className={styles.product_container}>
              <div className={styles.product_image}>
                <img src={product.imageUrl} alt='product_image1'></img>
              </div>
              <div className={styles.product_info}>
                <p>{product.name}</p>
                <p>{product.brandName}</p>
              </div>
              <div className={styles.product_weight}>
                <p>200g</p>
                <Clickable href={`/products/${product.productId}`}>
                  <p>+더보기</p>
                </Clickable>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
