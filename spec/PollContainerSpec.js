import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollContainer from '../src/containers/PollContainer.js';

describe('Poll Container', () => {
    it('renders without problems', () =>  {
        var pollContainer = TestUtils.renderIntoDocument(<PollContainer />);
        expect (pollContainer).toEqual(jasmine.anything());
    });
}
);
