import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { ClickDayState } from '../../atoms'
import meunImg from "../../asset/meun.svg"

const TodoMain = () => {


  return (
    <TodoMainConteinr>TodoMain
                <img src={meunImg}/>
    </TodoMainConteinr>
  )
}

export default TodoMain

const TodoMainConteinr = styled.div`
    width: 100%;
    height: 90%;
    border: 1px solid red;
`;