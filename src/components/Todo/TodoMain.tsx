import React , { useState, useRef, useEffect , MouseEvent }from 'react'
import TodoData from './TodoData';
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { onClickTodoMakeInputState } from '../../atoms';
import { ClickDayState } from '../../atoms'
import TodoForm from './TodoForm';
import { todolistState } from '../../atoms';
import { ItemData } from '../../model/type';
import openBox from "../../asset/openBox.png"


const TodoMain = () => {
  // const 
  const [todoData, setTodoData] = useRecoilState<ItemData[]>(todolistState);
  const [findTodoArr, setFindTodoArr] = useState([]);
  const [clickDate] = useRecoilState(ClickDayState);

  const [todoMakeArea , setTodoMakeArea] = useRecoilState(onClickTodoMakeInputState)

  const findThisTodo = todoData.filter(function(data){
    return data.thisDay === clickDate
  })

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
    
      {
        findThisTodo?.map((data)=>{
          return <TodoData data={data}/>
        })
      }
  
          {/* findThisTodo?.map((data:any)=>{
            return <TodoText>{data.title}</TodoText>
          })
        ) */}




        {todoMakeArea ? (
          <TodoForm/>
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

const TodoText = styled.div`

`;