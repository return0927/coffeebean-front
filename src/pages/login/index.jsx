import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import MainContainer from '../../components/MainContainer';
import Clickable from '../../components/Clickable';
import styles from './index.module.css';

export default function LoginPage() {
  return (
    <MainContainer>
      <div className={styles['login-modal']}>
        <div className={styles['login-row']}>
          <Clickable href={'customer/'}>
            <div className={`${styles.login} ${styles.customer}`}>
              <p></p>
              <FontAwesomeIcon icon={faRightToBracket} />
              <label>일반 고객 로그인</label>
            </div>
          </Clickable>
          <Clickable href={'seller/'}>
            <div
              className={`${styles.login} ${styles.seller} ${styles.clickable}`}
            >
              <p></p>
              <FontAwesomeIcon icon={faRightToBracket} />
              <label>판매자 로그인</label>
            </div>
          </Clickable>
        </div>
        <div className={styles['register-row']}>
          <Clickable href={'/register/personal/'}>
            <div className={styles.register}>
              <p></p>
              <FontAwesomeIcon icon={faRightToBracket} />
              <label>회원가입하기</label>
            </div>
          </Clickable>
        </div>
      </div>
    </MainContainer>
  );
}
