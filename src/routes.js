import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Import all page components here
 */
import MainPage from './MainPage';
import Chap0 from './Chap0';
import Chap1 from './Chap1';




/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/cyberpunkcapital/' component={MainPage}></Route>

      <Route exact path='/cyberpunkcapital/chap-0' component={Chap0}></Route>
      <Route exact path='/cyberpunkcapital/chap-1' component={Chap1}></Route>

    </Switch>
  );
}

export default Main;