import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Footer from "./components/Footer";

// 2U Boot Camp Tutor Meg Meyers helped with conditional rendering the components.
function App() {
  const [pages] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <header>
        <Header>
          <Navigation
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Navigation>
        </Header>
      </header>
      <main className="components">
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
