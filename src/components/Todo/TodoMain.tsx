import React , { useRef, useEffect , MouseEvent}from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import openBox from "../../asset/openBox.png"
import { onClickTodoMakeInputState } from '../../atoms';
import TodoFrom from './TodoFrom';

type Fromvalue = {
  todo?: string,
}

const TodoMain = () => {




  const [todoMakeArea , setTodoMakeArea] = useRecoilState(onClickTodoMakeInputState)



  const onClickTodoMakeInput = () =>{
    setTodoMakeArea(true)
  }


  return (
    <TodoMainConteinr>
        <TodoMakeTabBtn>
          <img src={openBox} alt='openBox'/>
          <span>오늘 할 일 </span>
          <button onClick={onClickTodoMakeInput}>+</button>
        </TodoMakeTabBtn>
        {todoMakeArea ? (
          <TodoFrom/>
      ) : null}
    </TodoMainConteinr>
  )
}

export default TodoMain

const TodoMainConteinr = styled.div`
    width: 100%;
    height: 90%;
    ${props => props.theme.FlexCol};
    /* border: 1px solid red; */
    gap: 10px 0;
`;

const TodoMakeTabBtn = styled.div`
  width: 7.5rem;
  height: 2.125rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 4px;
  background-color: #dee2e6;
  gap: 0px 5px;
  > img {
    width: 1.375rem;
    height: 1.375rem; 
  }
  > span {
    font-size: 14px;
  }
  > button {
    outline: none;
    border: none;
    width: 15px;
    border-radius: 15px;
  }
`;
