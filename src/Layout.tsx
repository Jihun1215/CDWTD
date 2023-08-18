import React from 'react'
import { styled } from 'styled-components'
import Header from './components/Header'
import Calendar from './components/Calendar'
import Todo from './components/Todo'


const Layout = () => {
  return (
    <LayoutContiner>
        <LayoutInContiner>
            {/* <Header/> */}
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
`;

const LayoutInContiner = styled.div`
    width: 95%;
    height: 100%;
    ${props => props.theme.BoxCenter};
`;

const LayoutCTContiner = styled.div`
    width: 100%;
    height: 80%;
    ${props => props.theme.FlexRow};
    justify-content: center;
    color: ${props => props.theme.color2};
    gap: 0px 15px;
    /* ${props => props.theme.FlexCenter}; */
`;

// const LayoutHeaderContiner = styled.``