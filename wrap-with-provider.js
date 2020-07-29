import React from "react"
import 'typeface-poppins';
import { ThemeProvider } from "styled-components";

// import light from "src/styles/themes/light";
import dark from "./src/styles/themes/dark";


export default ({ element }) => {
  return (
    <ThemeProvider theme={dark}>
      {element}
    </ThemeProvider>
  )
}
