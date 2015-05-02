/* global describe, it */
// import helpers
import should from 'turris-test-helpers';

// imports
import TestComp from '../index.js';

describe('Component', function() {
    it('Should render', function() {
        const React = this.React;
        const TestUtils = this.TestUtils;

        // render
        var comp = TestUtils.renderIntoDocument(
            <TestComp />,
            this.container
        );
    });
});
