import React from "react"
import SectionExperience from 'sections/Home/SectionExperience';
import SectionWorks from 'sections/Home/SectionWorks';
import SectionInspirations from 'sections/Home/SectionInspirations';

const IndexPage: React.FC = () => (
  <>
    <SectionExperience />
    <SectionWorks />
    <SectionInspirations />
    {/*<SEO title="Home" />*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
  </>
)

export default IndexPage
