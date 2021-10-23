const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('randomString')).toEqual("cbb4a64006378ec261840d39ab6cc76048f3dad16e19b7db508fb11ba4594c51")
    })

    it('generates the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    })
})