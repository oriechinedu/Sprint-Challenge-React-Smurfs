import React from 'react';
import styled from 'styled-components'

const SmuffWrapper = styled.div`
  width: 200px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  > * {
    line-height: 1.5;
  }
 h3 {
   font-weight: bold;
   font-size: 1.8rem;
 }
 strong, p {
   font-size: 1.4rem;
 }
`
const Smurf = props => {
  return (
    <SmuffWrapper>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmuffWrapper>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

