import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';
import TestWrapper from '../src/components/TestWrapper';

describe('Poll SubmitButton', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton/>
            </TestWrapper>
        );
    });

    it('renders without problems', () =>  {
        expect (component).toEqual(jasmine.anything());
    });
}
);
