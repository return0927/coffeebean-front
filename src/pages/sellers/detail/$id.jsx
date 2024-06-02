import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Clickable from '../../../components/Clickable';
import './$id.css';

const sellers = [
  { id: 'seller1', name: 'Seller 1', products: 5, details: '풍부하고 부드럽게' },
  { id: 'seller2', name: 'Seller 2', products: 3, details: '자메이카에서 직접 공수' },
  { id: 'seller3', name: 'Seller 3', products: 8, details: '13년 바리스타 경력의 블렌드 마스터' },
  { id: 'seller4', name: 'Seller 4', products: 6, details: '100% 아라비카 커피만 취급' },
];

const SellerDetail = () => {
  const { id } = useParams();
  const seller = sellers.find(seller => seller.id === id);

  if (!seller) {
    return <div>Seller not found</div>;
  }

  return (
    <div className="seller-detail-container">

      <div>
        <label className='seller-name'>
          {seller.name}
        </label>
      </div>

      <div>
        <p className='seller-salespoint'>{seller.details}</p>
      </div>

      <div>
        <p className='seller-count'>판매 물품 개수: {seller.products}</p>
      </div>
      <div className='feature_products'>
        <div className='product_container'>
          <div className='product_image'>
            <img
              src='https://cdn.pixabay.com/photo/2016/08/07/16/28/coffee-1576552_1280.jpg'
              alt='product_image1'
            ></img>
          </div>
          <div className='product_info'>
            <p>Premium Blend</p>
            <p>good_shop</p>
          </div>
          <div className='product_weight'>
            <p>200g</p>
            <Clickable href={'products/1'}>
              <p>+더보기</p>
            </Clickable>
          </div>
        </div>

        <div className='product_container'>
          <div className='product_image'>
            <img
              src='https://cdn.pixabay.com/photo/2021/07/13/18/58/coffee-6464307_1280.jpg'
              alt='product_image2'
            ></img>
          </div>
          <div className='product_info'>
            <p>Latin Africa Blend</p>
            <p>better_shop</p>
          </div>
          <div className='product_weight'>
            <p>500g</p>
            <Clickable href={'products/2'}>
              <p>+더보기</p>
            </Clickable>
          </div>
        </div>

        <div className='product_container'>
          <div className='product_image'>
            <img
              src='https://cdn.pixabay.com/photo/2016/04/12/11/19/coffee-1324126_1280.jpg'
              alt='product_image3'
            ></img>
          </div>
          <div className='product_info'>
            <p>Single Origin</p>
            <p>best_shop</p>
          </div>
          <div className='product_weight'>
            <p>500g</p>
            <Clickable href={'products/3'}>
              <p>+더보기</p>
            </Clickable>
          </div>
        </div>

        <div className='product_container'>
          <div className='product_image'>
            <img
              src='https://cdn.pixabay.com/photo/2019/10/31/07/14/coffee-4591159_1280.jpg'
              alt='product_image4'
            ></img>
          </div>
          <div className='product_info'>
            <p>중후하고 조화로운 블렌딩</p>
            <p>line_coffee_shop</p>
          </div>
          <div className='product_weight'>
            <p>500g</p>
            <Clickable href={'products/4'}>
              <p>+더보기</p>
            </Clickable>
          </div>
        </div>

        <div className='product_container'>
          <div className='product_image'>
            <img
              src='https://cdn.pixabay.com/photo/2018/10/07/10/29/coffee-3729631_1280.jpg'
              alt='product_image5'
            ></img>
          </div>
          <div className='product_info'>
            <p>단맛이 있는 에스프레소 블렌딩</p>
            <p>circle_shop</p>
          </div>
          <div className='product_weight'>
            <p>200g</p>
            <Clickable href={'products/5'}>
              <p>+더보기</p>
            </Clickable>
          </div>
        </div>

        <div className='product_container'>
          <div className='product_image'>
            <img
              src='https://cdn.pixabay.com/photo/2020/06/30/07/50/coffee-5355428_1280.jpg'
              alt='product_image6'
            ></img>
          </div>
          <div className='product_info'>
            <p>신맛과 향기로운 맛의 블렌딩</p>
            <p>rect_shop</p>
          </div>
          <div className='product_weight'>
            <p>500g</p>
            <Clickable href={'products/6'}>
              <p>+더보기</p>
            </Clickable>
          </div>
        </div>
      </div>

      <Link to="/sellers">Back to Seller List -&gt;</Link>
    </div>
  );
};

export default SellerDetail;
