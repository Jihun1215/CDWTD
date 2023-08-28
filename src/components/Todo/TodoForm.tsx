import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import meunImg from "../../asset/meun.svg";
import { v4 as uuidv4 } from 'uuid';
import todoimg from "../../asset/profileDefaultImage.png";
import { useRecoilState } from 'recoil';
import { onClickTodoMakeInputState } from '../../atoms';
import { todolistState } from '../../atoms';
import { ItemData } from '../../model/type';
import { ClickDayState } from '../../atoms';

const TodoForm = () => {
  const [thisDay] = useRecoilState(ClickDayState);
  const [todoMakeArea, setTodoMakeArea] = useRecoilState(onClickTodoMakeInputState);
  const [todoData, setTodoData] = useRecoilState<ItemData[]>(todolistState);
  const [todoInputValue, setTodoInputValue] = useState('');

  // 입력 영역의 Ref를 생성합니다.
  const todoInputRef = useRef<HTMLInputElement | null>(null);

  const onClickCloseTodoMakeInput = () => {
    setTodoMakeArea(false);
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodoInputValue('');
    const newTodo: ItemData = {
      itemId: uuidv4(),
      title: todoInputValue,
      isDone: false,
      thisDay: thisDay,
    };
    setTodoData([...todoData, newTodo]);
  };

  useEffect(() => {
    if (todoMakeArea) {
      // todoInputRef가 현재 input 엘리먼트를 참조하고 있다면 focus를 설정
      if (todoInputRef.current) {
        todoInputRef.current.focus();
      }
    }
  }, [todoMakeArea]);


  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      // 클릭한 요소에 대한 정보 얻기
      const clickedElement = event.target as HTMLElement;
      console.log(clickedElement.tagName)
      if(clickedElement.tagName !== "INPUT" && clickedElement.tagName !== "BUTTON"){
        onClickCloseTodoMakeInput()
        // console.log()
      }
    };
  
    // document에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleDocumentClick);
  
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);


  return (
    <TodoMakeform onSubmit={handleSubmit}>
      <img src={todoimg} alt="Todo" />
      <input
        type="text"
        placeholder="입력"
        value={todoInputValue}
        onChange={onChangeInputValue}
        ref={todoInputRef}
      />
      <img src={meunImg} alt="메뉴" />
    </TodoMakeform>
  );
};

export default TodoForm;

const TodoMakeform = styled.form`
  width: 80%;
  height: 1.375rem;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
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



