import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const reactElement = <App />;

const rootElement = document.getElementById('root');
ReactDOM.render(reactElement, rootElement);
