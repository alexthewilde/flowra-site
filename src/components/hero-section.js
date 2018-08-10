import React from 'react';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';

import './hero-section.scss'

import logoTransparent from '../images/flowra-logo-transparent.png'
import logoWhite from '../images/flowra-logo-white.png'

if (typeof window !== 'undefined') {
  // Pollyfill (required for Safari)
  require('smoothscroll-polyfill').polyfill();
}

class HeroSection extends React.Component {
  watchVideo() {
    document.querySelector('#start').scrollIntoView({
      // Scroll exactly to top of target element
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }

  render() {
    return <Row id="intro-hero" center="xs" middle="xs">
        <Img sizes={this.props.bgImg.sizes} outerWrapperClassName="bgImg" />
        <div className="logo-wrapper">
          <svg
            className="logo"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={228.25}
            height={51}
            viewBox="0 0 228.25 51"
          >
            <g fill="#FFF" stroke="#FFF" strokeMiterlimit={10}>
              <path id="text" d="M66.523 47.25V23.551h-4.919v-6.54h4.919v-1.5c0-4.62.96-7.08 3.3-8.939 1.62-1.32 4.08-1.98 7.5-1.98 1.2 0 2.22.06 3.12.24v6.18c-.54-.18-1.5-.3-2.76-.3-2.7 0-3.96 1.2-3.96 4.26v2.04h5.7v6.54h-5.7V47.25h-7.2zM82.723 5.432h7.2v31.919c0 2.939.96 4.2 3.6 4.2.84 0 1.56-.061 2.16-.24v6.42c-.84.239-1.98.359-3.42.359-6.359 0-9.54-3.24-9.54-9.779V5.432zM97.543 32.131c0-4.5 1.619-8.34 4.8-11.4 3.18-3.06 7.079-4.62 11.699-4.62s8.52 1.56 11.699 4.62c3.18 3.06 4.8 6.9 4.8 11.4s-1.62 8.34-4.8 11.399-7.079 4.62-11.699 4.62-8.52-1.561-11.699-4.62c-3.181-3.059-4.8-6.899-4.8-11.399zm23.158 6.779c1.801-1.859 2.7-4.08 2.7-6.779 0-2.7-.899-4.92-2.7-6.72-1.8-1.86-4.02-2.76-6.659-2.76-2.7 0-4.92.9-6.72 2.76-1.74 1.8-2.64 4.02-2.64 6.72 0 2.699.899 4.92 2.64 6.779 1.8 1.801 4.02 2.7 6.72 2.7 2.64 0 4.859-.899 6.659-2.7zM142.002 49.17l-12.419-32.159h7.079l6.42 17.04 8.46-17.819 8.399 17.819 6.42-17.04h7.079L161.021 49.17l-9.479-19.619-9.54 19.619zM174.942 47.25V26.431c0-6.839 3.72-10.259 11.22-10.259 2.04 0 3.78.18 5.28.48v6.419c-1.141-.24-2.4-.36-3.78-.36-3.78 0-5.58 1.08-5.58 5.1V47.25h-7.14zM216.761 21.391v-4.38h7.2V47.25h-7.2v-4.38c-1.02 2.94-4.68 5.04-9.659 5.04-4.26 0-7.86-1.5-10.8-4.5-2.88-3.061-4.319-6.779-4.319-11.279s1.439-8.22 4.319-11.22c2.939-3.06 6.54-4.56 10.8-4.56 4.979 0 8.639 2.1 9.659 5.04zm-2.16 17.339c1.801-1.74 2.7-3.96 2.7-6.6 0-2.641-.899-4.859-2.7-6.6-1.739-1.74-3.959-2.64-6.539-2.64s-4.68.9-6.42 2.64c-1.68 1.74-2.52 3.959-2.52 6.6 0 2.64.84 4.859 2.52 6.6 1.74 1.74 3.84 2.64 6.42 2.64s4.799-.899 6.539-2.64z" />
            </g>
            <defs>
              <path
                id="starflower"
                d="M36.171 40.004l-9.463-4.887.002-.055c-.229 2.967-.04 6.236 1.246 8.862.689 1.41 1.75 2.544 3.028 3.362 3.023 1.762 7.016 1.645 10.125-.618 4.148-3.014 5.162-8.684 2.268-12.671a13.653 13.653 0 0 0-1.444-1.635c-2.761.08-5.287-.634-7.436-1.629l1.674 9.271zm-25.187-6.61c-1.455 1.421-2.29 3.306-2.483 5.28-.144 2.995 1.227 6.05 3.904 7.995 4.148 3.011 9.855 2.227 12.75-1.758.396-.547.794-1.23 1.173-2.001-.878-2.488-1.009-4.985-.776-7.253l-8.207 4.232 1.919-10.492-.027-.03c-2.96.708-6.108 1.923-8.253 4.027M6.167 15.268a9.551 9.551 0 0 0-2.631 4.102c-1.587 4.875.925 10.062 5.611 11.584.671.218 1.478.389 2.369.511 2.133-1.629 4.529-2.527 6.793-2.996l-6.615-6.403 10.242-1.423c-1.648-2.556-3.843-5.121-6.539-6.444a8.3 8.3 0 0 0-3.672-.844c-1.97 0-3.945.672-5.558 1.913m32.464-1.969c-.562.183-1.183.448-1.836.777-.793 2.737-2.311 4.972-3.981 6.736l9.006 1.253-7.567 7.332.006.04c2.792 1.203 6.044 2.108 9.02 1.703a8.087 8.087 0 0 0 1.942-.518c4.128-1.842 6.243-6.681 4.758-11.253-1.285-3.957-4.877-6.493-8.688-6.494a8.63 8.63 0 0 0-2.66.424M26.757 2.5c-5.125 0-9.279 3.992-9.279 8.917 0 .84.122 1.848.348 2.94 2.051 1.446 3.569 3.301 4.69 5.169l4.244-8.424 4.78 9.495c1.925-2.155 3.726-4.791 4.379-7.577.078-.582.118-1.123.118-1.604 0-4.924-4.154-8.916-9.28-8.916z"
              />
            </defs>
            <use xlinkHref="#starflower" overflow="visible" fill="#FFF" />
          </svg>
        </div>

        <Col className="content" xs={12}>
          <h1 className="headline" data-scroll="toggle(.hidden, .fadeIn)">
            <div className="fadeIn">Practice music in flow.</div>
          </h1>

          <Row className="ctas" center="xs" middle="xs">
            <Col xs={12} sm={6} first="xs" first="md" className="end-sm">
              <a className="btn cta primary" onClick={this.watchVideo}>
                watch video
              </a>
            </Col>
            <Col xs={12} sm={6} last="xs" last="md" className="start-sm">
              <a href="https://www.flowra.com/go" className="btn cta light">
                open flowra
              </a>
            </Col>
          </Row>
        </Col>

        <a className="scroll" onClick={this.watchVideo}>
          <span />
        </a>
      </Row>;
  }
}

export default HeroSection;
