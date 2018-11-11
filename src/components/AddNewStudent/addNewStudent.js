import React, { Component } from 'react';

class AddNewStudent extends React.Component{

    constructor(props) {
        super(props);
    }

    submitTheForm = (formSubmitEvent) => {

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
            <div className={"m-5"}>
                <form onSubmit={this.submitTheForm}>
                    <div className={"form-row"}>
                        <div className={"col-md-3"}>
                            <input className={"form-control"} type="text" name={"studentName"} placeholder={"Name..."}/>
                        </div>

                        <div className={"col-md-3"}>
                            <input className={"form-control"} type="text" name={"studentSurname"} placeholder={"Surname..."}/>
                        </div>

                        <div className={"col-md-3"}>
                            <input className={"form-control"} type="text" name={"studentIndex"} placeholder={"Index..."}/>
                        </div>

                        <div className={"col-md-2"}>
                            <input className={"form-control"} type="text" name={"studentStudies"} placeholder={"Studies..."}/>
                        </div>

                        <div className={"col-md-1"}>
                            <button className={"btn btn-success"} type={"submit"}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddNewStudent;