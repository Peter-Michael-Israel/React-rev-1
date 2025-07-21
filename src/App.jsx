import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';





export default function App() {
 let routes= createBrowserRouter([{
    path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"/About",element:<About/>},
      {path:"/Portfolio" , element:<Portfolio/>},
      {path:"/Contact",element:<Contact/>},
      {path:"*" , element:<NotFound/>}
    ]
  }])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

