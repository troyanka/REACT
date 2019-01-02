import React, { Component, PureComponent} from 'react';
import './App.css';
{/* 
  Pure component::: 
  setTimeout => rendering happens in blind way. Some of the updates are not
  needed, and pure components come to fix it. 2 ways to do It:
  1. Just before component renders we have a hook ShouldComponentUpdate, 
     there we can make decision to make update or not based on the state values.
  2.Better way: using pure components. (Import it from react + extends PureComponent and not component).
    Don`t use pure component anyway, It is dangerous. If we have big state with nested components, Pure component does Shallow compare.
    Shallow compare just compares the objects, so reference. So current and previous state have to have same reference to it
    think that is hasn't change. But if you have a large tree, and something in the inner leaf will be changed shallow compare won`t
    be aware of it. It wont render it and all the child components also won`t be rendered. 

*/}

const Temp = (props) =>{
   console.log('rendered Temp');
   return (<div>{props.val}</div>);
}

class App extends PureComponent {

  state = {
    val: 1
  }

  componentDidMount(){
    setInterval(() => {
      this.setState(()=> {
          return {val: 1}
          //return {val: Math.random()}
      })
    }, 2000);
  }

  /*If we use pure compontent we dont need this hook,
   we will make the decision on another place.*/
  // shouldComponentUpdate(nextProp, nextState){
  //   console.log("nextState", nextState);
  //   console.log("current state", this.state.val);
  //   return (this.state.val === nextState.val ? false : true)
  // }

  render() {
    console.log('rendered App');
    return (
      <div className="App">
        <Temp val={this.state.val}></Temp>
      </div>
    );
  }
}

export default App;
