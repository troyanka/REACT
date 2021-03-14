import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { BuyingPageContainer } from './components/BuyingPageContainer/BuyingPageContainer';
import { MainPageContainer } from './components/MainPageContainer/MainPageContainer';
import { ErrorPageContainer } from './components/ErrorPageContainer/ErrorPageContainer';
import { ReceivedListContainer } from './components/ReceivedListContainer/ReceivedList';
import { useSelector } from 'react-redux';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

function App() {

  const isError = useSelector(({ shoppingListReducer }) => shoppingListReducer.isError);
  const isLoading = useSelector(({ shoppingListReducer }) => shoppingListReducer.isLoading);

  return (
    <div className="App">
      <Header />
      {isError && <ErrorMessage messageText='Important note: converting currencies is not working now.' />}
      {isLoading && <div>Loading...</div>}
      <Switch>
        <Route path="/" component={MainPageContainer} exact />
        <Route path='/list' component={BuyingPageContainer} />
        <Route path='/received' component={ReceivedListContainer} />
        <Route component={ErrorPageContainer} />
      </Switch>
    </div>
  );
}

export default App;