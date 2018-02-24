var test = require(`./index`);

test.assert(6, add(2,4), "2+4===6")
test.assert_false(false, "false is false duh")

function add(a,b) {
    return a +b
}
