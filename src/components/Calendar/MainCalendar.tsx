import React from 'react'
import { styled } from 'styled-components'
// import DateBox from './DateBox'
import { useRecoilState } from 'recoil';
import { WeeksState } from '../../atoms'
import WeekBox from './WeekBox';

const MainCalendar:React.FC= () => {
  const [weeks] = useRecoilState(WeeksState)
  return (
    <MainCalendarContiner>
      <DateBoxContainer>
        
        {weeks.map((week:string)=>{
          return <WeekBox weekName={week}></WeekBox>
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

