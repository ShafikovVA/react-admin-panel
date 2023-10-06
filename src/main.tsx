import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/layouts/Layout.tsx';
import './index.scss';
import './assets/scss/adaptive.scss';
import './assets/scss/components';
import {RouterProvider} from 'react-router-dom';
import router from './router.tsx';
import { store } from './store.ts';
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router}/>
    </Provider>
  </React.StrictMode>,
)
