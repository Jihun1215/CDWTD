import { keyframes } from "styled-components";

export const toDown = keyframes`
0% {
  opacity: 0;
  transform: translateY(-50%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const toUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(50%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;