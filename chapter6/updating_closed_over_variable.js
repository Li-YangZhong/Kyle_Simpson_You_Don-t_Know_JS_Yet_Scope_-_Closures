function makeCounter() {
    var count = 0;

    return function getCurrent() {
        count = count + 1;
        return count;
    };
}

var hits = makeCounter();

// later

console.log(hits());     // 1

// later

console.log(hits());     // 2
console.log(hits());     // 3