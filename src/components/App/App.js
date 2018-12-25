import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Students from "../Students/Students";
import StudyPrograms from "../StudyPrograms/StudyPrograms";
import Switch from "react-router/es/Switch";


class App extends Component {

    render() {

        return (

               <BrowserRouter>
                   <Switch>
                       <Route component={Students} exact path={"/students"}/>
                       <Route component={StudyPrograms} exact path={"/programs"}/>
                       <Route render={() => (<Redirect to="/students" />)} path={"*"}/>
                   </Switch>
               </BrowserRouter>
        );
  }
}

export default App;
