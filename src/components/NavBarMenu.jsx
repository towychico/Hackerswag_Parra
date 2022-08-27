import React, {useState} from 'react'
import './NavBarMenu.css'
const NavBarMenu = (props) =>{
    return(
        <>
        <div onClick = {()=>{
            document.getElementById("navBar").style.display="flex";
            document.getElementById("arrowBackMenu").style.display="flex";
        }} className="navMenu">
            <div className="logo"></div>
        </div>
        <div  id="arrowBackMenu" className="arrowContainer">
            <div onClick={()=>{

                document.getElementById("navBar").style.display="none";
                document.getElementById("arrowBackMenu").style.display="none";
            }} className="arrowLogo"></div>
        </div>
         </>
    )
}
export default NavBarMenu;