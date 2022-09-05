import React from "react";

function Header(props) {
  return (
    <div>
    <h2>
      <a href="/">Kayla Backus</a>
    </h2>
    {props.children}
    </div>
  );
}

export default Header;
