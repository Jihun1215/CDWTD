import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { WeeksState } from '../../atoms'
import WeekBox from './WeekBox'
import AllDay from './AllDay'
// import { AllDaytype } from '../../model/type'


// WeeksState

  



const DateBox:React.FC = () => {

  //   const allDay = [] = mothList(nowDate);
  const [weeks] = useRecoilState(WeeksState)
  
  return (
    <DateBoxContainer>
        
     {weeks.map((week:string)=>{
          return <WeekBox weekName={week}></WeekBox>
     })}

    
     

    </DateBoxContainer>
  )
}

export default DateBox


const DateBoxContainer = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

