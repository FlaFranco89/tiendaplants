import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainers/ItemListContainer.js';

function App() {
  return (
    <div>
      <NavBar />
      
      <ItemListContainer greeting="Proximamente Tienda Online" />
    </div>
  );
}

export default App;
