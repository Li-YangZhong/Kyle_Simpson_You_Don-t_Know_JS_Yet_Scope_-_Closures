var isArray = function isArray(a) {
    return Array.isArray(a);
};

// override the definition, if you must
if (typeof Array.isArray == "undefined") {
    isArray = function isArray(a) {
        return Object.prototype.toString.call(a)
            == "[object Array]";
    };
}

console.log(isArray([1,2,3])) // true
console.log(isArray(12)) // false
console.log(isArray('hi')) // false
console.log(isArray({})) // false