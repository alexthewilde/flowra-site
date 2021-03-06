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
import AlexVideoSection from './../components/alex-video-section';
import IntroVideoSection from './../components/intro-video-section';
import OpenCallout from './../components/open-callout';
import PersonasSection from './../components/personas-section';
import FooterSection from './../components/footer-section'

import Img from 'gatsby-image';

class IndexPage extends React.Component {
  componentDidMount() {
    var trigger = new ScrollTrigger({
      offset: {
        x: 0,
        y: 100
      },
      once: true
    }, document.body, window)

    // Custom scroll callbacks
    var scope = {};
    scope.playVideo = function(value) {
      this.play()
    }

    trigger.callScope = scope;
  }

  render() {
    return <Grid fluid id="intro">
        <HeroSection bgImg={this.props.data.heroBg} />
        <AlexVideoSection />
        <IntroVideoSection />
        <PersonasSection bgImg={this.props.data.personasBg} />
        <ProblemSection />
        <AppSection />
        <PracticeSection />
        <OpenCallout />
        <FooterSection />
      </Grid>;
  }
}

export default IndexPage

export const query = graphql`
  query IntroPageQuery {
    heroBg: imageSharp(id: { regex: "/instruments/" }) {
      sizes(maxWidth: 1400, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    personasBg: imageSharp(id: { regex: "/concert_bg/" }) {
      sizes(maxWidth: 1400, quality: 90) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`;
