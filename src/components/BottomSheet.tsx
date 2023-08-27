import React , { useEffect }from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { bottomTodoChangeState } from '../atoms'; 
import { toUp, toDown } from '../styles/Animation';


const BottomSheet = () => {
    const [bottomSheet, setBottomSheet] = useRecoilState(bottomTodoChangeState)
    // console.log(bottomSheet)
  
     useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
          // 클릭한 요소에 대한 정보 얻기
          const clickedElement = event.target as HTMLElement;
    
          if(clickedElement.tagName === "DIV"){
            setBottomSheet(false)
          }
        };
    
        // document에 클릭 이벤트 리스너 추가
        document.addEventListener('click', handleDocumentClick);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, []);
    
  return (
    <BottomSheetContiner>
        <BottomSheetArea>
            <div className='top'></div>
        </BottomSheetArea>
    </BottomSheetContiner>
  )
}

export default BottomSheet

const BottomSheetContiner = styled.div`
    position: fixed;
    bottom: 0%;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colorTheme.white};
    background-color: #00000099;
    display: flex;
    justify-content: center;
    animation: ${toUp} 0.25s ease-in-out;
`;

const BottomSheetArea = styled.section`
    position: absolute;
    bottom: 0;
    min-width: 500px;
    height: 170px;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px; 
    background-color: #fff;
    > .top{
        width: 100%;
        height: 1.25rem;
        border: 1px solid red;
    }
`;