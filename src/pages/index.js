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

import Img from 'gatsby-image';

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
    return <Grid fluid id="intro">
        <HeroSection bgImg={this.props.data.heroBg} />
        <ProblemSection />
        <PracticeSection bgImg={this.props.data.practiceBg} />
        <AppSection />
        <FeaturesSection />
        <PersonasSection bgImg={this.props.data.personasBg} />
      </Grid>;
  }
}

export default IndexPage

export const query = graphql`
  query IntroPageQuery {
    heroBg: imageSharp(id: { regex: "/aurora-borelias/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    practiceBg: imageSharp(id: { regex: "/instruments/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    personasBg: imageSharp(id: { regex: "/concert/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`;
