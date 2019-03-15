// Stopped at 2.59
import React from "react";
import {render} from 'react-dom';
import Results from './Results';


class App extends React.Component {
  render() { 
    return ( 
      <div>
        <h1>Adopt me!</h1>
        <Results/>
      </div>
     );
  }
}
 
export default App;

render(React.createElement(App), document.getElementById('root'));