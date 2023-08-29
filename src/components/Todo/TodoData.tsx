import React, {useState} from 'react'
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { todolistState } from '../../atoms';
import { ItemData } from '../../model/type';
import { bottomTodoChangeState } from '../../atoms';
import { ThisTodoIdState } from '../../atoms';
import { changeTodo } from '../../atoms';
import meunImg from "../../asset/meun.svg"
import todoimg from "../../asset/profileDefaultImage.png"
import checkbox from '../../asset/checkbox.svg'

const TodoData = ({data}:any) => {

    // 여기에 데이터에서 원하는 값만 가지고 와서 수정을 해야한다. 
    const [todolistArr, setTodolistArr] = useRecoilState(todolistState);    
    // BottomSheet 관리하는 state
    const [bottomSheet, setBottomSheet] = useRecoilState(bottomTodoChangeState)

    // 수정 버튼클릭시 해당하는 itemId값 가져온 state
    const [ThisTodoId, setThisTodoId] = useRecoilState(ThisTodoIdState)

    //  수정된 input value 
    const [newTodoValue, setnewTodoValue] = useState('')


    // 수정버튼이 눌렸는지 체크하는 state 
    const [eidtTodoArea, setEditTodoArea] = useRecoilState(changeTodo)


    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnewTodoValue(e.target.value);
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodoValue !== "") {
          // 해당 항목을 찾음
          setThisTodoId('')
          setEditTodoArea(false)
          const foundTodo = todolistArr.find((data) => {
            return data.itemId === ThisTodoId;
          });
      
          // foundTodo가 존재하는 경우에만 업데이트 수행
          if (foundTodo) {
            const updatedTodo = {
              ...foundTodo,
              title: newTodoValue,
            };
      
            // 새로운 배열을 만들어서 업데이트하기 
            const updatedList = todolistArr.map((todo) => {
              if (todo.itemId === ThisTodoId) {
                return updatedTodo;
              } else {
                return todo;
              }
            });
      
            setTodolistArr(updatedList);
          }
        }
      };
         




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

        {
            eidtTodoArea ? data.itemId === ThisTodoId ?
            <form  onSubmit={handleSubmit}>
                <input type='text' 
                   placeholder={data.title}
                   value={newTodoValue}
                   onChange={onChangeInputValue}/> 
            </form>
            : <span>{data.title}</span>    
            :   
            <span>{data.title}</span>    
        }

    <img src={meunImg}  onClick={(()=>EditTodoShow(data.itemId))}/>
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
    min-width: 75%;
    border-bottom: 1px solid #dee2e6;
    outline: none;
    cursor: pointer;
    padding: 5px;
    &:focus {
        outline: none !important;
      }
  }
`;

