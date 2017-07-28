import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion.js';
import TestWrapper from '../src/components/TestWrapper';

describe('Poll Question', () => {

    var component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollQuestion text="This is a test question?" />
            </TestWrapper>
        );
    });

    it('renders without problems', () =>  {
        expect (component).toEqual(jasmine.anything());
    });

    it('prints a question', () => {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h2')
            .textContent;
        var expected = 'This is a test question?';
        expect(actual).toEqual(expected);
    });

}
);
