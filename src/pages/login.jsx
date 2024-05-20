import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import MainContainer from '../components/MainContainer';
import TopMenu from '../components/TopMenu';
import './login.css';
import Clickable from '../components/Clickable';

export default function LoginPage() {
    return (<>
        <TopMenu />
        <MainContainer>
            <Clickable href={"customer/"}>
                <div className='login-modal customer'>
                    <FontAwesomeIcon icon={faRightToBracket}/>
                    <label>일반 고객 로그인</label>
                </div>
            </Clickable>
            <Clickable href={"seller/"}>
                <div className='login-modal seller clickable'>
                    <FontAwesomeIcon icon={faRightToBracket}/>
                    <label>판매자 로그인</label>
                </div>
            </Clickable>
        </MainContainer>
    </>);
}
