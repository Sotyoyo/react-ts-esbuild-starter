import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const root = document.getElementById('app');

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root,
);
