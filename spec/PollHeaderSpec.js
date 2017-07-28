import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader.js';
import TestWrapper from '../src/components/TestWrapper';

describe('Poll Header', () => {
    var component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollHeader text="Welcome to the Poll!" />
            </TestWrapper>
        );
    });

    it('renders without problems', () =>  {
        expect (component).toEqual(jasmine.anything());
    });

    it('prints a message', () => {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h1')
            .textContent;
        var expected = 'Welcome to the Poll!';
        expect(actual).toEqual(expected);
    });
}
);
