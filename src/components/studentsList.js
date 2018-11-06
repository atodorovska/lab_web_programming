import React, { Component } from 'react';
import StudentItem from "./studentItem";

class StudentsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <ul className={"list-group"}>
                {
                    this.props.students.map(
                    (element, index) => {
                        return <StudentItem student={element} index={index} key={index} actionSelected={this.props.listActionSelected} actionDeleted={this.props.listActionDeleted}/>
                    })
                }
            </ul>
        );
    }
}

export default StudentsList;