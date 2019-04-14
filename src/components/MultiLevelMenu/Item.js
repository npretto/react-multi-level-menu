import React, { Fragment, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import "open-iconic/font/css/open-iconic.css"

const StyledItem = styled.li`
  text-indent: 0;
  list-style-type: none;
  padding: 15px 0px;
  border-bottom: 1px solid lightgray;
  background: ${props => (props.level === 0 ? "#3C3F46" : "#282A2F")};
  padding-left: ${props => `${props.level * 20}px`};
  &:hover {
    background: "white";
  }
`
const List = styled.ul`
  padding: 0px;
  margin: 0px;
`

const IconContainer = styled.div`
  display: inline-block;
  width: 30px;
  text-align: center;
`

const Item = ({
  open: propsOpen,
  onClick,
  children,
  name,
  level,
  className,
  ...otherProps
}) => {
  const [open, setOpen] = useState(propsOpen)

  const icon = children ? (
    <span
      className="oi"
      data-glyph={open ? "chevron-bottom" : "chevron-right"}
      title="icon name"
      aria-hidden="true"
    />
  ) : (
    ""
  )

  return (
    <Fragment>
      <StyledItem
        className={"light " + className}
        onClick={e => {
          setOpen(!open)
          onClick(e)
        }}
        level={level}
        {...otherProps}
      >
        <IconContainer>{icon}</IconContainer>
        {name}
      </StyledItem>
      {open && children && (
        <List>
          {React.Children.map(children, c =>
            React.cloneElement(c, { level: level + 1 })
          )}
        </List>
      )}
    </Fragment>
  )
}

Item.propTypes = {
  /** if the item should be rendered as open the first time */
  open: PropTypes.bool,
  name: PropTypes.string
}

Item.defaultProps = {
  level: 0,
  open: false
}

export default Item
