function isArray(a) {
    if (typeof Array.isArray != "undefined") {
        return Array.isArray(a);
    }
    else {
        return Object.prototype.toString.call(a)
            == "[object Array]";
    }
}

console.log(isArray([1,2,3])) // true
console.log(isArray(12)) // false
console.log(isArray('hi')) // false
console.log(isArray({})) // false