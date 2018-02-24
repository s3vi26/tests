console.log(6 === 4 +2)
function add(x,y) {
    return x + y
}
console.log(6 === add(2, 4)) 

function sub(x,y) {
    return x - y
}
console.log(2 === sub(4, 2))
console.log(-2 === sub(2, 4))

function multy(x,y) {
    return x * y
}
console.log(12 === multy(2, 6))
function divy(x,y) {
    return x / y
}
console.log(3 === divy(6, 2))

function assert (expected, actual, message) {
    if (expected === actual) {
        return message
    }
    else {
        return "this is wrong"
    }
    
}

console.log(assert(6, add(4, 2), "working"))
console.log(assert(12 === sub(15,2), "13"))
