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

function calculatesFarePrice(n1, n2) {
    if (distanceTravelledInFeet(n1, n2) < 400) {
        return 0
    } else if ((distanceTravelledInFeet(n1, n2) >= 401 && distanceTravelledInFeet(n1, n2) <= 2000)) {
        const getFare = (distanceTravelledInFeet(n1, n2) - 400) * 0.02
        return getFare
    } else if ((distanceTravelledInFeet(n1, n2) >= 2001 && (distanceTravelledInFeet(n1, n2) <= 2500))){
        return 25
    } else {
    return 'cannot travel that far'
    }
}