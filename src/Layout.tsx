import React from 'react'
import { styled } from 'styled-components'
import Header from './components/Header'
import Calendar from './components/Calendar'
import Todo from './components/Todo'


const Layout = () => {
  return (
    <LayoutContiner>
        <LayoutInContiner>
            <Header/>

            <LayoutCTContiner>
                <Calendar/>
                <Todo/>
            </LayoutCTContiner>
        </LayoutInContiner>
    </LayoutContiner>
  )
}

export default Layout

const LayoutContiner = styled.div`
  width: 100%;
  height: 1080px;
  ${props => props.theme.BoxCenter};
  /* background-color: ${props => props.theme.bgColor}; */
`;

const LayoutInContiner = styled.div`
    width: 95%;
    height: 100%;
    border: 1px solid red; 
`;

const LayoutCTContiner = styled.div`
    width: 95%;
    height: 80%;
    border: 1px solid red;
    margin: 80px auto;
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter};
`;

// const LayoutHeaderContiner = styled.``