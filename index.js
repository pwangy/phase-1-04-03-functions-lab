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
    const distance = distanceTravelledInFeet(n1, n2)

    if (distance < 400) {
        return 0
    } else if (distance >= 401 && distance <= 2000) {
        return ((distance - 400) * 0.02)
    } else if (distance >= 2001 && distance <= 2500) {
        return 25
    } else {
    return 'cannot travel that far'
    }
}