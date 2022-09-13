import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// {/* The following line can be included in your src/index.js or App.js file*/}
// 
import { createStore } from 'redux';
// insted of use createStore the redux organization is recommended to recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
import {Provider} from 'react-redux';
// passing rootReducer in store
import rootReducer from './Services/Reducers/index'
// 

// creating store
const store = createStore(rootReducer); 
console.log('store data',store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
