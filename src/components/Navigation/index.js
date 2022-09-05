import React from "react";

function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <nav>
      <ul>
        {pages.map((Page) => (
          <li className={`${currentPage.name === Page.name && "highlight"}`} key={Page.name}>
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
