import React from 'react';
import GlobalStyles from "./src/styles/global";

export default ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}
