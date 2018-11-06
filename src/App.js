import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StudentsList from "./components/studentsList"
import {listStudents} from "./repository/studentRepository";
import EditStudentDetails from "./components/editStudentDetails";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
          students : listStudents(),
          showEdit: false,
          selectedIndex: -1
        }

        this.notifyClicked = this.notifyClicked.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    notifyClicked(index){

        this.setState({
            showEdit: true,
            selectedIndex: index
        })
    }

    onFormSubmit(student){

        this.setState((state) => {

            let tmpStudents = state.students;
            tmpStudents[state.selectedIndex] = student;

            return {
                students : tmpStudents,
                showEdit: false,
                selectedIndex: -1
            }
        })
    }

    render() {
        return (
         <div>
           <StudentsList students={this.state.students} listAction={this.notifyClicked}/>
           <EditStudentDetails show={this.state.showEdit} submitForm={this.onFormSubmit}/>
         </div>
        );
  }
}

export default App;
