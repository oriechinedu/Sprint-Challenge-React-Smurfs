import React, { Component } from 'react';
import styled from 'styled-components'

import Smurf from './Smurf';


const SmuffWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }
  h1 {
    font-size: 2rem;
    padding-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    max-width: max-content;
    text-align: center;
    &:after {
      position: absolute;
      content: '';
      height: 3px;
      background: orange;
      width: 30%;
      bottom: 0;
      left: 0;
    }
  }
`
class Smurfs extends Component {

  render() {
    return (
      <SmuffWrapper>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </SmuffWrapper>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
