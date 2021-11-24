import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './containers/ItemListContainers/ItemListContainer.js';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <ItemListContainer greeting="Proximamente Tienda Online" />
      </section>
    </div>
  );
}

export default App;
