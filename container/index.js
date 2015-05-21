var React = require('react');

module.exports = function container(App) {
  return React.createClass({
    displayName: 'Container',
    childContextTypes: {
      baseURL: React.PropTypes.string.isRequired
    },
    getChildContext: function () {
      return {baseURL: '/some/base/url'};
    },
    render: function () {
      return React.createElement(App);
    }
  });
};
