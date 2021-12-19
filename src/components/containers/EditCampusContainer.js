import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';
import { connect } from "react-redux";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          address: "", 
          description: "",
          imageUrl: "https://www.brooklyn.cuny.edu/web/abo_misc/200304_Campus_Aerial_738x330.jpg",
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        let campus = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            address: this.state.address,
            description: this.state.description
        };
        await this.props.editCampus(campus);
        this.props.history.push(`/campuses/${campus}`);
    }

    componentWillUnmount() {
        this.props.fetchCampus(this.props.match.params.id).then(({payload})=>{
            this.setState(payload);
        });
    }

    render() {
        return (
          <EditCampusView 
            name = {this.state.name}
            address = {this.state.address}
            description = {this.state.description}
            imageUrl = {this.state.imageUrl}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapState = (state) => {
    return {campus:state.campus};
}

const mapDispatch = (dispatch) => {
    return({
        fetchCampus: (campus) => dispatch(fetchCampusThunk(campus)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    })
}

EditCampusContainer.propTypes = {
    fetchCampus: PropTypes.func.isRequired,
    editCampus: PropTypes.func.isRequired,
  };

export default connect(mapState, mapDispatch)(EditCampusContainer);