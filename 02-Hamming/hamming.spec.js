import { hamming } from './hamming'

describe('Hamming', () => {

    test("it returns the hamming between 2 strings", () => {

        expect(hamming("A00X0B", "A00X1B")).toBe(-1)
        expect(hamming("ABC", "ABC")).toBe(-1)
        expect(hamming("AB", "AA")).toBe(-1)
        expect(hamming("ABC", "XBY")).toBe(-1)
        expect(hamming("ACGT", "ATCG")).toBe(3)
        expect(hamming("ZER", "KOR")).toBe(-1)
    })

})

describe('Exception', () => {

    test("Exception lenght string don't match", () => {
        expect(() => {
            hamming('AD', "SDDDDD");
        }).toThrow("String length don't match!")
    })


    test("Exception when Strings are too long > 10", () => {
        expect(() => {
            hamming('AAAAAAAAAA', "BBBBBBBBBB");
        }).toThrow("Strings too long!")


    })


})
