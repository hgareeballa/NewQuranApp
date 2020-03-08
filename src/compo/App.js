import React from 'react';
import { Route, Switch } from "react-router-dom";
import HeaderPage from './HeaderPage';
import AppMain from './AppMain';
import PageNotFound from './PageNotFound';
import SuraPage from './SuraPage';

// import myxml from './data/quran.xml';
// import LoadingPage from './LoadingPage';
// import SuraSearch from './SuraSearch';
// import SuraGrid from './SuraGrid';


function App() {
  return (
    <div>
      <HeaderPage />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <Switch>
            <Route exact path="/" component={AppMain} />
            {/* <Route path="/about" component={AboutPage} />*/}
            <Route path="/sura" component={SuraPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  )
}
export default App;
