function choiceDoorToRemove(correctDoor, choiceDoor){
    const doors = [1, 2, 3]
    return doors.find(door => door !== correctDoor && door !== choiceDoor)
}

function changeDoor(doorRemoved, choiceDoor){
    let generatedValue = Math.floor(Math.random() * 3) + 1

    while(generatedValue === doorRemoved || generatedValue === choiceDoor){
        generatedValue = Math.floor(Math.random() * 3) + 1
    }

    return generatedValue
}

function montyHallProblem(changeOption){
    let choiceDoor = Math.floor(Math.random() * 3) + 1
    const correctDoor = Math.floor(Math.random() * 3) + 1

    if(changeOption){
        const doorToRemove = choiceDoorToRemove(correctDoor, choiceDoor)
        choiceDoor = changeDoor(doorToRemove, choiceDoor)
    }

    return correctDoor === choiceDoor
}

function playGame(changeOption, attempts){
    let correctAttemtps = 0

    for(let repeat = 0; repeat < attempts; repeat++){
        montyHallProblem(changeOption) && correctAttemtps++
    }

    const percentAccept = (correctAttemtps * 100) / attempts

    console.log(`Wow, you got it right ${correctAttemtps} times (${percentAccept}%)`)
}

export default playGame