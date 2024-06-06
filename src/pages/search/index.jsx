import { useEffect, useState } from 'react';
import Clickable from '../../components/Clickable';
import styles from './index.module.css';

const selections = Object.freeze({
  Process: ['Natural', 'Washed', 'Honey'],
  amount: ['200g', '500g', '1kg'],
  origin: ['Ethiopia', 'Asia', 'Brazil', 'Colombia', 'Pacific'],
  sort: ['Popularity', 'Lowest Price', 'Highest Price', 'Newest', 'Oldest'],
});

const sortKeyMap = Object.freeze({
  Popularity: 'popularity',
  'Lowest Price': 'LOWEST_PRICE',
  'Highest Price': 'HIGHEST_PRICE',
  Newest: 'NEWEST',
  Oldest: 'OLDEST',
});

const selectionBuilder = (
  array,
  handler,
  selectedIndex,
  selectedClass = styles.active
) => {
  return array.map((elem, index) => {
    return (
      <button
        className={`${styles.search_category}${index === selectedIndex ? ` ${selectedClass}` : ''}`}
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
  const [selectedProcess, setSelectedProcess] = useState(undefined);
  const [selectedAmount, setSelectedAmount] = useState(undefined);
  const [selectedOrigin, setSelectedOrigin] = useState(undefined);
  const [selectedSort, setSelectedSort] = useState(4);

  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    (async () => {
      const params = [
        ['Process', selections.Process[selectedProcess]],
        ['amount', selections.amount[selectedAmount]],
        ['origin', selections.origin[selectedOrigin]],
        ['sort', sortKeyMap[selections.sort[selectedSort]]],
      ]
        .filter((v) => v[1] !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      const resp = await fetch(`/products/${params ? `?${params}` : ''}`);
      const payload = await resp.json();

      setProducts(payload);
    })();
  }, [selectedProcess, selectedAmount, selectedOrigin, selectedSort]);

  const handleProcess = (index) => {
    setSelectedProcess((origin) => (origin === index ? undefined : index));
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
        <div className={styles.origin}>
          <p>원산지</p>
          {selectionBuilder(selections.origin, handleOrigin, selectedOrigin)}
        </div>

        <div className={styles.Process}>
          <p>가공방법</p>
          {selectionBuilder(selections.Process, handleProcess, selectedProcess)}
        </div>

        <div className={styles.amount}>
          <p>용량</p>
          {selectionBuilder(selections.amount, handleAmount, selectedAmount)}
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
                <p>{product.quantity}g</p>
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
