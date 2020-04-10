import { pikachu } from './ex02 - PikaChu'

test('when the number is not divisible by 3 and 5, say the number', () => {
    expect(pikachu(2)).toBe(2)
})

test('when the number is divisible by 3 and not divisible by 5, say Pika', () => {
    expect(pikachu(3)).toBe('Pika')
})


test('when the number is divisible by 3 and 5, say  Pikachu', () => {
    expect(pikachu(15)).toBe('PikaChu')
})

test('when the number is divisible by 5 not divisible by 3, say  Chu', () => {
    expect(pikachu(20)).toBe('Chu')
})

