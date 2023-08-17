import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"

const HeaderCalendar = () => {

   // 현재 날짜 객체 생성
   const [currentDate] = useRecoilState(ThisDayState);

   const ThisDay = `${currentDate.getFullYear()}년  ${currentDate.getMonth() + 1}월`;


  return (
    <HeaderCalendarContiner>

      <HeaderThisDayBox>
        {ThisDay}
      </HeaderThisDayBox>

      <HeaderThisDayChange>

        <div> 
          <BsArrowLeftShort/>
        </div>

        <div>
          <BsArrowRightShort/>
        </div>

      </HeaderThisDayChange>

    </HeaderCalendarContiner>
  )
}

export default HeaderCalendar

const HeaderCalendarContiner = styled.header`
    width: 100%;
    height: 8%;
    border: 1px solid red;
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter};
    gap: 0 20%;
`;

const HeaderThisDayBox = styled.div`
  width: 40%;
  height: 100%;
  ${props => props.theme.FlexRow};
  align-items: center;
  padding-left: .625rem;
`;

const HeaderThisDayChange = styled.div`
  width: 40%;
  height: 100%;
  ${props => props.theme.FlexRow};
  justify-content: right;
  align-items: center;
  padding-right: .625rem;
  > div {
    font-size: 30px;
    ${props => props.theme.BoxCenter};
  }
`;