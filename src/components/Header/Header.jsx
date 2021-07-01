import React from "react";
import "./Header.css"

const Header = ({headerExpanded, header}) => {
    const headerImageSize = headerExpanded ? "head-image-expanded" : "head-image-contracted";
    const headerTextSize = headerExpanded ? "head-text-expanded" : "head-text-contracted";

    return (
        <div className="head-container">
            <img 
                className={`head-image ${headerImageSize}`}
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
                alt="header_img" />
            <h1 
                className={`head-text ${headerTextSize}`}
            >{header}</h1>
        </div>
    )
}

export default Header;