import React from 'react'
import { styled } from 'styled-components'

const Header = () => {

  // 현재 날짜 객체 생성
 const currentDate: Date = new Date();
 const thisYear = currentDate.getFullYear(); // 년도


 const monthNames: string[] = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ]; 

 const currentMonthIndex: number = currentDate.getMonth();

 const currentMonth: string = monthNames[currentMonthIndex];

 const currentDay = currentDate.getDate();
//  console.log(currentDate)


//   console.log(thisYear)
  return (
    <HeaderContiner>

      <HeaderThisMonthContiner>
        <h4>{currentMonth}</h4>
        <h5>{currentDay}</h5>
      </HeaderThisMonthContiner>
       

      <HeaderThisYearContiner>
         <h4>{thisYear}</h4>
      </HeaderThisYearContiner>
     
    </HeaderContiner>
  )
}

export default Header

const HeaderContiner = styled.header`
  position: fixed;
  margin: 0 auto;
  width: 95%;
  height: 56px;
  ${props => props.theme.FlexRow};
  ${props => props.theme.FlexCenter};
  background-color: ${props => props.theme.bgColor};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const HeaderThisMonthContiner = styled.div`
    width: 80%;
    height: 100%;
    ${props => props.theme.FlexRow};
    justify-content: left;
    align-items: center;
    gap: 0px 5px;
    padding-left: 10px;
    > h4 {
      font-size: 20px;
      font-weight: 600;
    }
    > h5 {
      font-size: 18px;
      font-weight: 500;
    }
`;


const HeaderThisYearContiner = styled.div`
    width: 20%;
    height: 100%;
    ${props => props.theme.BoxCenter};
    > h4 {
      font-size: 26px;
      font-weight: 800;
      color: green;
    }
`;