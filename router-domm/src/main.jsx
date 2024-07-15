import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Github from './pages/Github/Github.jsx';
import User from './pages/User/User.jsx';
import Githubcatch from './pages/Github/Githubcatch.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route loader={Githubcatch} path='Github' element={<Github/>}/>
        <Route path='user/:userID' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.querySelector('body')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
