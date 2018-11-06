import React, { Component } from 'react';
import StudentItem from "./studentItem";

class StudentsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            this.props.students.map(
                (element, index) => {
                    return <StudentItem student={element} index={index} key={index} action={this.props.listAction}/>
                }
            )
        );
    }
}

export default StudentsList;