import { useParams } from 'react-router-dom';

// [id] 처럼 매칭하는 방법은 https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes 를 참고해주세요
const ProductDetail = () => {
  const { id } = useParams();

  return <div className='test' href={`/products/${id}`}></div>;
};

export default ProductDetail;
