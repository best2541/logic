function createCheckDigit(membershipId) {
    // Write the code that goes here.
    const raw = membershipId.split('')
    let convertInt = raw.reduce((prev, curr) => prev + parseInt(curr), 0)
    for (let i = String(convertInt).split('').length; i > 1; i--) {
        const sumArray = String(convertInt).split('')
        console.log('sum' + sumArray, 'result', sumArray.reduce((prev, curr) => prev + parseInt(curr), 0))
        convertInt = sumArray.reduce((prev, curr) => prev + parseInt(curr), 0)
    }
    return convertInt
}

console.log(createCheckDigit("55555555555555555555555555555555555555"));
