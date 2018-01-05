/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    // Exclude these packages (they break the build because of using the
    // 'window' or 'document' object.
    config.loader('null', {
      test: /chartist|plyr/,
      loader: 'null-loader'
    });
  }
};