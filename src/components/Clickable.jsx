import { Link } from 'react-router-dom';

const Clickable = ({ children, onClick, href, className }) => {
  const classNames = [className, 'clickable'].join(' ');

  if (onClick)
    return (
      <div className={classNames} onClick={onClick}>
        {children}
      </div>
    );
  if (href) {
    return (
      <div className={classNames}>
        <Link to={href}>{children}</Link>
      </div>
    );
  }
};

export default Clickable;
