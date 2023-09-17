function ensure(value) {
    // Your code goes here
    if (!value)
        throw new Error('failed')
    else
        return value
}

try {
    console.log(ensure());
} catch (err) {
    console.log(err);
}