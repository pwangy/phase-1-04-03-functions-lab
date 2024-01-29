function distanceFromHqInBlocks(n) {
    if ( n < 42) {
        return 42-n
    } else {
        return n-42
    }
}

function distanceFromHqInFeet(n) {
    return distanceFromHqInBlocks(n) * 264
}