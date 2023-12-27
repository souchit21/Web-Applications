const DAYS = document.getElementById("days");
const HOURS = document.getElementById("hours");
const MINUTES = document.getElementById("mins");
const SECONDS = document.getElementById("seconds");


const newYears = '1 Jan 2025';

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600 % 24);
    const minutes = Math.floor(totalseconds /60 % 60);
    const seconds = Math.floor(totalseconds % 60);
    console.log(days, hours, minutes, seconds);
    DAYS.innerHTML = days;
    HOURS.innerHTML = edit(hours);
    MINUTES.innerHTML = edit(minutes);
    SECONDS.innerHTML = edit(seconds);
}
function edit(time){
    if(time<10){
        return '0'+ time;
    }
    return time;
}
countDown();
setInterval(countDown, 1000);