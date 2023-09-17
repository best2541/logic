const ob = {
    pet: {
        dog: 'same',
        cat: 'pp'
    }
}

function removeProperty(obj, prop) {
    if (obj[prop]) {
        delete obj[prop]
        return true
    } else {
        return false;
    }
}

removeProperty(ob, 'pet')