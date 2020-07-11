var min=0,sec=0,msec=0;
var interval;
var getmin=document.getElementById('min');
var getsec=document.getElementById('sec');
var getmsec=document.getElementById('msec');
function Start()
{
 var startbt=document.getElementById('startBtn').style.visibility="hidden";   
function timerun()
{
    msec++;
    getmsec.innerHTML=msec;
    if(msec==100)
    {
        sec++;
        getsec.innerHTML=sec;
        msec=0;
    }
    else if(sec==60)
    {
        min++
        getmin.innerHTML=min;
        sec=0;
    }
}
interval=setInterval(timerun,10);
}
function Pause()
{
    var startbt=document.getElementById('startBtn').style.visibility="visible";  
setTimeout(
    clearInterval(interval)
)
}
function Reset()
{
    
var min=0,sec=0,msec=0;
var interval;
var getmin=document.getElementById('min');
var getsec=document.getElementById('sec');
var getmsec=document.getElementById('msec');
getmin.innerHTML=0;
getsec.innerHTML=0;
getmsec.innerHTML=0;
Pause();
}