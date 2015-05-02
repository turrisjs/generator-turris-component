// react
import React from 'react';

const render = function() {
    return (
        <div className="<%= _.camelCase(name) %>-component">
          I am standalone <%= name %> component
        </div>
    );
};

export default render;
