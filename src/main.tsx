import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/layouts/Layout.tsx';
import './index.scss';
import './assets/scss/adaptive.scss';
import './assets/scss/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Layout></Layout>
  </React.StrictMode>,
)
