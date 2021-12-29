let testingFunctions = require('./functions')

test("returnTwo test", () => {
    expect(testingFunctions.returnTwo()).toEqual(2);
});

test("greeting test", () => {
    expect(testingFunctions.greeting("James")).toEqual("Hello, James"),
    expect(testingFunctions.greeting("Jill")).toEqual("Hello, Jill")
})

test("add test", () => {
    expect(testingFunctions.add(1, 2)).toEqual(3),
    expect(testingFunctions.add(5, 9)).toEqual(14)
})