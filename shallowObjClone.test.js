const shallowObjClone = require('./shallowObjClone')

test('Create a clone of the object parameter', () => {
    const myObj = { person: 'Cycler', number: 40 }
    expect(shallowObjClone(myObj)).toStrictEqual(myObj)
})