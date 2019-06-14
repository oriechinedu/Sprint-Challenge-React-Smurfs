import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  width: 100%;
  background: black;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 10rem;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 500px) {
      padding: 0 0.8rem;
      justify-content: space-between;
    }
  }
`
const CustomNavLink = styled(NavLink)`
  padding: 0 2rem;
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
  &.active, &:hover {
    text-decoration: underline;
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <nav>
        <CustomNavLink  exact to='/'>Smurfs</CustomNavLink>
        <CustomNavLink to='/smurf-form'>Add Smurf</CustomNavLink>
      </nav>
    </HeaderWrapper>
  )
}