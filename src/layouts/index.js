import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './../css/base.scss'
import './../css/styles.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Flowra"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
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
