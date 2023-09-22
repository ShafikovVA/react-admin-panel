import React from 'react';
import HeaderLeftSide from './header/HeaderLeftSide.tsx';
import HeaderTopSide from './header/HeaderTopSide.tsx';
import HomePage from '../Home/HomePage.tsx';

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
                            <HomePage></HomePage>
                        </main>
                        <footer>футр</footer>
                    </div>
                </div>
               
        </>
  
      )
}


export default Layout
