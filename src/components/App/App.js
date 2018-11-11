import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {listStudents} from "../../repository/studentRepository";
import StudentsList from "../StudentList/studentsList";
import AddNewStudent from "../AddNewStudent/addNewStudent";
import EditStudentDetails from "../EditStudentDetails/editStudentDetails";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
          students : listStudents(),
          showEdit: false,
          showAdd: false,
          selectedIndex: -1,
          deleteIndex: -1
        }
    }

    formEditing = (index) => {

        this.setState({
            showEdit: true,
            selectedIndex: index
        })
    }

    deleteItemFromList = () => {

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

    listDelete = (index) => {
        this.setState({
            deleteIndex: index
        })

        this.deleteItemFromList();
    }

    listAdd = () => {

        this.setState({
            showAdd: true
        })
    }

    onEditFormSubmit = (student) => {

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

    onAddFormSubmit = (student) => {

        this.setState((state) => {

            let tmpStudents = state.students;
            tmpStudents.push(student);

            return {
                students : tmpStudents,
                showAdd: false
            }
        })
    }

    render() {
        return (
         <div>
           <StudentsList students={this.state.students} listActionSelected={this.formEditing} listActionDeleted={this.listDelete}/>
           <div className={"text-center my-5"}>
               <button onClick={this.listAdd} className={"btn btn-success"}>Add new student...</button>
           </div>
           <AddNewStudent show={this.state.showAdd} submitForm={this.onAddFormSubmit}/>
           <EditStudentDetails show={this.state.showEdit} submitForm={this.onEditFormSubmit}/>
         </div>
        );
  }
}

export default App;
