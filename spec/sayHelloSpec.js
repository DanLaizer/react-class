// import * as sayHello from '../src/scripts/sayHello.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../src/scripts/SayHello.js';


describe('Greet', function() {
    it('renders without problems', () =>  {
        var sayhello = TestUtils.renderIntoDocument(<SayHello />);
        expect (sayhello).toEqual(jasmine.anything());
    });
    // it('concats Hello and a name', () => {
    //     var actual = sayHello.greet('World');
    //     var expected = 'Hello, World';
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('returns Hello Friend! when no name is provided', () => {
    //     var actual = sayHello.greet();
    //     var expected = 'Hello, Friend!';
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('returns Hello Frield! when no an empty string is provided', () => {
    //     var actual = sayHello.greet('');
    //     var expected = 'Hello, Friend!';
    //     expect(actual).toEqual(expected);
    // });
});

// describe('Greet Time Of Day', () => {
//     it('returns Good morning! if time is before 12', () => {
//         var actual = sayHello.greetTimeOfDay(11);
//         var expected = 'Good morning!';
//         expect(actual).toEqual(expected);
//     });
//
//     it('returns Good afternoon! if time is 12 or greater and less than 20', () => {
//         var actual = sayHello.greetTimeOfDay(15);
//         var expected = 'Good afternoon!';
//         expect(actual).toEqual(expected);
//     });
//
//     it('returns Good evening! if time is 20 or greater', () => {
//         var actual = sayHello.greetTimeOfDay(20);
//         var expected = 'Good evening!';
//         expect(actual).toEqual(expected);
//     });
//
// });
