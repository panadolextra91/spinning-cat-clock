function getElem(selector) {
    return document.querySelector(selector);
}

const timeOutput = getElem('.time');
const secOutput = getElem('.sec');
const ampmOutput = getElem('.ampm');
const monthOutput = getElem('.month');
const dayOfWeekOutput = getElem('.dayofweek');
const dayOutput = getElem('.day');
const yearOutput = getElem('.year');

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


//Format: 0x:0y for the time
function formatTime(value) {
    if (value < 10) {
        return '0';
    } else {
        return '';
    }
}

//Clock settings
function clock () {
    const d = new Date();
    
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    
    dayOfWeekOutput.innerHTML = weekday[
        d.getDay()
    ];
    
    monthOutput.innerHTML = monthName[
        d.getMonth()
    ];
    
    dayOutput.innerHTML = d.getDate();
    
    yearOutput.innerHTML = d.getFullYear();
    
    const time = formatTime(h) + h + ':' + formatTime(m) + m;
    const sec = formatTime(s) + s;
    
    const ampm = h <= 12 ? 'AM' : 'PM';
    
    timeOutput.innerHTML = time;
    secOutput.innerHTML = sec;
    ampmOutput.innerHTML = ampm;
    
}

    setInterval(clock, 1000);
