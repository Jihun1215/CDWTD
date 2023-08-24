import React from 'react'
import { styled } from 'styled-components';
import meunImg from "../../asset/meun.svg"
import todoimg from "../../asset/profileDefaultImage.png"
import { ItemData } from '../../model/type';

const TodoData = ({data}:any) => {
  return ( 
    <TodoMakeData>
    <img src={todoimg} />
        <span>{data.title}</span>    
    <img src={meunImg}/>
  </TodoMakeData>
  )
}

export default TodoData

const TodoMakeData = styled.div`
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

