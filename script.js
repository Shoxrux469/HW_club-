

let name = prompt('What is your name?').toLowerCase()
let capacity = 10
let people = 7
let emptySeats = capacity - people

if (name[0] == "a") {
    let age = +prompt('How old are you?')
    if (age >= 20 && age <=40) {
        let number = +prompt('How many people you are?')
        if (number <= emptySeats) {
            alert('Welcome')
        } else {
            alert('Sorry, we are full')}
    } else {
        alert('Bye')
    }
} else {
    alert('Bye')
}