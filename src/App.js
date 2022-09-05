import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <header>
        <Header>        
          <Navigation
          pages={pages}
          setCurrentPage = {setCurrentPage}
          currentPage={currentPage}
          ></Navigation>
        </Header>
      </header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
