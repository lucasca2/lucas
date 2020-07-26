import React from "react"
import MainLayout from "layout/MainLayout";

import Header from 'components/Header';
import SectionExperience from 'sections/Home/SectionExperience';

const IndexPage: React.FC = () => (
  <MainLayout>
    <SectionExperience />
    {/*<SEO title="Home" />*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
    {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
  </MainLayout>
)

export default IndexPage
