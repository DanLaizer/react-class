import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('Poll SubmitButton', () => {
    it('renders without problems', () =>  {
        var pollSubmitButton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect (pollSubmitButton).toEqual(jasmine.anything());
    });
}
);
