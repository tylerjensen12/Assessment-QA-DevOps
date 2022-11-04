const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    // CODE HERE
    test('if its the same length', () => {
        expect(shuffleArray(bots).length).toEqual(shuffleArray(bots).length)
    })

    test('if it returns an array shuffled', () => {
        expect(shuffleArray(bots)).not.toEqual(shuffleArray(bots))
    })
})