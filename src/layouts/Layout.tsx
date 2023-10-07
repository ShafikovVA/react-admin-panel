import React from 'react';
import {RouterProvider, BrowserRouter, Outlet} from "react-router-dom";
import SideBar from './Sidebar.tsx';
import Header from './Header.tsx';


function Layout(){
    return (
    <>  
        <header>
            <Header />
        </header>
        <div className='main-container'>
            <SideBar />
            <div className="content-container postition-relative d-flex ">
                <main>
                    <Outlet />
                </main>
                <footer>футр</footer>
            </div>
        </div>
    </>
  
      )
}


export default Layout
