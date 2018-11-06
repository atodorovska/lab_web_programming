import React, { Component } from 'react';

class StudentItem extends React.Component{

    constructor(props){
        super(props);

        this.selectedItemIndex = this.selectedItemIndex.bind(this);
        this.deleteItemIndex = this.deleteItemIndex.bind(this);
    }

    selectedItemIndex(){
        this.props.actionSelected(this.props.index);
    }

    deleteItemIndex(){
        this.props.actionDeleted(this.props.index);
    }

    render(){

        return (

            <li className={"list-group-item list-group-item-action"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-md-1"}>
                        {this.props.student.name}
                    </div>
                    <div className={"col-md-1"}>
                        {this.props.student.surname}
                    </div>
                    <button className={"btn btn-success col-md-1 ml-4"} onClick={this.selectedItemIndex}>Change</button>
                    <button className={"btn btn-success col-md-1 ml-4"} onClick={this.deleteItemIndex}>Delete</button>
                </div>
            </li>


        );
    }
}

export default StudentItem;