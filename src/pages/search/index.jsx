import './index.css';
import Clickable from '../../components/Clickable';

const SearchPage = () => {
  /* 버튼에 필터링 함수를 넣어야 하는데 실패 */

  return (
    <div className='MainContainer'>
      <div className='front_bar'>
        <Clickable href={'recommend/'}>
          <label>Recommend</label>
        </Clickable>
        <Clickable href={'africa/'}>
          <label>Africa</label>
        </Clickable>
        <Clickable href={'latin_america/'}>
          <label>Latin America</label>
        </Clickable>
        <Clickable href={'asia_pacific/'}>
          <label>Asia/Pacific</label>
        </Clickable>
        <Clickable href={'blended/'}>
          <label>Blended</label>
        </Clickable>
        <Clickable href={'request/'}>
          <label>Request</label>
        </Clickable>
      </div>

      <div className='search_engine'>
        <input type='text' placeholder={'원하는 원두 유형을 검색해보세요'} />
        <Clickable href={'search/'}>
          <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png'></img>
        </Clickable>
      </div>

      <div className='search_container'>
        <div className='kind'>
          <p>유형</p>
          <button
            className='search_category'
            data-filter='defacceine'
            onClick='toggleFilter(this)'
          >
            {' '}
            Decaffeine{' '}
          </button>
          <button
            className='search_category'
            data-filter='blended'
            onClick='toggleFilter(this)'
          >
            {' '}
            Blended{' '}
          </button>
          <button
            className='search_category'
            data-filter='coldbrew'
            onClick='toggleFilter(this)'
          >
            {' '}
            Cold Brew{' '}
          </button>
        </div>

        <div className='amount'>
          <p>용량</p>
          <button
            className='search_category'
            data-filter='200g'
            onClick='toggleFilter(this)'
          >
            {' '}
            200g{' '}
          </button>
          <button
            className='search_category'
            data-filter='500g'
            onClick='toggleFilter(this)'
          >
            {' '}
            500g{' '}
          </button>
          <button
            className='search_category'
            data-filter='1kg'
            onClick='toggleFilter(this)'
          >
            {' '}
            1kg{' '}
          </button>
        </div>

        <div className='origin'>
          <p>원산지</p>
          <button
            className='search_category'
            data-filter='africa'
            onClick='toggleFilter(this)'
          >
            {' '}
            Africa{' '}
          </button>
          <button
            className='search_category'
            data-filter='latin_america'
            onClick='toggleFilter(this)'
          >
            {' '}
            Latin America{' '}
          </button>
          <button
            className='search_category'
            data-filter='asia'
            onClick='toggleFilter(this)'
          >
            {' '}
            Asia{' '}
          </button>
          <button
            className='search_category'
            data-filter='pacific'
            onClick='toggleFilter(this)'
          >
            {' '}
            Pacific{' '}
          </button>
        </div>

        <div className='sortby'>
          <p>정렬기준</p>
          <button
            className='search_category'
            data-filter='popularity'
            onClick='toggleFilter(this)'
          >
            {' '}
            Popularity{' '}
          </button>
          <button
            className='search_category'
            data-filter='lowest_price'
            onClick='toggleFilter(this)'
          >
            {' '}
            Lowest Price{' '}
          </button>
          <button
            className='search_category'
            data-filter='highest_price'
            onClick='toggleFilter(this)'
          >
            {' '}
            Highest Price{' '}
          </button>
          <button
            className='search_category'
            data-filter='newest'
            onClick='toggleFilter(this)'
          >
            {' '}
            Newest{' '}
          </button>
          <button
            className='search_category'
            data-filter='oldest'
            onClick='toggleFilter(this)'
          >
            {' '}
            Oldest{' '}
          </button>
        </div>
      </div>

      <div className='feature_name'>
        <label>Products</label>
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
    </div>
  );
};

export default SearchPage;
