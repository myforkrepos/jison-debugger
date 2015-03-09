'use strict';

/** @jsx React.DOM */

var React = window.React = require('react');
var Editor = require("./ui/Editor");
var GrammarView = require("./ui/GrammarView");
var ParserOutputView = require("./ui/ParserOutputView");

var mountNode = document.getElementById('app');

var App = React.createClass({
  render: function () {
    var liStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      paddingLeft: 5,
      paddingRight: 5
    };
    return (
        <ul style={{listStyleType: 'none'}}>
          <li style={liStyle}><Editor /></li>
          <li style={liStyle}>
            <div>
              <GrammarView />
              <ParserOutputView/>
            </div>
          </li>
        </ul>
    );
  }
});

React.render(<App />, mountNode);

