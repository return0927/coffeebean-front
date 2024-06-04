import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';

// Patch fetch API: 기본 api hostname 설정
const orgFetch = window.fetch;
window.fetch = (url, ...params) => {
  if (url.startsWith('/'))
    return orgFetch(`https://api.coffee.ajou.enak.kr/api${url}`, ...params);
  return orgFetch(url, ...params);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
