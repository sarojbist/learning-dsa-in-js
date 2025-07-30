

var fibo = function (num) {
if(num <= 1) return num;

return fibo(num-1) + fibo(num-2);
};

const res = fibo(5);

console.log(res);
