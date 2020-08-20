import React from 'react';
import GlobalStyles from "./src/styles/global";
import MainLayout from "./src/layout/MainLayout"

export default ({ element, props: { uri } }) => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        {element}
      </MainLayout>
    </>
  )
}
