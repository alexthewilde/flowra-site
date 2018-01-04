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
import PersonasSection from './../components/personas-section';

const IndexPage = () => (
  <Grid id="intro">
    <HeroSection />
    <ProblemSection />
    <PracticeSection />
    <AppSection />
    <FeaturesSection />
    <PersonasSection />
  </Grid>
);

export default IndexPage

window.is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
window.is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
window.is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
window.is_safari = navigator.userAgent.indexOf('Safari') > -1;
window.is_opera = navigator.userAgent.indexOf('Presto') > -1;
window.is_mac = navigator.userAgent.indexOf('Mac OS') !== -1;
window.is_windows = !is_mac;
if (window.is_chrome && window.is_safari) {
  window.is_safari = false;
}

window.document.addEventListener('DOMContentLoaded', function() {
  let trigger;
  const body = document.querySelector('body');
  if (window.is_chrome) {
    body.className += ' chrome';
  }
  if (window.is_safari) {
    body.className += ' safari';
  }
  if (window.is_firefox) {
    body.className += ' firefox';
  }
  if (window.is_explorer) {
    body.className += ' ie';
  }

  //
  // Scroll animations
  //

  // return (trigger = new ScrollTrigger(
  //   {
  //     offset: {
  //       x: 0,
  //       y: 100
  //     },
  //     once: true
  //   },
  //   document.body,
  //   window
  // ));

  // DISABLED onScroll callback
  // callback = (scrollLeft, scrollTop, width, height) ->
  //   checkSticky()

  // trigger.attach(callback)
});

