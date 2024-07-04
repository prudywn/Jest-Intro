// const sum = require('./sum')
     //toBe()
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3)
// })

   //toEqual()
// test('object assignment', () => {
//     const data = { one: 1}
//     data['two'] = 2
//     expect(data).toEqual({one: 1, two: 2})
// })

     //toBeTruthy() || toBeFalsy()
// test('null is falsy', () => {
//     const n = null
//     expect(n).toBeFalsy()
// })

     //toThrow()
// test('throw on invalid input', () => {
//     expect(() => {
//         myFunction(invalidInput)
//     }).toThrow()
// })


    //Asychronous code
// const fetchData = require('./sum')
// test('the data is peanut butter', done => {
//     function callback(data){
//         try{
//         expect(data).toBe('peanut butter')
//         done()
//         }catch(e){
//             done(e)
//         }
//     }
//     fetchData(callback)
// })

//    Promise Based function
// const fetchPromise = require('./sum')
// test('The data is Hello World!', () => {
//     return expect(fetchPromise()).resolves.toBe('Hello World!')
// })

// test('The fetch fails', () => {
//     return expect(fetchPromise()).rejects.toThrow('error')
// })


     //Async Await
// const fetchPromise = require('./sum')

// test('The data is Hello World!', async () => {
//     const data = await fetchPromise()
//     expect(data).toBe('Hello World!')
// })


     //MOCKS & SPIES
// --used to isolate the unit of code being tested
// --prevents code from being affected  
// --used to test the code without the actual implementation

/* test('mock implementation of a basic function', () => {
    const mockCallback = jest.fn(x => 42 + x)
    expect(mockCallback(4)).toBe(46)
    expect(mockCallback).toHaveBeenCalledWith(4) //make sure wat mock has been called with
}) */

test('spying on a method of an object', () => {
    const video = {
        play() {
            return true
        }
    }
    const spy = jest.spyOn(video, 'play')
    video.play()
    expect(spy).toHaveBeenCalled() //validates spy functionality if it has been called 
    spy.mockRestore() //restore original implementation of function
})