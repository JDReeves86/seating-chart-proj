const shuffle = (arr) => {
    let m = arr.length, t, i

    while (m) {
        i = Math.floor(Math.random() * m--)
        t = arr[m]
        arr[m] = arr[i]
        arr[i] = t
    }
    return arr
}

const checkRestrictions = (arr) => {
    const sortedArr = arr.map((el, i) => {
        console.log(el.restrictions)
        if (el.restrictions === {}) {
            console.log('no restrictions')
        }
        console.log('restriction present')
    })
}

module.exports ={ 
    shuffle,
    checkRestrictions
}