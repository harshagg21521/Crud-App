import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { App } from "./app";
import { configureStore } from "@reduxjs/toolkit";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import userReducer from "./redux/userReducer";

const store=configureStore({
    reducer:{
        users:userReducer
    }
})


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);