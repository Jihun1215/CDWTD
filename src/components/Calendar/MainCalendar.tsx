import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { WeeksState } from '../../atoms'
import { ThisDayState } from '../../atoms';
import WeekBox from './WeekBox';
import AllDay from './AllDay';

const MainCalendar:React.FC= () => {

  const [weeks] = useRecoilState(WeeksState);
  const [currentDay, setCurrentDay] = useRecoilState(ThisDayState);


  const DayArr = (currentDay: Date) =>{
    const nowYear = currentDay.getFullYear();
    const nowMonth = currentDay.getMonth();
    const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
    const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();
    const result: Date[] = [];
  
    // 이전 달의 마지막 날짜
    const prevMonthLastDay = new Date(nowYear, nowMonth, 0).getDate();
  
    // 이전 달의 일 수만큼 배열에 추가
    for (let i = dayOneWeek - 1; i >= 0; i--) {
      result.push(new Date(nowYear, nowMonth - 1, prevMonthLastDay - i));
    }
  
    // 이번 달의 일 수만큼 배열에 추가
    const nowMonthLastDay = new Date(nowYear, nowMonth + 1, 0).getDate();
    for (let i = 1; i <= nowMonthLastDay; i++) {
      result.push(new Date(nowYear, nowMonth, i));
    }
  
    // 다음 달의 필요한 만큼 추가
    for (let i = 1; i < 7 - dayLastWeek; i++) {
      result.push(new Date(nowYear, nowMonth + 1, i));
    }
  
  return result
  }

  const allDay = [] = DayArr(currentDay);

  return (
    <MainCalendarContiner>
      <DateBoxContainer>

        {weeks.map((week:string)=>{
          return <WeekBox weekName={week}></WeekBox>
         })}

      {allDay.map((day: Date)=>{
        return <AllDay 
                  day={day} 
                  // ClickedDate={ClickedDate} 
                  // setClickedDate={setClickedDate}
                  />
      })}

      </DateBoxContainer>
    </MainCalendarContiner>
  )
}

export default MainCalendar

const MainCalendarContiner = styled.div`
    width: 100%;
    height: 90%;
`;

const DateBoxContainer = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

