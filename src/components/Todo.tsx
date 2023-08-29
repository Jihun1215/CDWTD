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
    min-width: 25rem;
    height: 37.5rem;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter};
    gap: 10px 0;
`;

const TodoHeaderConteiner = styled.header`
  width: 100%;
  height: 10%;
  ${props => props.theme.FlexRow};
  align-items: center;
  > h4 {
    font-size: 24px;
    font-weight: 700;
  }
`;