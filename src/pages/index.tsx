import React from "react"
import MainLayout from "layout/MainLayout";

import Header from 'components/Header';
import SectionExperience from 'sections/Home/SectionExperience';
import SectionWorks from 'sections/Home/SectionWorks';
import SectionInspirations from 'sections/Home/SectionInspirations';

const IndexPage: React.FC = () => (
  <MainLayout>
    <SectionExperience />
    <SectionWorks />
    <SectionInspirations />
    {/*<SEO title="Home" />*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
    {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
  </MainLayout>
)

export default IndexPage
