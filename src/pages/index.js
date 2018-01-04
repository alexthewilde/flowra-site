import React from 'react'
import Link from 'gatsby-link'
import { Grid } from 'react-flexbox-grid';

import './index.scss';

// Sections
import HeroSection from './../components/hero-section'
import ProblemSection from './../components/problem-section';
import PracticeSection from './../components/practice-section';
import AppSection from './../components/app-section';
import FeaturesSection from './../components/features-section';

const IndexPage = () => (
  <Grid id="intro">
    <HeroSection />
    <ProblemSection />
    <AppSection />
    <FeaturesSection />
  </Grid>
);

export default IndexPage
