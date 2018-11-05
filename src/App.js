import React, { Component } from 'react';
import './App.css';
import StudentsList from "./components/studentsList"
import {listStudents} from "./repository/studentRepository";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          students : listStudents()
        }
    }


    render() {
    return (
     <div>
       <StudentsList students={this.state.students}/>
     </div>
    );
  }
}

export default App;
