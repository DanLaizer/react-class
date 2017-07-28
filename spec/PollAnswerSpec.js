import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../src/components/RadioButton.js';

describe('Radio Button', () => {
    var component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <RadioButton label="Answer" />
        );
    });

    it('renders without problems', () =>  {
        var radioButton = TestUtils.renderIntoDocument(<RadioButton />);
        expect (radioButton).toEqual(jasmine.anything());
    });

    it('prints an answer', () => {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component, 'span')
            .textContent;
        var expected = 'Answer';
        expect(actual).toEqual(expected);
    });
}
);
