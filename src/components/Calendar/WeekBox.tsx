import React from 'react'
import { styled } from 'styled-components'
import { DateWeekData } from '../../model/type';




const WeekBox:React.FC<DateWeekData> = ({weekName}) => {

  return (
    <WeekBoxContianer>
      <p>{weekName}</p>
    </WeekBoxContianer>
  )
}

export default WeekBox

const WeekBoxContianer= styled.div`
  height: 20px;
  ${props => props.theme.BoxCenter};
  font-size: 14px;
  margin-bottom: 10px;
`