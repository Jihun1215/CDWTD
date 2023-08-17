import React from 'react'
import { styled } from 'styled-components'

const Todo:React.FC = () => {
  return (
    <TodoContienr>Todo</TodoContienr>
  )
}

export default Todo

const TodoContienr = styled.div`
    width: 50%;
    height: 37.5rem;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter};
    border: 1px solid red;
`;