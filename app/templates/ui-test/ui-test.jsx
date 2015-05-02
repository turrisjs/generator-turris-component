import 'bootstrap';
import React from 'react';
import Page from './page.jsx';

const testInstance = (
    <Page />
);

const render = () => React.render(testInstance, document.getElementById('react'));

render();
