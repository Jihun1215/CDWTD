import React from 'react'
import styled, { css } from "styled-components";
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'
import { ClickDayState } from '../../atoms';
import allDayImg from "../../asset/profileDefaultImage.png"

interface ContainerProps{
  sameMonth?: boolean;
  sameDay?: boolean;
}

type Props = {
  day: Date
}
const AllDay:React.FC<Props>= ({day}) => {

  const [currentDay, setCurrentDay] = useRecoilState(ThisDayState);
  const [clickDate, setClickDate] = useRecoilState(ClickDayState);

  const nowTime = new Date();

  const sameMonth: boolean = currentDay.getMonth() === day.getMonth();


  // 오늘 구하기 
  const sameDay : boolean = 
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();

    const formatDate = (day: Date) => {
      const year = day.getFullYear();
      const month = day.getMonth() + 1;
      const date = day.getDate();
      return `${year}-${month}-${date}`;
    };
    


    const onClickChangeDay = () => {
      const formattedDate = formatDate(day);
      setClickDate(formattedDate)
    }

  return (
    <AllDayContainer
    sameMonth={sameMonth}
    sameDay={sameDay}
    onClick={() => onClickChangeDay()}
    >
      <img src={allDayImg}/>
      <p>{day.getDate()}</p>
      </AllDayContainer>
  )
}

export default AllDay


const AllDayContainer= styled.div<ContainerProps>`
  position: relative;
  padding: 5px;
  border: 1px solid #333;
  color: ${props => props.theme.colorTheme.black};
  background-color: ${props => props.theme.colorTheme.white};
  width: 100%;
  height: 4.6875rem;
  &:hover{
    background-color: gray ;
  }
  img {
    position: absolute;
    width: 20px;
    height: 20px;
  }
  p {
    position: absolute;
    right: 5px;
    font-weight: ${({ sameMonth }) => (sameMonth ? `700` : `300`)};
    ${({ sameDay }) =>
      sameDay
        ? css`
           font-weight: 900;
           text-decoration-line: underline;
          `
        : css``}
  }



`;
