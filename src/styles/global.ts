import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  theme: {
    background: string;
    mainColor: string;
    secondaryColor: string;
    tertiaryColor: string;
  };
}

export default createGlobalStyle`
  :root {
    /* --mainColor: #15023a; */
    --background: ${(props: ThemeProps) => props.theme.background};
    --mainColor: ${(props: ThemeProps) => props.theme.mainColor};
    --secondaryColor: ${(props: ThemeProps) => props.theme.secondaryColor};
    --tertiaryColor: ${(props: ThemeProps) => props.theme.tertiaryColor};
  }
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    transition: all 1s ease;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720) {
    html {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--backgroundDark);
    color: var(--mainColor);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
