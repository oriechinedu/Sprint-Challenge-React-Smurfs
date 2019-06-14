import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


const API_BASE_URL = 'http://localhost:3333/smurfs'

const FormWrapper = styled.form`
width: 100%;
margin: 10rem auto;
form {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  > * {
    margin-bottom: .8rem;
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
    &:hover{
      background: #fff;
      color: black;
    }
  }
}
`
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  addSmurf = async (event) => {
    event.preventDefault();
    // add code to create the smurf using the api
   try {
     const { data } = await axios.post(API_BASE_URL, this.state)
     if (data) {
       console.log(data)
     }
   } catch (error) {
     console.log(error)
   }
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </FormWrapper>
    );
  }
}

export default SmurfForm;
