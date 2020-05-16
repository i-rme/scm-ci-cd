test("Testing Worker Definition", function (assert) {
    assert.equal(typeof handleRequest, "function", "The main function is defined");
    assert.equal(typeof handleRequest(''), "object", "The main function returns an object");
});

test("Testing Worker Async", function (assert) {
    assert.equal(handleRequest.constructor.name, "AsyncFunction", "The main function is asynchronous");
});