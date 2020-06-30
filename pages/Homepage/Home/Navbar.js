import React from 'react'
const logo = require('../../../Assets/Images/TruckBook-Logo.png')


function Navbar(){
    return(
        <div>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />

            <nav class="navbar navbar-expand-lg ">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <img src={logo} className="home-truckbook-logo" alt="truckbook" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="side  navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a className="navbar-nav-names   nav-link" href="/login">Login  |   </a>
                        </li>
                        <li class="nav-item">
                            <a className="navbar-nav-names   nav-link" href="/signup">Sign Up   |   </a>
                        </li>
                        <li class="nav-item">
                            <a className="navbar-nav-names  nav-link" href="/contactus">Contact Us     |    </a>
                        </li>
                        <li class="nav-item">
                            <a className="navbar-nav-names  nav-link" href="/blog">Blog  |  </a>
                        </li>
                        <li class="nav-item">
                            <a className="navbar-nav-names  nav-link" href="/faq">FAQ</a>
                        </li>
                        
                        </ul>
                    </div>
                </nav>
        </div>

    )
}

export default Navbar