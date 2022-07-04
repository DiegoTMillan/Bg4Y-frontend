import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Components/store/index";
import "./index.module.css";
import App from "./App";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Slider2 from "./Components/slider/Slider2";
import Slider3 from "./Components/slider/Slider3";
import Slider4 from "./Components/slider/Slider4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
