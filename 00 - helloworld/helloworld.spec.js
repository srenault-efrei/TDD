import { helloWorld } from './helloworld'

describe('Edge Cases', () => {
    test('When no params, say Hello World', () => {
        expect(helloWorld('')).toBe('Hello, World');
    });
    
    test('say something special when receving a param', () => {
        expect(helloWorld('Majdi')).toBe('Yooooo!');
    });
})


test('return with full sence', () => {
    expect(helloWorld('steven')).toBe(`Hello, steven`);
});