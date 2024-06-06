import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';

// Patch fetch API: 기본 api hostname 설정
const orgFetch = window.fetch;
window.fetch = (url, init) => {
  // eslint-disable-next-line prefer-const
  let { headers, ...params } = init || {};
  headers = { ...(headers || {}) };

  const { token } = params;
  if (token) headers = { ...headers, Authorization: `Bearer ${token}` };

  if (url.startsWith('/'))
    return orgFetch(`/api${url}`, { headers, ...params });
  return orgFetch(url, ...params);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
