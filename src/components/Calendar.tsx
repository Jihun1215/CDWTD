import React from 'react'
import { styled } from 'styled-components'
import Info from './Calendar/Info';
import HeaderCalendar from './Calendar/HeaderCalendar';
import MainCalendar from './Calendar/MainCalendar';
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../atoms'

const Calendar:React.FC = () => {
  const [currentDate, setCurrentDate] = useRecoilState<Date>(ThisDayState);

  // 현재 날짜 객체 생성
//  const currentDate: Date = new Date();
 const thisYear = currentDate.getFullYear(); // 년도
 const thisMonth = currentDate.getMonth() + 1; 

 console.log(thisYear, thisMonth)

//  const 

  return (
    <CalendarContiner>
        <Info/>
        <HeaderCalendar />
        <MainCalendar />
    </CalendarContiner>
  )
}

export default Calendar

const CalendarContiner = styled.div`
    min-width: 31.25rem;
    height: 37.5rem;
    background-color: ${props => props.theme.bgColor2};
    border-radius: 6px;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter};
    gap: 10px 0;
`;

