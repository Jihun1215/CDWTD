import React from 'react'
import { styled } from 'styled-components'

const Todo:React.FC = () => {
  return (
    <TodoContienr>Todo</TodoContienr>
  )
}

export default Todo

const TodoContienr = styled.div`
    margin-top: 50px;
    width: 30%;
    height: 50%;
    background-color: ${props => props.theme.bgColor};
    border-radius: 6px;
`;