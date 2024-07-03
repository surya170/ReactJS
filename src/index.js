import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyButton() {
   return <div> My Custom Button</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyButton/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
