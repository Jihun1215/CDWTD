import { DefaultTheme, css } from "styled-components";
 

const colorTheme: DefaultTheme = {
    white: "#ffffff",
    black: "#000000",
    gray:  "#495057",
    yellow: "#F8c707",
    beige: "#FAF1E4",
    Alternative: '#8A8A8A',
    primary_easy: "#F7FFE5",
    primary_normal: "#E1ECC8",
    primary_strong: "#C4D7B2",
    primary_heavy: "#A0C49D",
    primary_altemative: "#FFC672",
    primary_assistive: "#FFE4BC",
    dark_beige: "#AA9178",
}

const WH100 = css`
  width: 100%;
  height: 100%;
`;

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

const BoxCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = { 
    colorTheme,
    WH100,
    FlexCol,
    FlexRow,
    FlexCenter,
    BoxCenter,
}

export const Theme: DefaultTheme = {
    ...theme,
    bgColor: '#fff',
    bgColor2: '#282c34',
    color: '#191A23',
    color2: '#191A23',
    // bgColor: '#F1F0E8',
    // bgColor2: '#282c34',
    // color: '#191A23',
    // color2: '#E2E2E2',
}

// export const DarkTheme: DefaultTheme = {
//     ...theme,   
//     bgColor: '#1e1e1e',
//     bgColor2: '#282c34',
//     color: '#E2E2E2',
//     color2: '#191A23',
// }