import React from 'react';
import {RouterProvider, BrowserRouter, Outlet} from "react-router-dom";
import HeaderLeftSide from './header/HeaderLeftSide.tsx';
import HeaderTopSide from './header/HeaderTopSide.tsx';


function Layout(){
    return (
    <>  
        <header>
            <HeaderTopSide></HeaderTopSide>
        </header>
        <div className='main-container'>
            <HeaderLeftSide></HeaderLeftSide>
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
