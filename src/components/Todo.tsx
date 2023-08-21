import React from 'react'
import { styled } from 'styled-components'

const Todo:React.FC = () => {
  return (
    <TodoContienr>Todo</TodoContienr>
  )
}

export default Todo

const TodoContienr = styled.div`
    min-width: 31.25rem;
    height: 37.5rem;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter};
    border-radius: 14px;
    background-color: ${props => props.theme.bgColor2};
`;