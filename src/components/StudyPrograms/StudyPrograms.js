import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProgramsList from "../ProgramList/programsList";
import AddNewProgram from "../AddNewProgram/addNewProgram";
import EditProgramDetails from "../EditProgramDetails/editProgramDetails";
import {addNewProgram, alterProgram, deleteProgramById, listPrograms} from "../../repository/studyProgramsRepository";

class StudyPrograms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            programs : [],
            showEdit: false,
            showAdd: false,
            editedIndex: -1
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {

        listPrograms()
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    programs: data
                })
            });
    };


    listAdd = () => {

        this.setState({
            showAdd: true
        })
    };

    onAddFormSubmit = (program) => {

        addNewProgram(program.name)
            .then(response => {
                    if(response.ok) console.log("Program was added successfully ", response.status);
                    else console.log("Program was not added successfully ", response.status);
                    this.loadData();
                }
            );

        this.setState({
            showAdd: false
        })

    };

    listDelete = (index) => {

        const id = this.state.programs[index].id;

        deleteProgramById(id).then(response => {
            if(response.ok) console.log("Program was deleted successfully ", response.status);
            else console.log("Program was not deleted successfully ", response.status);
            this.loadData();
        });
    };

    formEditing = (index) => {

        this.setState({
            showEdit: true,
            editedIndex: index
        })
    };


    onEditFormSubmit = (program) => {

        const id = this.state.programs[this.state.editedIndex].id;

        alterProgram(id, program.name)
            .then(response => {
                    if(response.ok) console.log("Program was altered successfully ", response.status);
                    else console.log("Program was not altered successfully ", response.status);
                    this.loadData();
                }
            );

        this.setState({
            showEdit: false,
            editedIndex: -1
        })

    };

    render() {

        return (
            <div>
                <ProgramsList students={this.state.programs} listActionEdited={this.formEditing} listActionDeleted={this.listDelete}/>
                <div className={"text-center my-5"}>
                    <button onClick={this.listAdd} className={"btn"}>Add new program...</button>
                </div>
                <AddNewProgram show={this.state.showAdd} submitForm={this.onAddFormSubmit}/>
                <EditProgramDetails show={this.state.showEdit} submitForm={this.onEditFormSubmit}/>
            </div>
        );
    }
}

export default StudyPrograms;
