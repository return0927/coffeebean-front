import { useState } from 'react';
import './dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('선택');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const items = ['수락', '거절'];

  return (
    <div className='dropdown'>
      <button className='dropdown-toggle' onClick={toggleDropdown}>
        {selectedItem}
      </button>
      {isOpen && (
        <ul className='dropdown-menu'>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
