import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
// import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <MoralisProvider appId="e53Gy9zCV4ek9waF3hKx3eUYt69JOLUffZ1fNYZW" serverUrl="https://zfzdbmbepi6v.usemoralis.com:2053/server">    
        <App />
    </MoralisProvider>, 
    document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
