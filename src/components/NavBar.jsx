import React from 'react'

import './NavBar.css'
import './fonts/fonts.css'
import capIcon from './img/icons/cap.png'
import posterIcon from './img/icons/poster.png'
import saleIcon from './img/icons/sale.png'
import shirtIcon from './img/icons/shirt.png'
import NavBarCategory from "./navBarCategory/NavBarCategory";
const NavBarComponent = () => {
    window.addEventListener("resize", ()=>{
        if (window.innerWidth >1000){
            document.getElementById("navBar").style.display="unset";
        }

    });
    return (
        <>
        <nav id = "navBar" className="SideNav">
           <div className="StoreLogo"></div>
            <div className="NavBarContentContainer" style={{display: "flex", flexDirection: "column",justifyContent: "space-around"}}>
                <NavBarCategory text={'On Sale'} img ={saleIcon}></NavBarCategory>
                <NavBarCategory text={'T-Shirts'} img ={shirtIcon}></NavBarCategory>
                <NavBarCategory text={'Accessories'} img ={capIcon}></NavBarCategory>
                <NavBarCategory text={'Prints'} img ={posterIcon}></NavBarCategory>



            </div>

        </nav>
        </>
    )
}
export const NavBar= NavBarComponent;