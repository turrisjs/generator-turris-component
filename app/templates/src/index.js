// react
import React from 'react';
// template
import Template from './template.jsx';

// create component
const <%= _.capitalize(_.camelCase(name)) %>Component = React.createClass({
    // initilize state
    getInitialState() {
        // return state
        return {
        };
    },
    render: Template,
});

export default <%= _.capitalize(_.camelCase(name)) %>Component;
