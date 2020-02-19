import React from 'react';
import Pet from './components/Pet';

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt me</h1>
      <Pet name="Luna" animal="dog" dreed="Havanese"/>
      <Pet name="Pepper" animal="bird" dreed="Cockatiel"/>
      <Pet name="Doink" animal="cat" dreed="mixed"/>
    </div>
  );
}

export default App;
