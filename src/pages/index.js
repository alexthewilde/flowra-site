import React from 'react'
import Link from 'gatsby-link'
import { Grid } from 'react-flexbox-grid';
import ScrollTrigger from 'scrolltrigger-classes';

import './index.scss';
import './../utils/detect-browser';

// Sections
import HeroSection from './../components/hero-section'
import ProblemSection from './../components/problem-section';
import PracticeSection from './../components/practice-section';
import AppSection from './../components/app-section';
import FeaturesSection from './../components/features-section';
import PersonasSection from './../components/personas-section';

class IndexPage extends React.Component {
  componentDidMount() {
    new ScrollTrigger({
      offset: {
        x: 0,
        y: 100
      },
      once: true
    }, document.body, window)
  }

  render() {
    return (
      <Grid fluid id="intro">
        <HeroSection />
        <ProblemSection />
        <PracticeSection />
        <AppSection />
        <FeaturesSection />
        <PersonasSection />
      </Grid>
    )
  }
}

export default IndexPage
