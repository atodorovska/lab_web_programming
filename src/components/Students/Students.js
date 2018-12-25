import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentsList from "../StudentList/studentsList";
import AddNewStudent from "../AddNewStudent/addNewStudent";
import EditStudentDetails from "../EditStudentDetails/editStudentDetails";
import {
    addNewStudent, alterStudent,
    deleteStudentById,
    getStudyProgramByStudent,
    listStudents
} from "../../repository/studentRepository";
import StudentDetails from "../StudentDetails/studentDetails";

class Students extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students : [],
            showEdit: false,
            showAdd: false,
            showDetails: false,
            selectedIndex: -1,
            editedIndex: -1,
            studyProgram: null
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {

        listStudents()
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    students: data
                })
            });
    };

    formEditing = (index) => {

        this.setState({
            showEdit: true,
            editedIndex: index
        })
    };



    listDelete = (index) => {

        const id = this.state.students[index].index;

        deleteStudentById(id).then(response => {
            if(response.ok) console.log("Student was deleted successfully ", response.status);
            else console.log("Student was not deleted successfully ", response.status);
            this.loadData();
        });
    };

    listAdd = () => {

        this.setState({
            showAdd: true
        })
    };

    onEditFormSubmit = (student) => {

        const index = this.state.students[this.state.editedIndex].index;

        alterStudent(index, student.name, student.surname, student.studies)
            .then(response => {
                    if(response.ok) console.log("Student was altered successfully ", response.status);
                    else console.log("Student was not altered successfully ", response.status);
                    this.loadData();
                }
            );

        this.setState({
            showEdit: false,
            editedIndex: -1
        })

    };

    onAddFormSubmit = (student) => {

        addNewStudent(student.index, student.name, student.surname, student.studies)
            .then(response => {
                    if(response.ok) console.log("Student was added successfully ", response.status);
                    else console.log("Student was not added successfully ", response.status);
                    this.loadData();
                }
            );

        this.setState({
            showAdd: false
        })

    };

    listSelected = (index) => {

        const program = this.state.students[index].studyProgram;

        getStudyProgramByStudent(program)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    studyProgram: data,
                    selectedIndex: index,
                    showDetails: true
                })
            });

    };

    closeDetails = () => {

        this.setState({
            showDetails: false,
            selectedIndex: -1
        })
    };

    render() {

        return (
            <div>
                <StudentsList students={this.state.students} listActionEdited={this.formEditing} listActionSelected={this.listSelected} listActionDeleted={this.listDelete}/>
                <div className={"text-center my-5"}>
                    <button onClick={this.listAdd} className={"btn"}>Add new student...</button>
                </div>
                <AddNewStudent show={this.state.showAdd} submitForm={this.onAddFormSubmit}/>
                <EditStudentDetails show={this.state.showEdit} submitForm={this.onEditFormSubmit}/>
                <StudentDetails close={this.closeDetails} program={this.state.studyProgram} show={this.state.showDetails} index={this.state.selectedIndex} students={this.state.students}/>
            </div>
        );
    }
}

export default Students;
