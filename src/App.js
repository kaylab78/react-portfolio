import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
