import React from 'react';
import './App.css';
import '../src/Components/header.component';
import '../src/Components/catagories.component';
import '../src/Components/card.component';
import Header from '../src/Components/header.component';
import Categories from '../src/Components/catagories.component';
import Card from '../src/Components/card.component';

function App() {
  return (
    <>
      <Header></Header>
      <div className='body'>
        <Categories></Categories>
        <div className="main-body">
          <Card></Card>
        </div>
      </div>
      <footer>
        </footer>
    </>
  );
}

export default App;
