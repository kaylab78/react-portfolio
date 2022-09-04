import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
