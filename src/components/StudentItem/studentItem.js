import React from 'react';

class StudentItem extends React.Component{

    selectedItemIndex = () => {
        this.props.actionSelected(this.props.index);
    };

    deleteItemIndex = () => {
        this.props.actionDeleted(this.props.index);
    };

    editItemIndex = () => {
        this.props.actionEdit(this.props.index);
    };

    render(){

        return (

            <li className={"list-group-item list-group-item-action"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-md-1"}>
                        {this.props.student.name}
                    </div>
                    <div className={"col-md-1"}>
                        {this.props.student.lastName}
                    </div>
                    <button className={"btn col-md-1 ml-4"} onClick={this.selectedItemIndex}>Details</button>
                    <button className={"btn col-md-1 ml-4"} onClick={this.editItemIndex}>Change</button>
                    <button className={"btn col-md-1 ml-4"} onClick={this.deleteItemIndex}>Delete</button>
                </div>
            </li>


        );
    }
}

export default StudentItem;