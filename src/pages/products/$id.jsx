import { useParams } from 'react-router-dom';

// [id] 처럼 매칭하는 방법은 https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes 를 참고해주세요
const ProductDetail = () => {
  const { id } = useParams();

  return <>Product ID 는 {id} 입니다.</>;
};

export default ProductDetail;
