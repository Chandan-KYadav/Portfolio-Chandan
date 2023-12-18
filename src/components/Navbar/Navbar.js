//import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-name">Chandan</div>
            </div>
            <div className="navbar-right">
                <div className="navbar-list">
                    <ul>
                        <Link spy={true} to='Navbar' activeClass='activeClass' smooth={true}>
                            <li>Home</li>
                        </Link>


                        <Link spy={true} to='Services' smooth={true} >
                            <li>Services</li>
                        </Link>


                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>


                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>


                        <Link spy={true} to='Testimonials' smooth={true}>
                            <li>Testimonials</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button navbar-btn">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;