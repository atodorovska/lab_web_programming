import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import StudentItem from "./studentItem";

class StudentsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageNum: 0,
            pageSize: 5
        }

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    render() {

        // this is without pagination

        // return(
        //     <ul className={"list-group"}>
        //         {
        //             this.props.students.map(
        //             (element, index) => {
        //                 return <StudentItem student={element} index={index} key={index} actionSelected={this.props.listActionSelected} actionDeleted={this.props.listActionDeleted}/>
        //             })
        //         }
        //     </ul>
        // );

        const offset = this.state.pageNum * this.state.pageSize;
        const nextPageOffset = offset + this.state.pageSize;
        const pageCount = Math.ceil(this.props.students.length / this.state.pageSize);
        const students = this.getStudentsPage(offset, nextPageOffset);

        return (

            <div>

                {students}

                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination my-4 justify-content-center"}
                               activeClassName={"active"}
                />

            </div>

        );
    }

    handlePageClick = (data) => {

        let selected = data.selected;
        this.setState({pageNum: selected});
    };

    getStudentsPage = (offset, nextPageOffset) => {

        return this.props.students
            .map((element, index) => {
                return <StudentItem student={element} index={index} key={index} actionSelected={this.props.listActionSelected} actionDeleted={this.props.listActionDeleted}/>
            })
            .filter((student, index) => {
                return index >= offset && index < nextPageOffset;
            });
    };
}

export default StudentsList;