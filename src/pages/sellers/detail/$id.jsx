import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Clickable from '../../../components/Clickable';
import './$id.css';

const SellerDetail = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState(undefined);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`/sellers/${id}`);
      const body = await response.json();
      console.log(body);
      setSeller(body);
    }

    fetcher();
  }, []);

  if (!seller) return <div>데이터를 불러오는 중</div>;

  return (
    <div className='seller-detail-container'>
      <div>
        <label className='seller-name'>{seller.companyName}</label>
      </div>

      <div>
        <p className='seller-salespoint'>{seller.businessAddress}</p>
      </div>

      <div>
        <p className='seller-count'>판매 물품 개수: {seller.id}</p>
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

      <Link to='/sellers'>Back to Seller List -&gt;</Link>
    </div>
  );
};

export default SellerDetail;
