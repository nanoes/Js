function message() {
    document.write("HI");
}

function sayHi(user){
    document.write(`Welcome ${user}`);
}

function addNumeros(numero) {
    const numeros = [];
    for (let index = 0; index < numero; index++) {
        const num = parseInt(prompt("Add one numero"));
        numeros.push(num);
    }
    console.log(numeros);
    // way to share the result to other functions
    // bellow return cannot to go anything more
    return numeros;
}

//show only pair
function showPair(vector) {
    if (typeof vector === "object") {
        const pairs = [];
        console.log(pairs); //void
        for (let index = 0; index < vector.lenght; index++) {
            vector[index] % 2 === 0 ? pairs.push(vector[index]) : null;
        }
        return pairs;
    }
}

function isAdult(params) {
    if (params >=18) { 
        // the return not necesarry print something in screen only do it.
        return "adult";
    }else {
        return "child";
    }
}


function largerNumbers(vector) {
    const larger = [];
    const smaller = []
    for (let index = 0; index < array.length; index++) {
         vector[i] >= 10 ? larger.push(vector[index]): smaller.push(vector[index]);
        //const element = array[index];
    }
    console.log(larger , smaller);
 }



