function greetStudent(studentName) {
    return function greeting(){
        console.log(
            `Hello, ${ studentName }!`
        );
    };
}

console.log(greetStudent("Kyle"));

// nothing else happens

greetStudent("Kyle")(); // Hello, Kyle!