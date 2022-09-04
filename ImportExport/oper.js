// (a,b) this is parameter
const add = (a, b) =>{
    return a+b
}
const sub = (a, b) =>{
    return a-b
}
const mult = (a, b) =>{
    return a*b
}

// module.exports = add;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;
// in node js every single varigle 

const name = "Arvind"
// module.exports = name;


module.exports = {add, sub, mult, name}