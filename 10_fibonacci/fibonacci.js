const fibonacci = function(n) {
    debugger;
if(n < 0) return "OOPS";
if(n === "") {
   n = parseInt(n);
}
const fib = [0, 1];
for (let i = 2; i <= n; i++) 
    fib[i] = fib[i - 1] + fib[i - 2];
return fib[n];
}
// Do not edit below this line
module.exports = fibonacci;
