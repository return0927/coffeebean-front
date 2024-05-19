import './MainContainer.css';

const MainContainer = ({ children, a }) => {
    return (<div className='page-center'>
        { children }
    </div>);
}

export default MainContainer;
