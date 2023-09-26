import React from "react";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import $ from 'jquery';
import { Link } from 'react-scroll';


$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 500) { 
        $('.head-navbar').addClass('solid');
    } else {
        $('.head-navbar').removeClass('solid');
    }
  });
});

function callogin(){
  const element = document.getElementById("myNav");
  element.style.width = "100%";
}

function Navbar() {
  return (
    <div class="Head-div head-navbar">
      <div class="main-div">
        <div class="logo-div">
        <div class="img-container">
        <img class="logo-img" src="/img/white.png"></img>
        </div>
        
        </div>
          <div class="sec-div">
            <ul class="nav-list">
              <li class="nav-list-item">
                <div class="nav-list-item-div">

                <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>
                Home<ArrowDropDownRoundedIcon />
               </Link>

                </div>
              </li>
              <li class="nav-list-item">
                <div class="nav-list-item-div">

                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                About<ArrowDropDownRoundedIcon />
               </Link>

                </div>
              </li>
              <li class="nav-list-item">
                <div class="nav-list-item-div">

                <Link activeClass="active" to="directions" spy={true} smooth={true} duration={1000}>
                Directions<ArrowDropDownRoundedIcon />
               </Link>

                </div>
              </li>
              <li class="nav-list-item">
                <div class="nav-list-item-div">

                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                Contact<ArrowDropDownRoundedIcon />
               </Link>

                </div>
              </li>
              
            </ul>
         </div>
        
      </div>
      <div class="sign-div">
   
        {/* <div class="sign-content" onClick={callogin}>
        Sign-in
        <LockOpenIcon />
        </div> */}

      </div>
    </div>
  );
}

export default Navbar;
