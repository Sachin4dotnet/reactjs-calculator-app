//index.js File
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from 'react-dom/client';
import Calculator from "./calculator.js";
// import reportWebVitals from './reportWebVitals';

// Render the Calculator to the Web page.
// ReactDOM.render(<Calculator />, document.getElementById("root"));



const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
