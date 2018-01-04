/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    // Exclude chartist packages (they break the build because of using the
    // 'window' object.
    config.loader('null', {
      test: /chartist/,
      loader: 'null-loader'
    });
  }
};