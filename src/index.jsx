import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// BootStrap Setup
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import react-router-dom
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ProductDisplay from './components/products/ProductDisplay';
import About from './components/About';
import Movies from './components/Movies'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'home',
        element:<ProductDisplay/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'movies',
        element:<Movies/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
