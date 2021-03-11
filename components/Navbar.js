import React, { Component } from 'react'
function  Navbarco() {
        return(
            <div className="header-top">
    <div className="navbar">
    <input type="checkbox" id="menu-toggle"></input>
      <div className="container">
    <div className="header">
        <label className="hamburger-menu" for="menu-toggle">
            <span></span>
        </label>
        <a href="#" id="logos" className="logo">
            keikei
        </a>
        <div className="actions">
        <i class="fas fa-search"></i>
        </div>
        <label for="menu-toggle" className="backdrop"></label>
    </div>
</div>

<nav className="menu">
    <ul>
        <li>
            <a href="#">KEİKEİ</a>
        </li>
        <li>
            <a href="#">KEİKEİ</a>
        </li>
        <li>
            <a href="#">KEİKEİ</a>
        </li>
        <li>
            <a href="#">KEİKEİ</a>
        </li>
        <li>
            <a href="#">KEİKEİ</a>
        </li>
    </ul>
</nav>
    </div>
    </div>
        )
}
export default Navbarco