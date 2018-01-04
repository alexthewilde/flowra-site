import React from 'react'
import Link from 'gatsby-link'
import { Grid } from 'react-flexbox-grid';

import './index.scss';

// Sections
import HeroSection from './../components/hero-section'

const IndexPage = () => (
  <Grid id="intro">
    <HeroSection />
  </Grid>
);

export default IndexPage
