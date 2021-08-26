import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      "800": "#F05454",
      "50": "#DA7F8F",
    },
    white: {
      "200": "#E1E5EA",
      "100": "#FAF3F3",
      "50": "#EEEEEE",
    },
    gray: {
      "800": "#222831",
      "500": "#393E46",
    },
    green: {
      "200": "#A7BBC7",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "red.800",
        color: "gray.50",
      },
    },
  },
});
