import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: black;
  color: lightgray;
  text-align: left;
`

const Menu = props => <Container {...props}>{props.children}</Container>

export default Menu
