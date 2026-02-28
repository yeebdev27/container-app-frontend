import React from "react";
import './Style.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <a href="#" className="logo">News<span>App</span></a>

                <div className="menu-wrap" id="menuWrap">
                    <ul className="menu">
                    <li><a href="#" className="active">Latest</a></li>
                    <li><a href="#">Topic</a></li>
                    <li><a href="#">Journal</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar