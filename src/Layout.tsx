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
  height: 980px;
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
    justify-content: center;

    gap: 0px 15px;
    /* ${props => props.theme.FlexCenter}; */
`;

// const LayoutHeaderContiner = styled.``