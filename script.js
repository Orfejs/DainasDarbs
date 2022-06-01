// let [milliseconds,second,minute,] = [0,0,0];
// let timerRef = document.querySelector('.mainTime');
// let int = null;
// document.getElementById('time01').addEventListener('click', ()=>{if(int!==null){
// clearInterval(int);
// }
// int = setInterval(mainTime,10);
// });
// document.getElementById('stop').addEventListener('click', ()=>{
// clearInterval(int);
// });
// document.getElementById('reset').addEventListener('click', ()=>{clearInterval(int);
// [milliseconds,seconds,minutes,hours] = [0,0,0];
// timerRef.innerHTML = '00 : 00 : 00';
// });
// function mainTime(){
// milliseconds+=10;
// if(milliseconds == 1000){
// milliseconds = 0;
// second++;
// if(second == 60){
// second = 0;
// minute++;
// if(minute == 60){
// minute = 0;
// }
// }
// }
// let m = minute < 10 ? "0" + minute : minute;
// let s = second < 10 ? "0" + second : second;
// let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
// timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
// }

// Clock

 function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

progress(600, 600, $('#progressBar'));