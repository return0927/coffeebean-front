import { useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import loginState from '../state';

const LogOutComponent = () => {
  const navigate = useNavigate();
  const resetLoginData = useResetRecoilState(loginState);

  useEffect(() => {
    resetLoginData();
    navigate('/');
  }, []);

  return <></>;
};

export default LogOutComponent;
