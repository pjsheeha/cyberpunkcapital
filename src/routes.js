import React from 'react';
import {
  HashRouter as Router,
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
import Chap2 from './Chap2';
import Chap3 from './Chap3';
import Chap4 from './Chap4';




/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

const Main = () => {
  console.log(process.env.PUBLIC_URL);
  return (
      <div>
          <Router basename={process.env.PUBLIC_URL}>

    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
    <Route  path='/chap-0' ><Chap0/></Route>
      <Route  path='/chap-1' ><Chap1/></Route> 
      <Route  path='/chap-2' ><Chap2/></Route> 
      <Route  path='/chap-3' ><Chap3/></Route> 
      <Route  path='/chap-4' ><Chap4/></Route> 

      <Route  path='/' ><MainPage/></Route>


    </Switch>
    </Router>
    </div>

  );
}

export default Main;