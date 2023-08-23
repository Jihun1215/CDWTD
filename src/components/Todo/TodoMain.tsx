import React , { useRef, useEffect , MouseEvent}from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { ClickDayState } from '../../atoms'
import meunImg from "../../asset/meun.svg"
import openBox from "../../asset/openBox.png"
import todoimg from "../../asset/profileDefaultImage.png"
import { onClickTodoMakeInputState } from '../../atoms';


const TodoMain = () => {

  const [todoMakeArea , setTodoMakeArea] = useRecoilState(onClickTodoMakeInputState)

  // 입력 영역의 Ref를 생성합니다.
  const todoInputRef = useRef(null);

    // 다른 영역을 클릭했을 때 입력 영역을 숨깁니다.
    const handleClickOutside = (e:any) => {
      // if (todoInputRef.current && !todoInputRef.current.contains(e.currentTarget)) {
        // setTodoMakeArea(false);
      // }
    };

  // 다른 영역 클릭 이벤트를 추가합니다.
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




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
        <TodoMakeInput ref={todoInputRef}>
          <img src={todoimg}/>
          <input type='text' />
          <div>2</div>
        </TodoMakeInput>
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

const TodoMakeInput = styled.div`
  width: 80%;
  height: 1.375rem;
  margin: 0 auto;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img{
    width: 30px;
    height: 30px;
    border: 1px solid red;
  }
  > input {
    width: 80%;
    border-bottom: 1px solid blue;
  }
`;

