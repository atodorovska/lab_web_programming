import React from 'react';

class StudentDetails extends React.Component{

    closeDetails = () => {
        this.props.close();
    };

    render(){

        if(!this.props.show) return null;

        return (

            <div className={"row justify-content-center"}>
                <div className={"col-md-1"}>
                    {this.props.students[this.props.index].name}
                </div>
                <div className={"col-md-1"}>
                    {this.props.students[this.props.index].lastName}
                </div>
                <div className={"col-md-1"}>
                    {this.props.students[this.props.index].index}
                </div>
                <div className={"col-md-1"}>
                    {this.props.program.name}
                </div>
                <button className={"btn btn-success col-md-1 ml-4"} onClick={this.closeDetails}>Close</button>
            </div>

        );
    }
}

export default StudentDetails;