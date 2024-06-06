import { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ initSelection, onToggle, onSelect, children }) => {
  const selections = Array.from(children).map((e) => e.props.children);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    initSelection || selections[0]
  );

  const toggleDropdown = () => {
    if (onToggle) onToggle(!isOpen);
    setIsOpen((value) => !value);
  };

  const handleItemClick = (item) => {
    if (onSelect) onSelect(item);
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <button className='dropdown-toggle' onClick={toggleDropdown}>
        {selectedItem} <i className='fa-solid fa-caret-down'></i>
      </button>
      {isOpen && (
        <ul className='dropdown-menu'>
          {selections.map((item, index) => (
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
