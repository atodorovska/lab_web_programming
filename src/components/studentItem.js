import React, { Component } from 'react';

class StudentItem extends React.Component{

    constructor(props){
        super(props);

        this.sendIndex = this.sendIndex.bind(this);
    }

    sendIndex(){
        this.props.action(this.props.index);
    }

    render(){

        return (

            <li className={"list-group-item list-group-item-action"} onClick={this.sendIndex}>
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