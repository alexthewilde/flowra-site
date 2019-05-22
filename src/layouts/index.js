import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './../css/styles.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Flowra | Practice songs with inspiration"
      meta={[
        { name: 'description', content: 'Take your song performance to the next level. Grow from mediocre to stellar performer.' },
        { name: 'keywords', content: 'practice, performer, singer, loop, record, YouTube, cover version' },
        { name: 'theme-color', content: '#222233' }
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.0.2/css/all.css'
        }
      ]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
