import React, { useEffect } from 'react'
import styled, { css } from "styled-components";
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'
import { ClickDayState } from '../../atoms';
import { todolistState } from '../../atoms';
import { ItemData } from '../../model/type';
import allDayImg from "../../asset/profileDefaultImage.png"

interface ContainerProps{
  sameMonth?: boolean;
  sameDay?: boolean;
}

type Props = {
  day: Date
}

const AllDay:React.FC<Props>= ({day}) => {
  const formatDateCheck =  `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;


  // const changeformatDate = 
  const [currentDay, setCurrentDay] = useRecoilState(ThisDayState);
  const [clickDate, setClickDate] = useRecoilState(ClickDayState);


  const [todoData, setTodoData] = useRecoilState<ItemData[]>(todolistState);

  const sameMonth: boolean = currentDay.getMonth() === day.getMonth();

  const findThisTodo = todoData.filter(function(data){
    return data.thisDay === formatDateCheck
  })

  // 오늘 구하기 
  const sameDay : boolean = 
  currentDay.getFullYear() === day.getFullYear() &&
  currentDay.getMonth() === day.getMonth() &&
  currentDay.getDate() === day.getDate();

    const formatDate = (day: Date) => {
      return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
    };
    
    const onClickChangeDay = () => {
      const formattedDate = formatDate(day);
      setClickDate(formattedDate)
    }



  return (
    <AllDayContainer
    sameMonth={sameMonth}
    sameDay={sameDay}
    // thisdayTodo={thisdayTodo}
    onClick={() => onClickChangeDay()}
    >
      <img src={allDayImg} />
      <p>{day.getDate()}</p>
      <div>
      {
        findThisTodo?.length > 0 ? (
          // findThisTodo.map((data:any)=>{
            <span>{findThisTodo.length}</span>
          // })
        ): null
      }
      </div>
      </AllDayContainer>
  )
}

export default AllDay


const AllDayContainer= styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 3.125rem;
  ${props => props.theme.FlexCol};
  align-items: center;
  font-size: 13px;
  img {
    position: absolute;
    width: 100%;
    height: 55px;
  }
  p {
    position: absolute;
    right: 5px;
    font-weight: ${({ sameMonth }) => (sameMonth ? `700` : `300`)};
    cursor: pointer;
    ${({ sameDay }) =>
      sameDay
        ? css`
           font-weight: 900;
           text-decoration-line: underline;
          `
        : css``}
  }
  > div {
    position: absolute;
    width: 12.5px;
    height: 12.5px;
    bottom: 15px;
    border-radius: 50%;
    ${props => props.theme.BoxCenter};
    /* border: 1px solid red; */
    > span {
      position: absolute;
      /* top: -16px; */
      /* color: red; */
      font-size: 12px;
      font-family: 700;
      /* background-color: red; */
      /* border: 1px solid red */
    }
  }
  /* &:hover{
    background-color: gray ;
  } */
`;
