import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import counterReducer from "./Redux/counterReducer"
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
const store =configureStore({
  reducer:{
    count:counterReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

