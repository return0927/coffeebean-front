import React from 'react';
import './orderpage.css';

const OrderPage = () => {
  return (
    <div className="order-page">
      <header className="header">
        <div className="logo">로고</div>
        <nav className="nav">
          <a href="/">홈</a>
          <a href="/mypage">마이페이지</a>
          <input type="text" placeholder="Search in site" />
        </nav>
      </header>
      <main>
        <h1>주문/결제</h1>
        <section className="shipping-info">
          <h2>배송지 입력</h2>
          <form>
            <div className="form-group">
              <label>받는사람</label>
              <input type="text" placeholder="Input text" />
            </div>
            <div className="form-group">
              <label>주소</label>
              <input type="text" placeholder="Input text" />
              <button type="button">검색</button>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Input text" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Input text" />
            </div>
            <div className="form-group">
              <label>휴대전화</label>
              <input type="text" placeholder="Input text" />
            </div>
          </form>
        </section>
        <section className="order-summary">
          <h2>주문상품</h2>
          <div className="product">
            <div className="product-image"></div>
            <div className="product-info">
              <p>이건 상품 이름</p>
              <p>수량 : 1개</p>
              <p>25000원</p>
            </div>
          </div>
          <div className="shipping-fee">배송비 3000원</div>
        </section>
        <section className="payment-info">
          <h2>결제정보</h2>
          <div className="payment-details">
            <p>주문상품 25000원</p>
            <p>배송비 3000원</p>
            <p>총액 28000원</p>
          </div>
        </section>
        <section className="payment-method">
          <h2>결제수단</h2>
          <form>
            <div className="form-group">
              <label>
                <input type="radio" name="payment" value="bank" /> 계좌이체
              </label>
              <label>
                <input type="radio" name="payment" value="card" /> 카드 결제
              </label>
              <label>
                <input type="radio" name="payment" value="mobile" /> 휴대폰 결제
              </label>
            </div>
          </form>
        </section>
        <section className="terms">
          <label>
            <input type="checkbox" /> 모든 내용을 확인하였으며 구매 조건에 동의합니다
          </label>
          <div className="buttons">
            <button type="button">취소하기</button>
            <button type="button">결제하기</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrderPage;
