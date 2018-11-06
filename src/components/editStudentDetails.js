import React, { Component } from 'react';

class EditStudentDetails extends React.Component{

    constructor(props) {
        super(props);

        this.submitTheForm = this.submitTheForm.bind(this);
    }

    submitTheForm(formSubmitEvent){

        formSubmitEvent.preventDefault();
        this.props.submitForm(
            {
                name: formSubmitEvent.target.studentName.value,
                surname: formSubmitEvent.target.studentSurname.value,
                index: formSubmitEvent.target.studentIndex.value,
                studies: formSubmitEvent.target.studentStudies.value
            }
        );
    }

    render(){
        if(!this.props.show) return null;

        return(
            <form onSubmit={this.submitTheForm}>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <input type="text" name={"studentName"} placeholder={"Name..."}/>
                    </div>

                    <div className={"col-3"}>
                        <input type="text" name={"studentSurname"} placeholder={"Surname..."}/>
                    </div>

                    <div className={"col-3"}>
                        <input type="text" name={"studentIndex"} placeholder={"Index..."}/>
                    </div>

                    <div className={"col-3"}>
                        <input type="text" name={"studentStudies"} placeholder={"Studies..."}/>
                    </div>
                </div>
                <div className={"row justify-content-center"}>
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
        );
    }

}

export default EditStudentDetails;