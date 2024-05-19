const Clickable = ({ children, onClick, href }) => {
    if (onClick)
        return (<div className="clickable" onClick={onClick}>{ children }</div>);
    else (href)
        return (<div className="clickable"><a href={href}>{ children }</a></div>)
};

export default Clickable;
