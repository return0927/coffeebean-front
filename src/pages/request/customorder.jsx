import React, { useState } from 'react';
import Clickable from '../../components/Clickable';
import './customorder.css';

const selections = {
  kind: ['Arabica', 'Robusta', 'Liberica'],
  greenkind: ['Washed', 'Natural'],
  amount: ['500g', '1kg', '2kg', '5kg', '10kg', '50kg', '100kg'],
  origin: ['Africa', 'Latin America', 'Asia', 'Pacific'],
  roasting: ['Light', 'Cinnamon', 'Medium', 'High', 'City', 'French', 'Italian'],
  grind: ['Espresso machine', 'Moka Pot', 'Drip Coffee', 'French Press', 'Cold Brew'],
};

const selectionBuilder = (array, handler, selectedIndex, selectedClass = 'active') => {
  return array.map((elem, index) => (
    <button
      className={`search_category${index === selectedIndex ? ` ${selectedClass}` : ''}`}
      data-filter={elem}
      key={`${index} ${elem}`}
      onClick={() => handler(index)}
    >
      {elem}
    </button>
  ));
};

const SearchPage = () => {
  const [selectedKind, setSelectedKind] = useState(undefined);
  const [selectedGreenkind, setSelectedGreenkind] = useState(undefined);
  const [selectedAmount, setSelectedAmount] = useState(undefined);
  const [selectedOrigin, setSelectedOrigin] = useState(undefined);
  const [selectedRoasting, setSelectedRoasting] = useState(undefined);
  const [selectedGrind, setSelectedGrind] = useState(undefined);

  const handleKind = (index) => {
    setSelectedKind((origin) => (origin === index ? undefined : index));
  };

  const handleGreenkind = (index) => {
    setSelectedGreenkind((origin) => (origin === index ? undefined : index));
  };

  const handleAmount = (index) => {
    setSelectedAmount((origin) => (origin === index ? undefined : index));
  };

  const handleOrigin = (index) => {
    setSelectedOrigin((origin) => (origin === index ? undefined : index));
  };

  const handleRoasting = (index) => {
    setSelectedRoasting((origin) => (origin === index ? undefined : index));
  };

  const handleGrind = (index) => {
    setSelectedGrind((origin) => (origin === index ? undefined : index));
  };

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

      <div className='feature_name'>
        <label>주문제작</label>
      </div>

      <div className='search_container'>
        
        <div className='seller'>
          <label htmlFor="seller-input">판매자</label>
          <input type="text" id="seller-input" placeholder="Input text" />
        </div>

        <div className='kind'>
          <p>종류</p>
          <div className='scrollable-container'>
            {selectionBuilder(selections.kind, handleKind, selectedKind)}
          </div>
        </div>

        <div className='greenkind'>
          <p>생두</p>
          <div className='scrollable-container'>
            {selectionBuilder(selections.greenkind, handleGreenkind, selectedGreenkind)}
          </div>
        </div>


        <div className='amount'>
          <p>용량</p>
          <div className='scrollable-container'>
            {selectionBuilder(selections.amount, handleAmount, selectedAmount)}
          </div>
        </div>

        <div className='origin'>
          <p>원산지</p>
          <div className='scrollable-container'>
            {selectionBuilder(selections.origin, handleOrigin, selectedOrigin)}
          </div>
        </div>

        <div className='roasting'>
          <p>로스팅</p>
          <div className='scrollable-container'>
            {selectionBuilder(selections.roasting, handleRoasting, selectedRoasting)}
          </div>
        </div>

        <div className='grind'>
          <p>분쇄도</p>
          <div className='scrollable-container'>
            {selectionBuilder(selections.grind, handleGrind, selectedGrind)}
          </div>
        </div>

        <div className='price'>
          <label htmlFor="price-input">가격제안 (원)</label>
          <input type="text" id="price-input" placeholder="숫자를 입력하세요" />
        </div>

        <div className='button-container'>
          <button className='custom-button'>신청</button>
          <button className='custom-button'>취소</button>
        </div>

      </div>

    </div>
  );
};

export default SearchPage;
