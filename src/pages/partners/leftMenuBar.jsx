import Clickable from '../../components/Clickable';

const LeftMenuBar = () => {
  return (
    <div className='sidebar'>
      <nav className='main-nav'>
        <h3>Menu</h3>
        <ul>
          <li>
            <Clickable href={'/partners/myProducts'}>
              <i className='fa-solid fa-shop'></i> 상품 관리
            </Clickable>
          </li>
          <li>
            <Clickable href={'/partners/orders'}>
              <i className='fa-solid list-check fa-list-check'></i> 주문 관리
            </Clickable>
          </li>
          {/* <li>
            <Clickable href={'/partners/requests'}>
              <i className='fa-regular fa-comment-dots'></i> 주문제작 관리
            </Clickable>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default LeftMenuBar;
