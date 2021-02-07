import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

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
      <div>
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
    <Route  path='/cyberpunkcapital/chap-0' ><Chap0/></Route>
      <Route  path='/cyberpunkcapital/chap-1' ><Chap1/></Route> 
      <Route  path='/' ><MainPage/></Route>


    </Switch>
    </div>

  );
}

export default Main;