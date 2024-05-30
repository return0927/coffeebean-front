import React, { useState } from 'react';
import './customorder.css';

const OrderPage = () => {
  const [selectedItems, setSelectedItems] = useState({
    품종: '',
    생두종류: '',
    Origin: '',
    Amount: '',
    로스팅: '',
    분쇄도: '',
  });

  const handleChipClick = (category, value) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const renderChips = (category, items) => {
    return items.map((item) => (
      <div
        key={item}
        className={`chip ${selectedItems[category] === item ? 'selected' : ''}`}
        onClick={() => handleChipClick(category, item)}
      >
        <div className="text">{item}</div>
      </div>
    ));
  };

  return (
    <div className="requesting-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="frame">
          <div className="logo">Logo</div>
          <div className="nav-item">홈</div>
          <div className="nav-item">마이페이지</div>
          <div className="nav-item">로그아웃</div>
        </div>
      </div>

      {/* Products */}
      <div className="products">
        <div className="navigation">
          <div className="tab">Recommend</div>
          <div className="tab">Africa</div>
          <div className="tab">Latin America</div>
          <div className="tab">Asia/Pacific</div>
          <div className="tab">Blended</div>
          <div className="tab">request</div>
        </div>
      </div>

      {/* 주문제작요소 */}
      <div className="custom-order">
        <div className="title">
          <h1>주문제작</h1>
        </div>

        <div className="form">
          <div className="list">
            <div className="row">
              <div className="selection">
                <div className="title">판매자</div>
                <input type="text" className="text-input" placeholder="Input text" />
              </div>
            </div>

            <div className="row">
              <div className="selection">
                <div className="title">품종</div>
                <div className="chip-group">
                  {renderChips('품종', ['Arabica', 'Robusta', 'Liberica'])}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="selection">
                <div className="title">생두 종류</div>
                <div className="chip-group">
                  {renderChips('생두종류', ['washed', 'natural'])}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="selection">
                <div className="title">Origin</div>
                <div className="chip-group">
                  {renderChips('Origin', ['Africa', 'Latin America', 'Asia', 'Pacific', 'Blended'])}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="selection">
                <div className="title">Amount</div>
                <div className="chip-group">
                  {renderChips('Amount', ['1kg', '2kg', '5kg', '10kg', '20kg', '60kg', '200kg'])}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="selection">
                <div className="title">로스팅</div>
                <div className="chip-group">
                  {renderChips('로스팅', ['Light', 'Cinnamon', 'medium', 'high', 'city', 'french', 'italian'])}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="selection">
                <div className="title">분쇄도</div>
                <div className="chip-group">
                  {renderChips('분쇄도', ['Espresso machine', 'moka pot', 'coffee maker', 'drip coffee', 'french press', 'cold brew'])}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="selection">
                <div className="title">가격제안</div>
                <input type="number" className="text-input" placeholder="숫자만 입력하세요" />
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <div className="button primary">
            <div className="title">신청</div>
          </div>
          <div className="button primary">
            <div className="title">취소</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="title">Contact Us</div>
          <div className="title">About Us</div>
          <div className="title">Shipping Information</div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
