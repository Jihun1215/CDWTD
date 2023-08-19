import React from 'react'
import { styled } from 'styled-components'
import WeekBox from './WeekBox'
// import { AllDaytype } from '../../model/type'


const DateBox:React.FC = () => {

  const weeks = ['일',"월","화","수","목","금","토"]
  
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
  border: 1px solid red;

`;

