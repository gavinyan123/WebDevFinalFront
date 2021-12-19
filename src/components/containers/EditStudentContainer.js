import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';
import { connect } from "react-redux";
import { EditStudentView } from "../views";

class EditStudentContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: "", 
            lastname: "", 
            email: "",
            imageUrl: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            gpa: "",
            campusId: null, 
            redirect: false, 
            redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            imageUrl: this.state.imageUrl,
            gpa: this.state.gpa,
            campusId: this.state.campusId
        };

        await this.props.editStudent(student);
        this.props.history.push(`/students/${student}`);
    }

    componentWillUnmount() {
        this.props.fetchStudent(this.props.match.params.id).then(({payload})=>{
            this.setState(payload);
        });
    }

    render() {
        return (
          <EditStudentView 
            firstname = {this.state.firstname}
            lastname = {this.state.lastname}
            email = {this.state.email}
            imageUrl = {this.state.imageUrl}
            gpa = {this.state.gpa}
            campusId = {this.state.campusId}
          />
        );
    }
}

const mapState = (state) => {
    return {campus:state.campus};
}

const mapDispatch = (dispatch) => {
    return({
        fetchStudent: (student) => dispatch(fetchStudentThunk(student)),
        editStudent: (student) => dispatch(editStudentThunk(student))
    })
}

EditStudentContainer.propTypes = {
    fetchCampus: PropTypes.func.isRequired,
    editCampus: PropTypes.func.isRequired,
  };

export default connect(mapState, mapDispatch)(EditStudentContainer);