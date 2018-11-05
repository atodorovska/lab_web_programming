import React, { Component } from 'react';

class StudentItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.student);

        return (

            <li className={"list-group-item"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-md-1"}>
                        {this.props.student.name}
                    </div>
                    <div className={"col-md-1"}>
                        {this.props.student.surname}
                    </div>
                </div>
            </li>

        );
    }
}

export default StudentItem;