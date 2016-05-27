
var app = require('../js/app.js');

describe("A suite", function() {
    it("Hello World", function() {
        //prepare
        var result;
        //act
        result = app.sayHello("World!");
        //assert
        expect(result).toBe("Hello, World!");
    });


    it("Pow not equal", function() {
        //prepare
        var result;
        //act
        result = app.pow(1,2);
        //assert
        expect(result).toEqual(3);
    });

    it("Pow equal", function() {
        //prepare
        var result;
        //act
        result = app.pow(1,2);
        //assert
        expect(result).toEqual(1);
    });
    it("Pow undefined", function() {
        //prepare
        var result;
        //act
        result = app.pow("asdasd",2);
        //assert
        expect(result).toBeUndefined;
    });
    it("Pow not undefined", function() {
        //prepare
        var result;
        //act
        result = app.pow(1,2);
        //assert
        expect(result).not.toBeUndefined;
    });

});

