import React from 'react'
import Link from 'gatsby-link'
import { Grid } from 'react-flexbox-grid';

import './index.scss';

// Sections
import HeroSection from './../components/hero-section'
import ProblemSection from './../components/problem-section';

const IndexPage = () => (
  <Grid id="intro">
    <HeroSection />
    <ProblemSection />
  </Grid>
);

export default IndexPage
