var container = require('container');
var React = require('react');

var App = React.createClass({
  displayName: 'App',
  contextTypes: {
    baseURL: React.PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement('h1', null, this.context.baseURL);
  }
});

var Container = container(App);

React.render(React.createElement(Container), document.getElementById('app'));
