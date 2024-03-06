import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ListComponent from './components/ListComponent';
import ContextComp from './components/ContextComp';
import RouterDom from './components/RouterDom';
import HOC from './components/hoc/HOC';
import Counter from "./redux-components/components/CounterComponent"
import 'bootstrap';
import 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from './redux-components/store/configureStore';
const appStore = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <Counter />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
