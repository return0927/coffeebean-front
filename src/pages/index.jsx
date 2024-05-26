import { Link } from 'react-router-dom';
import MainContainer from '../components/MainContainer';

const subpages = [
  '/login',
  '/login/customer',
  '/login/seller',
  '/register',
  '/products/',
  '/products/1',
  '/sellers',
  '/sellers/1',
  '/mypage',
  '/mypage/orders',
  '/mypage/requests',
  '/partners',
  '/partners/myproducts',
  '/partners/requests',
  '/partners/orders',
];

const IndexPage = () => {
  return (
    <MainContainer>
      <div
        style={{
          width: '500px',
          padding: '10px 30px',
          border: '1px solid',
          borderRadius: '15px',
        }}
      >
        <h2>환영합니다</h2>
        <p>
          여기에는 아직 아무 것도 없지만, 여기에 메인화면이 오게 될 예정입니다.
          <br />
          너무 휑하니까, 구현해야 하는 페이지들의 링크들을 남겨보겠습니다.
          클릭하면 해당 페이지로 이동할 수 있습니다.
        </p>

        <ul>
          {subpages.map((path) => (
            <li key={path}>
              <Link to={path}>{path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default IndexPage;
