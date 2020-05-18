setInterval(setClock, 1000);
const secondHand=document.querySelector('.second');
const minuteHand=document.querySelector('.min');
const hourHand=document.querySelector('.hour');

function setClock(){
    const currentDate=new Date();
    const secondsRatio=currentDate.getSeconds() / 60;
    const minutesRatio=(secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio=(minutesRatio + currentDate.getHours()) / 12;/*we add minutesRatio to the hours to make the hourhand move between the hours, not only from hour to hour*/
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();