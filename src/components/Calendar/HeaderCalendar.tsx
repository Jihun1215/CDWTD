import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import logoImg from "../../asset/profileDefaultImage.png"

const HeaderCalendar:React.FC = () => {
  const [currentDate, setCurrentDate] = useRecoilState<Date>(ThisDayState);

   const ThisDay = `${currentDate.getFullYear()}년  ${currentDate.getMonth() + 1}월`;


  const ChangeMonth = (change: number) =>{
    const date = new Date(currentDate.getTime());
    date.setMonth(date.getMonth() + change)
    setCurrentDate(date)
  };


  return (
    <HeaderCalendarContiner>
      <HeaderThisDayBox>
        {ThisDay}
        <img src={logoImg}/>
        <p>2</p>
      </HeaderThisDayBox>

      <HeaderThisDayChange>
        <div> 
          <BsArrowLeftShort  onClick={()=> ChangeMonth(-1)}/>
        </div>

        <div>
          <BsArrowRightShort  onClick={()=> ChangeMonth(1)}/>
        </div>
      </HeaderThisDayChange>

    </HeaderCalendarContiner>
  )
}

export default HeaderCalendar

const HeaderCalendarContiner = styled.header`
    width: 100%;
    height: 8%;
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
  gap: 0 10px;
  > img {
    width: 40px;
    height: 40px;
  }
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