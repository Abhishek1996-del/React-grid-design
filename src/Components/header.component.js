import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header() {
    return (
        <>
            <header className="header">
                <div className='left'>
                    <div>
                        <a id="logo">EDYODA</a>
                        <p id="logo-stories-text">Stories</p>
                    </div>
                    <div className="categories">
                        <span id="dropdown-text">Explore Categories </span>
                        <span className="dropdown-img"><KeyboardArrowDownIcon/></span>
                    </div>
                </div>
                <div className='right'>
                    <p className="header-para">EdYoda is a learning and knowledge sharing platform for techies</p>
                    <button className="btn">Go To Main Website</button>
                </div>
            </header>
        </>
    )
}

export default Header;