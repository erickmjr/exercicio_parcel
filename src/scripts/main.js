AOS.init();

const eventDate = new Date('May 25 , 2025 19:00:00');
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(function(){
    
    const today = new Date();
    const actualTimeStamp = today.getTime();
    const distanceEvent = eventTimeStamp - actualTimeStamp;
    
    const dayMs = 1000 *  60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;
    const secMs = 1000;

    const daysToEvent  = Math.floor(distanceEvent/dayMs);
    const hoursToEvent  = Math.floor((distanceEvent % dayMs)/hourMs);
    const minsToEvent  = Math.floor((distanceEvent % hourMs)/minMs);
    const secsToEvent  = Math.floor((distanceEvent % minMs)/secMs);

    const divDay = document.querySelector("#day");
    const divHour = document.querySelector("#hour");
    const divMin = document.querySelector("#min");
    const divSec = document.querySelector("#sec");

    divDay.innerHTML = `${daysToEvent}d`;
    divHour.innerHTML = `${hoursToEvent}h`;
    divMin.innerHTML = `${minsToEvent}min`;
    divSec.innerHTML = `${secsToEvent}s`;

    if (distanceEvent < 0) {
        clearInterval(countHours);

        const timerContainer = document.querySelector(".timer__container");
        const timerTitle = document.querySelector(".header__container__timer");
        timerContainer.style.display= "none";
        timerTitle.innerHTML = "O evento já terminou!";
    }

}, 1000);