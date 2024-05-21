import { Link } from 'react-router-dom';

const Clickable = ({ children, onClick, href }) => {
  if (onClick)
    return (
      <div className='clickable' onClick={onClick}>
        {children}
      </div>
    );
  if (href) {
    return (
      <div className='clickable'>
        <Link to={href}>{children}</Link>
      </div>
    );
  }
};

export default Clickable;
