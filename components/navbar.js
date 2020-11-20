import Link from 'next/link';
import React from 'react';
export default function Aoo () {
    return(
      <>
        <nav class="navbar  " role="navigation" aria-label="main navigation" >
  <div class="navbar-brand">
  


    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
       <Link href="/new"> Home</Link>
      </a>

     <a class="navbar-item">
        <Link href="/resume">Resume</Link>
      </a>

    </div>

    <a class="navbar-item is-justify-content-center" >
      <img src="rehan.gif" width="112" height="48"/>
    </a>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
      </>
    )
}