import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { ThisDayState } from '../../atoms'
import { todolistState } from '../../atoms';
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import logoImg from "../../asset/profileDefaultImage.png"
import { ItemData } from '../../model/type';


const HeaderCalendar:React.FC = () => {
  const [currentDate, setCurrentDate] = useRecoilState<Date>(ThisDayState);
  const [todoData, setTodoData] = useRecoilState<ItemData[]>(todolistState);


  const findThisTodo = todoData.filter(function(data){
    return data.isDone === true
  })

   const ThisDay = `${currentDate.getFullYear()}년  ${currentDate.getMonth() + 1}월`;


  const ChangeMonth = (change: number) =>{
    const date = new Date(currentDate.getTime());
    date.setMonth(date.getMonth() + change)
    setCurrentDate(date)
  };


  return (
    <HeaderCalendarContiner>
      <HeaderThisDayBox>
        <h4>{ThisDay}</h4>
        <div>
          <img src={logoImg}/>
          <p>{findThisTodo?.length}</p>
        </div>
      
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
  gap: 0 5px;
  > div {
    width: 50px;
    height: 100%;
    position: relative;
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter};
    > img {
      position: absolute;
      right: 20px;
      width: 40px;
      height: 40px;
    }
    > p {
      position: absolute;
      right: 22px;
      bottom: 11px;
     }
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