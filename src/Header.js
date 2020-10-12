import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" />
      </div>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* Logo */}
      </div>
      <div className="header_nav"></div>
    </div>
  );
}

export default Header;
