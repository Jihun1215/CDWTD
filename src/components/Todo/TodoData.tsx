import React from 'react'
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { todolistState } from '../../atoms';
import { ItemData } from '../../model/type';
import { bottomTodoChangeState } from '../../atoms';
import { ThisTodoIdState } from '../../atoms';
import meunImg from "../../asset/meun.svg"
import todoimg from "../../asset/profileDefaultImage.png"
import checkbox from '../../asset/checkbox.svg'

const TodoData = ({data}:any) => {

    // 여기에 데이터에서 원하는 값만 가지고 와서 수정을 해야한다. 
    const [todolistArr, setTodolistArr] = useRecoilState(todolistState);    

    const [bottomSheet, setBottomSheet] = useRecoilState(bottomTodoChangeState)
    const [ThisTodoId, setThisTodoId] = useRecoilState(ThisTodoIdState)


    const EditTodoShow = (id:string) =>{
        setBottomSheet(true)
        setThisTodoId(id)
    }
    
    const isDoneChange = (id:string) =>{
        const updatedList = todolistArr.map((todo) => {
            if (todo.itemId === id) {
              // 특정 아이템의 isDone 값을 토글
              return { ...todo, isDone: !todo.isDone };
            } else {
              return todo;
            }
          });
        //   console.log(updatedList)
          setTodolistArr(updatedList);
    }
    
  return ( 
    <TodoMakeData>
        {
            data.isDone ? (
                    <img src={checkbox} className='isCheck' onClick={(()=>{isDoneChange(data.itemId)})}/>                
            ) : (   
                <img src={todoimg} onClick={(()=>{isDoneChange(data.itemId)})}/>
                )
        }

        <span>{data.title}</span>    
    <img src={meunImg} 
    onClick={(()=>EditTodoShow(data.itemId))}/>
  </TodoMakeData>
  )
}

export default TodoData

const TodoMakeData = styled.div`
  width: 80%;
  height: 1.375rem;
  margin: 4px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
    > img{
    width: 40px;
    height: 40px;
    cursor: pointer;
    }
 

  > input {
    min-width: 80%;
    border-bottom: 1px solid #dee2e6;
    outline: none;
    cursor: pointer;
    padding: 5px;
  }
`;

