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
      <div></div>
      </AllDayContainer>
  )
}

export default AllDay


const AllDayContainer= styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 3.125rem;
  ${props => props.theme.FlexCol};
  align-items: center;
  font-size: 13px;
  /* border: 1px solid red; */
  img {
    position: absolute;
    width: 100%;
    height: 55px;
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
  > div {
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: 5px;
    border-radius: 50%;
    /* background: red; */
    /* border: 1px solids red; */
  }
  &:hover{
    background-color: gray ;
  }
`;
