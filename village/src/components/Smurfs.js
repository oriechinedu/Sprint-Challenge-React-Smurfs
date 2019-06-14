import React, { Component } from 'react';
import styled from 'styled-components'

import Smurf from './Smurf';

const SmuffWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
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
      background: green;
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
