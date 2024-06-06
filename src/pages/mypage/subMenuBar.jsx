import Clickable from '../../components/Clickable';

const SubMenuBar = ({ accountType }) => {
  const middleMenu =
    accountType === 'CUSTOMER' ? (
      <Clickable href={'/myPage/orderHistory'}>
        <label className='Main'>주문내역</label>
      </Clickable>
    ) : (
      <Clickable href={'/partners/myProducts'}>
        <label className='Main'>대시보드</label>
      </Clickable>
    );

  return (
    <div className='frontBar'>
      <Clickable href={'/mypage'}>
        <label>비밀변호 변경</label>
      </Clickable>

      {middleMenu}

      <Clickable href={'/myPage/deleteAccount'}>
        <label className='Main'>회원탈퇴</label>
      </Clickable>
    </div>
  );
};

export default SubMenuBar;
