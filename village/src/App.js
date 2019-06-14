import React, { Component } from "react";
import axios from "axios";
import { Route } from 'react-router-dom'
import  AppWrapper from "./AppStyle.js";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import GlobalStyle from "./components/styled/GlobalStyle";
import Header from './components/Header'

const API_BASE_URL = 'http://localhost:3333/smurfs'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      isLoading: false,
      error: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    this.getSmurfs()
  }

  getSmurfs  = async () => {
    this.setState({isLoading: true})
    try {
      const { data } = await axios.get(API_BASE_URL);
      if (data) {
        this.setState({smurfs: data })
      }
    } catch (error) {
      this.setState({error: error.message})
    } finally {
      this.setState({isLoading: false})
    }
  }
  updateState = () => {
    this.getSmurfs()
  }
  deleteSmurf = (id) => {
    axios.delete(`${API_BASE_URL}/${id}`)
    .then(res => {
      this.setState({smurfs: res.data})
    })
    .catch(err => {
      console.log(err.message)
    }) 
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppWrapper>
        <Header />
          {this.state.error && <p style={{ color: 'red'}}>{this.state.error}</p>}
          <Route exact path="/" render={props => <Smurfs  {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} /> } />
          <Route path="/smurf-form" render={props => <SmurfForm update={this.updateState}  {...props}/>} />
        </AppWrapper>
      </React.Fragment>
    );
  }
}

export default App;
