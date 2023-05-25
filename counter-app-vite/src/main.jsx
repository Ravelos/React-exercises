import React from 'react'
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp'

import './styles.css'
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10}/>
        {/* <FirstApp title='This is a title'/> */}
    </React.StrictMode>
)


