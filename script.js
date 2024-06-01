function dis(val) {
    document.getElementById("result").value +=val
}

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/'
        || event.key == '%' || event.key == '^'
        || event.key == '!' || event.key == '√') 
        document.getElementById("result").value += event.key; 
        if (event.key === 'Enter') {
            event.preventDefault();
            solve();
        }
} 

function backspace() {
    let display = document.getElementById("result");
    let value = display.value;
    
    display.value = value.substr(0, value.length - 1);
}

function clr() { 
    document.getElementById("result").value = "" 
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solve() { 
    let z = document.getElementById("result").value;
    try {
        z  = z.replace(/(\^)/g,'**');
        z = z.replace(/(\d+)!/g, function(match, num) {
            return factorial(num);
        });
        z = z.replace(/√(\d+)/g, function(match, num) {return `Math.sqrt(${num})`});
        console.log(z);
        let y = eval(z);
        document.getElementById("result").value = y;
    } catch (e) {
        document.getElementById("result").value = 'Error';
    }
}
