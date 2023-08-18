import React from 'react'
import { styled } from 'styled-components'
import DateBox from './DateBox'

const MainCalendar = () => {
  return (
    <MainCalendarContiner>

      <DateBox/>
      
    </MainCalendarContiner>
  )
}

export default MainCalendar

const MainCalendarContiner = styled.div`
    width: 100%;
    height: 90%;    
`;