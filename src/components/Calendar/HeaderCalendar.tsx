import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'

const HeaderCalendar = () => {

   // 현재 날짜 객체 생성
   const [currentDate] = useRecoilState(ThisDayState);

   const ThisDay = `${currentDate.getFullYear()}년  ${currentDate.getMonth() + 1}월`;


  return (
    <HeaderCalendarContiner>
      <HeaderThisDayBox>
        {ThisDay}
      </HeaderThisDayBox>
      
    </HeaderCalendarContiner>
  )
}

export default HeaderCalendar

const HeaderCalendarContiner = styled.header`
    width: 100%;
    height: 8%;
    border: 1px solid red;
    ${props => props.theme.FlexRow};
    /* ${props => props.theme.FlexCenter}; */
`;

const HeaderThisDayBox = styled.div`
  width: 30%;
  height: 100%;
  ${props => props.theme.BoxCenter};
`;