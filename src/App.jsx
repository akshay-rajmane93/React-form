import React from 'react';
import Main from './Main';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route,BrowserRouter} from 'react-router-dom';



function App() {

  return (
    <div className="app">
    <BrowserRouter >
    <Route exact path="/" component={Main}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
