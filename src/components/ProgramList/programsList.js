import React from 'react';
import ReactPaginate from 'react-paginate';
import ProgramItem from "../ProgramItem/programItem";

class ProgramsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageNum: 0,
            pageSize: 7
        }
    }

    render() {

        const offset = this.state.pageNum * this.state.pageSize;
        const nextPageOffset = offset + this.state.pageSize;
        const pageCount = Math.ceil(this.props.students.length / this.state.pageSize);
        const students = this.getProgramsPage(offset, nextPageOffset);

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

    getProgramsPage = (offset, nextPageOffset) => {

        return this.props.students
            .map((element, index) => {
                return <ProgramItem program={element} index={index} key={index} actionEdit={this.props.listActionEdited} actionDeleted={this.props.listActionDeleted}/>
            })
            .filter((student, index) => {
                return index >= offset && index < nextPageOffset;
            });
    };
}

export default ProgramsList;