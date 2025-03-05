// generate a 4 digit otp
setInterval(() => {
    let a = Math.random(); // 0 to 1
    a = a * 8999; // sometimes it give 3 digit number as well, most of times it give 4 digit(betwen 0 and 8999)
    a = a + 1000; // minimum value is 1000 and max is 9999
    console.log(Math.trunc(a));
}, 500)