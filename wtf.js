const simulate = (entries) => {
    // Write your code here
    let result = []
    for (let i = 0; i < entries.length; i++) {
        let X = entries[i]
        let T = entries[i - 3]
        let TT = entries[i + 4]
        if (T >= X || TT >= X)
            result.push(0)
        else
            result.push(X)
    }
    return result;
}

const records = [1, 2, 0, 5, 0, 2, 4, 3, 3, 3];
console.log(simulate(records));
  // Expected output
  // [1, 0, 0, 5, 0, 0, 0, 3, 3, 0]