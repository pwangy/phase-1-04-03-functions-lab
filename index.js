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

function distanceTravelledInFeet(n1, n2) {
    if (n2 < n1) {
        return (n1-n2)*264
    } else {
    return (n2-n1)*264
    }
}