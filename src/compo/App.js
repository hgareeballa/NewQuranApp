import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import HeaderPage from './HeaderPage';
import AppMain from './AppMain';
import LoadingPage from './LoadingPage';
import SuraPage from './SuraPage';
import PageNotFound from './PageNotFound';
import { myFunction } from '../data/loadQuranXML';

import myxml from '../data/quran.xml';

import { QuranContext } from '../QuranContext';

let suraArray = [];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(setLoading);
    console.log("Runing from App !");
  }, []);

  return (
    <div>
      {loading ? (<LoadingPage />) : (
        <Router>
          <HeaderPage />
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <QuranContext.Provider value={suraArray}>
                <Switch>
                  <Route exact path="/" component={AppMain} />
                  <Route path="/sura" component={SuraPage} />
                  <Route component={PageNotFound} />
                </Switch>
              </QuranContext.Provider>
            </div>
          </div>
        </Router>
      )}
    </div>
  )
}
export default App;

function fetchData(setLoading) {
  console.log(">>> NEW NEW ARRAY>>>:");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      suraArray = myFunction(this);
      setLoading(false);
    }
  };
  xhttp.open("GET", myxml, true);
  xhttp.send();
}

