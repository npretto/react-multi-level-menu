import React, { Component } from "react"
import Menu from "./components/MultiLevelMenu/Menu"
import Item from "./components/MultiLevelMenu/Item"
import styled from "styled-components"
import "./App.css"

const MainItem = styled(Item)`
  background: white;
  color: black;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu>
          <MainItem name="Group 1" open>
            <Item name="Sub group">
              <Item name="Sub Sub Group" />
            </Item>
            <Item name="Sub group 2" />
          </MainItem>
          <Item name="Group 2">
            <Item name="Sub group">
              <Item name="Sub Sub Group" />
            </Item>
            <Item name="Sub group 2" />
          </Item>
          <Item name="Group 3" />
        </Menu>
      </div>
    )
  }
}

export default App
