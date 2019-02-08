import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
class App extends React.Component {
  handleTitleClicked() {
    alert("you clicked on a title");
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClicked}>Adopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Petter" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    )
    ;
  }
}

//export default App;

render(<App />), document.getElementById("root");
