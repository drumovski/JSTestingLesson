
// Function named "calculateSum""
// What should it do?
// check if args were numbers 
// it should add all numbers together 
// array -> single number ??? how ?? 
// use reduce / or loop through input 

// What should the function output or return?
// function output can be whole or decimal numbers

// What should the function take in, if anything?
// array of numbers /

// calculateSum([1,2,3,4]) // good!!


// calculateSum(1,2,3,4) // bad!!

// calculateSum("1", 2, 3, 4) // bad!!

// calculateSum("1", "2","3", "4") // very bad!!!

var {calculateSum} = require('../source/calculateSum') 

describe('calculateSum input functionality', () => {
    test('should only accept an array as input args', () => {
        expect(() => {
            calculateSum([1,2,3,4])
        }).not.toThrow();

        expect(() => {
            calculateSum("hello", "world")
        }).toThrow();

        expect(() => {
            calculateSum([])
        }).not.toThrow()

        expect(() => {
            calculateSum(["1", 2, "3", 4])
        }).toThrow("Should not accept string type input")

        expect(() => {
            calculateSum();
        }).toThrow();

        // expect(() => {
        //     calculateSum("[1,2,3,4]")
        // }).toThrow("a string, not an array was passed in")
    })

    // worth knowing what we DONT want
    // test("calculateSum accepts one num", () => {
    //     expect(() => {
    //         calculateSum(1);
    //     }).not.toThrow();
    // });
    
    test('should only generate numbers as output', () => {
        // expect(() => {
        //     calculateSum([1,2,3,4,5])
        // }).toEqual(15);
        expect(calculateSum([1,2,3,4,5])).toEqual(15);

        expect(calculateSum([1.5,2.5,3.5])).toEqual(7.5);
    })
    
})
