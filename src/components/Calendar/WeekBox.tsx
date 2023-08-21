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
  height: 40px;
  ${props => props.theme.BoxCenter};
`