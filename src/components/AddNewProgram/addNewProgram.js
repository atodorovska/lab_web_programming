import React from 'react';

class AddNewProgram extends React.Component{

    submitTheForm = (formSubmitEvent) => {

        formSubmitEvent.preventDefault();
        this.props.submitForm(
            {
                name: formSubmitEvent.target.name.value
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
                            <input className={"form-control"} type="text" name={"name"} placeholder={"Name..."}/>
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

export default AddNewProgram;