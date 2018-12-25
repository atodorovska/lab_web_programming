import React from 'react';

class EditStudentDetails extends React.Component{

    submitTheForm = (formSubmitEvent) => {

        formSubmitEvent.preventDefault();
        this.props.submitForm(
            {
                name: formSubmitEvent.target.studentName.value,
                surname: formSubmitEvent.target.studentSurname.value,
                studies: formSubmitEvent.target.studentStudies.value
            }
        );
    };

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

                        <div className={"col-md-2"}>
                            <select className={"form-control"} name={"studentStudies"} placeholder={"Studies..."}>
                                <option value={"KNI"}>KNI</option>
                                <option value={"KNIA"}>KNIA</option>
                                <option value={"PET"}>PET</option>
                                <option value={"MT"}>MT</option>
                                <option value={"IKI"}>IKI</option>
                            </select>
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

export default EditStudentDetails;