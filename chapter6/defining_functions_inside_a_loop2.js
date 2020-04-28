var keeps = [];

for (let i = 0; i < 3; i++) {
    keeps[i] = function keepI(){
        // closure over `i`
        return i;
    };
}

console.log(keeps[0]());   // 0
console.log(keeps[1]());   // 1
console.log(keeps[2]());   // 2