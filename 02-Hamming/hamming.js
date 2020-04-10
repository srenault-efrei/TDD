

export function verifLetter(letter) {
    return 'A' === letter || 'T' === letter || 'C' === letter || 'G' === letter
}


export function hamming(firstParam, secondParam) {
    let hamming = 0;

    if (firstParam.length !== secondParam.length) {
        throw Error("String length don't match!")
    }
    if ((firstParam.length >= 10) || (secondParam.length >= 10)) {
        throw Error("Strings too long!")
    }


    for (const index in firstParam) {
        if ((verifLetter(firstParam[index])) && verifLetter(secondParam[index])) {
            if (firstParam[index] !== secondParam[index]) {
                hamming++
            }
        } else {
            hamming = -1
        }

    }



    return hamming
}

