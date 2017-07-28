import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader.js';

describe('Poll Header', () => {
    var component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <PollHeader text="Welcome to the Poll!" />
        );
    });

    it('renders without problems', () =>  {
        var pollHeader = TestUtils.renderIntoDocument(<PollHeader />);
        expect (pollHeader).toEqual(jasmine.anything());
    });

    it('prints a message', () => {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h1')
            .textContent;
        var expected = 'Welcome to the Poll!';
        expect(actual).toEqual(expected);
    });
}
);
