import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// [id] 처럼 매칭하는 방법은 https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes 를 참고해주세요
const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`/products/${id}`);
      const body = await response.json();
      setData(body);
    }

    fetcher();
  }, [id]);

  if (data === undefined) return <>Loading...</>;
  return (
    <div>
      <>{JSON.stringify(data)}</>
    </div>
  );
};

export default ProductDetail;
