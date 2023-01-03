import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './locales/config';
import { I18nextProvider } from 'react-i18next';
import i18next from './locales/config';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
);
reportWebVitals();
