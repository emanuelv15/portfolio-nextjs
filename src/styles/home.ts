import styled from "styled-components";

export const App = styled.div`
  height: 100vh;
`;

export const Sections = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: lightsalmon;
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; // firefox
  &::-webkit-scrollbar {
    display: none; // others
  }
  > * {
    width: 100vw;
    height: calc(100vh - 70px);
    scroll-snap-align: start;
  }
`;
