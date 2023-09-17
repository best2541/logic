const ob = {
    pet: {
        dog: 'same',
        cat: 'pp'
    }
}

function removeProperty(obj, prop) {
    if (prop in obj) {
        delete obj[prop]
        return true
    } else {
        return false;
    }
}

removeProperty(ob, 'pet')
