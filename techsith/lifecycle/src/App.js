import React, { Component } from 'react';
import Child from './child';
import './App.css';

class App extends Component {

  // state = {
  //   name: 'peter'
  // }

  //Here we set initial state
  constructor(){
    super();
    this.state = {
      name: "john"
    }
    console.log('contractor');
  }

  /*
  componentWillMount:::
  1.Change the state here. Why? Sometimes we will
    change the state based on the recieved props. Here the 
    component is not rendered yet, so if we update the state the 
    component won`t have to render itself once again.
  2.Work with global events window, document
  3.*This is the only hook that will do server rendering*/
  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentWillMount');
  }

  /*
  componentDidMount:::
  1.It runs afrer all the child components finished theire initial lifecycle
  2.Here we can make AJAX call
  3.Make subscription
  4.We can setState, BUT when we do it, it will re-render the component
  */
  componentDidMount(){
    console.log('componentDidMount');
  }

  handleClick = () => {
    console.log('handleClick clicked');
    this.setState( {name: 'vika'} );
  }

  handleUnmountChild = () =>{
    console.log('handleUnmountChild clicked');
    this.setState( {name:'robert' });
  }

  /*
  componentWillReceiveProps:::
  Dont try to change any props here
  */
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }

  /*
  shouldComponentUpdate:::
   1.We have to return true/false
   2.We have 2 arguments we can get: nextprops, nextstate - according to those we can make the decision
   3.If you make a change in props/state this hook will run and make a desicion whether it should be updated
     BUT if it happens because orce update method, this method won`t run
  */
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate = true");
    return true;
  }


  /*
  componentWillUpdate:::
  1.Set variables based on the state/props (they are available already)
  2.Dont setState here. If you do so, another components will be update and it wil be infiniate loop.
  */
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }

   /*
    componentDidUpdate:::
    1.If we want add third part UI elements we do it here
  */
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
  }

  /*
  componentWillUnmount:::

  */
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  /*
  render:::
  1.Dont setState from render. It is called every time the state is changed.
    so if you do so it the component will be rendered twice.
    Each render also causes the sub-components to be rendered.
  */ 
  render() {
    console.log('rendered');
  if(this.state.name === 'robert') {return <div></div>};
    return (
      <div className="App">
        Name: {this.state.name} <br/><br/>
        {/* we have to reload the page to see it */}
        Inner Width: {this.state.innerWidth}

        <Child name={this.state.name}></Child>

        <button onClick={this.handleClick}>Change the state</button>
        <button onClick={this.handleUnmountChild}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
