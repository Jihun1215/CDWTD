import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Calendar from './components/Calendar';
import Todo from './components/Todo';
import BottomSheet from './components/BottomSheet';
import { useRecoilState } from 'recoil';
import { bottomTodoChangeState } from './atoms';

const Layout = () => {
  const [bottomSheet, setBottomSheet] = useRecoilState<boolean>(bottomTodoChangeState);

  // // 배경 클릭 시 bottomSheet 값을 false로 변경
  // const handleBackgroundClick = () => {
  //   setBottomSheet(false);
  // };
  // // const click =  document.addEventListener('click', );
  // useEffect(()=>{
  //   if(bottomSheet){
  //     document.addEventListener('click', handleBackgroundClick);
  //   }
  // },[setBottomSheet])



  return (
    <LayoutContiner>
      <LayoutInContiner>
        <LayoutCTContiner>
          <Calendar />
          <Todo />
        </LayoutCTContiner>
      </LayoutInContiner>
      {bottomSheet ? <BottomSheet /> : null}
    </LayoutContiner>
  );
};

export default Layout;

const LayoutContiner = styled.div`
  width: 100%;
  height: 100vh;
  ${props => props.theme.BoxCenter};
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
`;

const LayoutInContiner = styled.div`
  width: 95%;
  height: 100%;
  ${props => props.theme.BoxCenter};
`;

const LayoutCTContiner = styled.div`
  width: 100%;
  height: 90%;
  ${props => props.theme.FlexRow};
  ${props => props.theme.FlexCenter};
  gap: 0px 15px;
`;

