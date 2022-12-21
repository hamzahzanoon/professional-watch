setInterval(function() {
     
    const clock = document.querySelector(".disblay");

    let tiem = new Date();
    let hr = tiem.getHours();
    let min = tiem.getMinutes();
    let sec = tiem.getSeconds();
    let day = 'AM';

    if(hr > 12) {
        day = 'PM';
        hr = hr -12; 
    } 

    if(hr == 0) {
        hr = 12;
    }

    if(min <  0) {
        min = 10 + min;
    }

    if(sec < 0) {
        sec = 10 + sec;
    }

    clock.textContent = hr + ':' + min + ':' + sec + ' '+day;
},1000)
