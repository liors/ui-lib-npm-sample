var UI = require('editor-ui-lib');
var React = require('react');

var app = React.createClass({
    displayName: "HelloMessage",
    render: function render() {
        return React.createElement(
            UI.checkbox,
            { label: "Check me..." , onChange: this.onChange}
        );
    },
    onChange: function (val) {
        debugger;
    }
});

React.render(React.createElement(app), document.getElementById('app'));