
var app = require('../js/app.js');

describe("Pow function",() => {
    it("Simple Jasmine test Hello World",() => {
        //prepare
        var result;
        //act
        result = app.sayHello("World!");
        //assert
        expect(result).toBe("Hello, World!");
    });

//'should failed if exponent not a number'
    it("Should failed, if test value not equal function result",() => {
        //prepare
        var result;
        //act
        result = app.pow(1,2);
        //assert
        expect(result).toEqual(3);
    });

    it("Should be true, function result equal test value",() => {
        //prepare
        var result;
        //act
        result = app.pow(1,2);
        //assert
        expect(result).toEqual(1);
    });
    it("Should failed, if exponent is undefined and test result not undefined",() => {
        //prepare
        var result;
        //act
        result = app.pow("asdasd",2);
        //assert
        expect(result).not.toBeUndefined();
    });
    it("Should failed, if function result is number and test result is undefined",() => {
        //prepare
        var result;
        //act
        result = app.pow(1,2);
        //assert
        expect(result).toBeUndefined();
    });

});

