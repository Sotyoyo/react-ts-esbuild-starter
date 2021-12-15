import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('app');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root,
);

reportWebVitals();
