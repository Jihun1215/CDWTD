import React from 'react'
import { styled } from 'styled-components'
import HeaderCalendar from './Calendar/HeaderCalendar';
import MainCalendar from './Calendar/MainCalendar';

const Calendar:React.FC = () => {


  // 현재 날짜 객체 생성
 const currentDate: Date = new Date();
 const thisYear = currentDate.getFullYear(); // 년도
 const thisMonth = currentDate.getMonth() + 1; 

 console.log(thisYear, thisMonth)

//  const 

  return (
    <CalendarContiner>
        <HeaderCalendar/>
        <MainCalendar/>
    </CalendarContiner>
  )
}

export default Calendar

const CalendarContiner = styled.div`
    width: 65%;
    height: 80%;
    background-color: ${props => props.theme.bgColor};
    border-radius: 6px;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter};
    gap: 10px 0;
`;

// const DateBoxContainer = styled.div`
//   width: 100%;
//   flex: 1;
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   border: 1px solid red;
// `