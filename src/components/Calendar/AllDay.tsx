import React from 'react'
import styled, { css } from "styled-components";
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'
import { ClickDayState } from '../../atoms';

interface ContainerProps{
  sameMonth: boolean;
  sameDay: boolean;
  // onclick: void;
  // clickDayChcek: boolean;
}

type Props = {
  day: Date
}
const AllDay = ({day}:Props) => {

  const [currentDay, setCurrentDay] = useRecoilState(ThisDayState);
  const [clickDate, setClickDate] = useRecoilState(ClickDayState);

  const nowTime = new Date();

  const sameMonth = currentDay.getMonth() === day.getMonth();


  // 오늘 구하기 
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();



    // const clickDayChcek: boolean = clickDate
    // ? clickDate.getFullYear() === day.getFullYear() &&
    // clickDate.getMonth() === day.getMonth() &&
    // clickDate.getDate() === day.getDate()
    // : false;

    // const clickDay = () => {
    //   setClickDate(day);
    // };
    // console.log(clickDayChcek)

    const formatDate = (day: Date) => {
      const year = day.getFullYear();
      const month = day.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더합니다.
      const date = day.getDate();
      return `${year}-${month}-${date}`;
    };
    


    const onClickChangeDay = () => {
      const formattedDate = formatDate(day);
      console.log(formattedDate);
      setClickDate(formattedDate)
    }

  return (
    <AllDayContainer
    sameMonth={sameMonth}
    sameDay={sameDay}
    onClick={() => onClickChangeDay()}
    // clickDayChcek={clickDayChcek}
    // on={onClickChangeDay}
    >
      <p>{day.getDate()}</p>
      {/* 여기에 조건에 따라 값이 제대로 들어야가야 된다 이말이다! */}
      </AllDayContainer>
  )
}

export default AllDay


const AllDayContainer= styled.div<ContainerProps>`
  position: relative;
  padding: 5px;
  /* border: 1px solid #333; */
  color: ${props => props.theme.colorTheme.black};
  width: 100%;
  height: 4.6875rem;
  background-color: ${props => props.theme.colorTheme.beige};
  &:hover{
    background-color: gray ;
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
