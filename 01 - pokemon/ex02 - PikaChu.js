export const pikachu = function (number) {
    let divisibleByThree = number % 3 === 0;
    let divisibleByFive = number % 5 === 0;



    if (divisibleByThree && !divisibleByFive) {
        return "Pika"
    } else if (!divisibleByThree && divisibleByFive) {
        return "Chu"
    } else if (divisibleByFive && divisibleByThree) {
        return "PikaChu"
    }
    return number;

};
