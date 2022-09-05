import React from "react";

function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  // Reference: 2U Boot Camp Tutor Meg Meyers
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
