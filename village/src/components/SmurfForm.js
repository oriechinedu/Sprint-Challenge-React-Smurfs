import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const API_BASE_URL = "http://localhost:3333/smurfs";

const FormWrapper = styled.div`
  width: 100%;
  margin: 10rem auto;
  form {
    width: 400px;
    @media (max-width: 500px) {
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 2rem;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
    box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
    > * {
      margin-bottom: 0.8rem;
      padding: 0.8rem;
      font-size: 1.4rem;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    > *:last-child {
      margin-top: 1rem;
      cursor: pointer;
      background: #ccc;
      color: white;
      &:hover {
        background: #fff;
        color: black;
      }
    }
  }
`;
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSurf = { ...this.state.form };
    console.log(newSurf);

    axios.post(API_BASE_URL, newSurf)
    .then(data => {
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err.message)
    }) 
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    const targetName = e.target.name;
    const targetVale = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      form : {
        ...prevState.form,
        [targetName]: targetVale 
      }
    }));
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.form.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.form.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.form.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </FormWrapper>
    );
  }
}

export default SmurfForm;
