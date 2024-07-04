const { add } = require('./calculator')
const  { subtract} = require('./calculator')

test('10 + 7 is 17', () => {
    expect(add(10, 7)).toBe(17)
})
test('10 - 7 is 3', () => {
    expect(subtract(10, 7)).toBe(3)
})

