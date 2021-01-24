import React from 'react';
function Navbar(){
    
    function openNav(){
        document.getElementById('navbar').style.display = "flex"
        document.getElementById('navbar').classList.remove('closeNav');
        setTimeout(() => {
            document.getElementById('navbar').classList.add('open');
        },50)

    }
    
    function closeNav(){
        document.getElementById('navbar').classList.remove('open');
        document.getElementById('navbar').classList.add('closeNav');
        setTimeout(() => {
            document.getElementById('navbar').style.display = "none"
        },1000)
    }



    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <a href="" className="nav-items text-light">About Us</a>
                    <a href="" className="nav-items text-light">Schedule</a>
                    <a href="" className="navbar-brand">Techxter</a>
                    <a href="" className="nav-items text-light">FAQ</a>
                    <a href="" className="nav-items text-light">Contact</a>
                <button className="btn btn-lg d-lg-none d-md-none" id="navbarToggler" onClick={openNav}>
                   <i className="fas fa-bars text-light"></i>
                </button>
                </div>
            </nav>

            {/* Mobile view Navbar */}
            <ul className="navbar-nav justCenter" style={{display:"none"}} id="navbar">
                <button className="btn closeNavBtn" onClick={closeNav}>
                    <i className="fas fa-times text-light"></i>
                </button>
                <li className="nav-item">
                    About
                </li>
                <li className="nav-item">
                    Schedule
                </li>
                <li className="nav-item">
                    FAQ
                </li>
                <li className="nav-item">
                    Contact
                </li>
            </ul>

        </>
    )
}

export default Navbar;