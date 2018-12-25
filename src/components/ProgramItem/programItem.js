import React from 'react';

class ProgramItem extends React.Component{

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
                        {this.props.program.name}
                    </div>
                    <div className={"col-md-1"}>
                        {this.props.program.lastName}
                    </div>
                    <button className={"btn col-md-1 ml-4"} onClick={this.editItemIndex}>Change</button>
                    <button className={"btn col-md-1 ml-4"} onClick={this.deleteItemIndex}>Delete</button>
                </div>
            </li>

        );
    }
}

export default ProgramItem;