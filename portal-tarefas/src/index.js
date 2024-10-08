import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Provider } from 'react-redux'; 
import { store } from "./store/index.ts";


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);