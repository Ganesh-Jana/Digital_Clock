let a;
let date;
let time;
let day;
const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined,options);
    // day = a.getDay(undefined, weekday);
    // date = a.toLocaleDateString();
    time = a.toLocaleTimeString();
    //   a.getHours() +  ':' +  a.getMinutes() + ':'  +  a.getSeconds()  
    document.getElementById('time').innerHTML = time  +'<br>' +date;
}, 1000);