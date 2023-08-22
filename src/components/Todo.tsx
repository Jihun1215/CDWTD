import React from 'react'
import { styled } from 'styled-components'
import TodoMain from './Todo/TodoMain'
import { useRecoilState } from 'recoil';
import { ClickDayState } from '../atoms'
import meunImg from "../asset/meun.svg"


const Todo:React.FC = () => {

  const [clickDate] = useRecoilState(ClickDayState);


  return (
    <TodoContienr>
      <TodoHeaderConteiner>
        <h4>Feed | {clickDate}</  h4>
      </TodoHeaderConteiner>
      <TodoMain/>
      </TodoContienr>
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

const TodoHeaderConteiner = styled.header`
  width: 100%;
  height: 10%;
  border: 1px solid red;
  ${props => props.theme.FlexRow};
  align-items: center;
  padding-left: 1.5rem;
  font-size: 24px;
  font-family: 800;
`;