import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const loginState = atom({
  key: 'loginState',
  default: {
    loggedIn: false,
    accountType: undefined,
    token: undefined,
    meta: {},
  },
  effects_UNSTABLE: [persistAtom],
});

export default loginState;
