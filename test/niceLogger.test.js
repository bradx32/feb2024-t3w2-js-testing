// Import a specific function from the file
const {niceLogger, messageRepeater} = require("../src/niceLogger.js");



// Import the file 
const niceLoggerFile = require("../src/niceLogger.js");
// Import a specific function from the file
const niceLoggerFunction = niceLoggerFile.niceLogger;

describe("niceLogger function tests", () => {
});

describe("niceLogger function tests", () => {
	test("niceLogger returns Hello world!", () => {

		expect(niceLogger()).toBe("Hello world!");
	});	

	test("niceLogger returns Hello world!", () => {

		expect(niceLogger()).toBe("Hello world!");
	});	

	test("niceLogger returns Hello world!", () => {

		expect(niceLogger()).toBe("Hello world!");
	});	

	test("niceLogger returns Hello world!", () => {

		expect(niceLogger()).toBe("Hello world!");
	});	
});

describe("niceLogger function tests", () => {

    test("messageRepeater repeates words correctly", () => {
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toEqual("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
    });

    test("messageRepeater repeates numbers correctly", () => {
        let repeatedMessage = messageRepeater(["hello", "world"]);
        console.log(repeatedMessage);
        expect(repeatedMessage).toEqual(["hello", "world", "hello", "world", "hello", "world"]);
        expect(repeatedMessage).toHaveLength(6);

    });

    test("messageRepeater repeates arrays correctly", () => {

    });

    test("messageRepeater repeates null or whitespace correctly", () => {
        let repeatedMessage = messageRepeater("");

        expect(repeatedMessage).toEqual("");
        expect(repeatedMessage).toHaveLength(0);
    });
});
    
    