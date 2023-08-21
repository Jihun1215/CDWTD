import React from 'react'
import styled, { css } from "styled-components";
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'

interface ContainerProps{
  sameMonth: boolean;
  sameDay: boolean;
}

type Props = {
  day: Date
}
const AllDay = ({day}:Props) => {

  const [currentDay, setCurrentDay] = useRecoilState(ThisDayState);

  const nowTime = new Date();

  const sameMonth = currentDay.getMonth() === day.getMonth();


  // 오늘 구하기 
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();

  return (
    <AllDayContainer
    sameMonth={sameMonth}
    sameDay={sameDay}
    >
      <p>{day.getDate()}</p>
      {/* 여기에 조건에 따라 값이 제대로 들어야가야 된다 이말이다! */}
      </AllDayContainer>
  )
}

export default AllDay


const AllDayContainer= styled.div<ContainerProps>`
  position: relative;
  padding: 5px;
  border: 1px solid #333;
  width: 100%;
  height: 4.6875rem;
  &:hover{
    background-color: gray ;
  }
  p {
    position: absolute;
    right: 5px;
    font-weight: ${({ sameMonth }) => (sameMonth ? `700` : `300`)};
  }
  ${({ sameDay }) =>
      sameDay
        ? css`
            color: red;
            background-color: blue;
          `
        : css``}


`;
