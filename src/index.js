import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Wachlist } from './Wachlist';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let routar = createBrowserRouter( [
  {
    path: '/',
    element : <App/>
  },
  {
    path :'wachlist',
    element : <Wachlist/>
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={routar} />
  </React.StrictMode>
);
reportWebVitals();
