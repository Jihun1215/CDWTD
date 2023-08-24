import React, { useState, useRef}  from 'react'
import { styled } from 'styled-components';
import meunImg from "../../asset/meun.svg"
import openBox from "../../asset/openBox.png"
import todoimg from "../../asset/profileDefaultImage.png"
import { useRecoilState } from 'recoil';
import { onClickTodoMakeInputState } from '../../atoms';


type Fromvalue = {
    todo?: string,
  }

const TodoFrom = () => {
    const [todoMakeArea , setTodoMakeArea] = useRecoilState(onClickTodoMakeInputState);

    const [todoInputValue, setTodoInputValue] = useState('');
     // 입력 영역의 Ref를 생성합니다.
     const todoInputRef = useRef(null);

     const onClickCloseTodoMakeInput = () =>{
    setTodoMakeArea(false)
     }

     const onChangeInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodoInputValue(e.target.value)
     }

     const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 폼이 제출되면 inputValue 값을 사용합니다.
        console.log('입력된 값:', todoInputValue);
        setTodoInputValue('');
        // 이제 여기에서 값을 사용하거나 상태를 업데이트할 수 있습니다.
      };


  return (
    <TodoMakeform ref={todoInputRef} onSubmit={handleSubmit}>
    <img src={todoimg} />
    <input type='text'
           placeholder="입력"
           value={todoInputValue}
           onChange={onChangeInputValue}
          />
    <img src={meunImg} onClick={onClickCloseTodoMakeInput}/>
  </TodoMakeform>
  )
}

export default TodoFrom


const TodoMakeform = styled.form`
  width: 80%;
  height: 1.375rem;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img{
    width: 30px;
    height: 30px;
  }
  > input {
    min-width: 80%;
    border-bottom: 1px solid #dee2e6;
    outline: none;
    cursor: pointer;
    padding: 5px;
  }
`;

