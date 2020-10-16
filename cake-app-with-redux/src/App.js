import React from 'react';
import store from './redux/cake/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />

        <ItemContainer cake />
        <ItemContainer />

        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
