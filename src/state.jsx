import { atom } from 'recoil';

const loginState = atom({
  key: 'loginState',
  default: {
    loggedIn: false,
    accountType: undefined,
    token: undefined,
    meta: {},
  },
});

export default loginState;
