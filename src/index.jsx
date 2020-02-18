import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const reactElement = <App />;

const rootElement = document.getElementById('root');
ReactDOM.render(reactElement, rootElement);
