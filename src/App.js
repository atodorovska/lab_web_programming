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
          selectedIndex: -1,
          deleteIndex: -1
        }

        this.formEditing = this.formEditing.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.listDelete = this.listDelete.bind(this);
        this.deleteItemFromList = this.deleteItemFromList.bind(this);
    }

    formEditing(index){

        this.setState({
            showEdit: true,
            selectedIndex: index
        })
    }

    deleteItemFromList(){

        this.setState((state) => {

            let tmpStudents = state.students;
            delete tmpStudents[state.deleteIndex];

            return {
                students : tmpStudents,
                showEdit: false,
                deleteIndex: -1
            }
        })

    }

    listDelete(index){
        this.setState({
            deleteIndex: index
        })

        this.deleteItemFromList();
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
           <StudentsList students={this.state.students} listActionSelected={this.formEditing} listActionDeleted={this.listDelete}/>
           <EditStudentDetails show={this.state.showEdit} submitForm={this.onFormSubmit}/>
         </div>
        );
  }
}

export default App;
