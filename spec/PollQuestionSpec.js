import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion.js';

describe('Poll Question', () => {

    var component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <PollQuestion text="This is a test question?" />
        );
    });

    it('renders without problems', () =>  {
        var pollQuestion = TestUtils.renderIntoDocument(<PollQuestion />);
        expect (pollQuestion).toEqual(jasmine.anything());
    });

    it('prints a question', () => {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h2')
            .textContent;
        var expected = 'This is a test question?';
        expect(actual).toEqual(expected);
    });

}
);
