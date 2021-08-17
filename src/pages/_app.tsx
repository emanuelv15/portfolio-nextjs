import { AppProps } from "next/app";
import { useState } from "react";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(false);

  const light = {
    background: "#E1E5EA",
    mainColor: "#DA7F8F",
    secondaryColor: "#A7BBC7",
    tertiaryColor: "#FAF3F3",
  };

  const dark = {
    background: "#222831",
    mainColor: "#EEEEEE",
    secondaryColor: "#F05454",
    tertiaryColor: "#393E46",
  };

  return (
    <>
      <GlobalStyle theme={theme === true ? dark : light} />
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
    </>
  );
}

export default MyApp;
