// after if throw new Error(`its should be 10 ands its now ${result}. so something worng`)

const genareteGreeding = (name) => `hello ${name}`;

const add = (a, b ) => a + b;

test('its Should be a + b ', () => {
    const result = add(3, 4)

       expect(result).toBe(7)

});

test('its Should be israel', () => {
    const hello = genareteGreeding("mike");
    expect(hello).toBe('hello mike')
})