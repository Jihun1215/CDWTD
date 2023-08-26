import React from 'react'
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { todolistState } from '../../atoms';
import meunImg from "../../asset/meun.svg"
import todoimg from "../../asset/profileDefaultImage.png"
import { ItemData } from '../../model/type';

const TodoData = ({data}:any) => {

    // 여기에 데이터에서 원하는 값만 가지고 와서 수정을 해야한다. 
    const [todolistArr, setTodolistArr] = useRecoilState(todolistState);    
    // console.log(data)

    const EditTodoShow = (id:string) =>{
        const Delete = todolistArr.filter((todo)=>{
            return todo.itemId !== id
        })
        setTodolistArr(Delete)
    }
    
    const isDoneCheck  = (data:ItemData) =>{
        console.log(data)
        // const 
    }
    
  return ( 
    <TodoMakeData>
        {
            data.isDone ? (
                <div>2</div>
            ) : 
            (
                <img src={todoimg} className='isCheck' onClick={(()=>{isDoneCheck(data)})}/>
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
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  > .isCheck{
    width: 40px;
    height: 40px;
  }
  > input {
    min-width: 80%;
    border-bottom: 1px solid #dee2e6;
    outline: none;
    cursor: pointer;
    padding: 5px;
  }
`;

