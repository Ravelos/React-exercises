describe("Test in demo component", () => {
 
    test("This test must not fail", () => {
    const message1 = "Hello test";

    const message2 = message1.trim();

    expect(message1).toBe(message2);
    
    });
    
});
