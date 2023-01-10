import React from "react";
import "./Navbar.css";
const Navbar = () => {

  var nav = document.getElementById('site-menu');
  var header = document.getElementById('top');

  window.addEventListener('scroll', function() {
    if (window.scrollY >=400) {
      nav.classList.add('nav-sticky');
      header.classList.add('pt-scroll');
    } else {
      nav.classList.remove('nav-sticky');
      header.classList.remove('pt-scroll');
    }
  });

  const navToggle = () => {
      var btn = document.getElementById('menuBtn');
      var nav = document.getElementById('menu');

      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
  }
    
    return (
        <>
           <header id="top" class="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
            <nav id="site-menu" class="bg-slate-300 flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900">
                <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                <a href="#" class="no-underline py-1"><h1 class="font-bold text-lg tracking-widest">LOGO</h1></a>
                <button id="menuBtn" class="hamburger block sm:hidden focus:outline-none" type="button" onClick={navToggle}>
                    <span class="hamburger__top-bun"></span><span class="hamburger__bottom-bun"></span>
                </button>
                </div>
                <div id="menu" class="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
                <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#">About</a>
                <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#">Features</a>
                </div>
            </nav>
           </header>
        </>
    )
}

export default Navbar