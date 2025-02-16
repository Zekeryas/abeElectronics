import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './Components/DataProvider/DataProvider';
import { initialState, reducer } from './Utility/reducer'


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode basename="/Amazon-Clone-2024/">
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
