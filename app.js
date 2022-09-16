const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAway = document.querySelector('.giveaway');

const deadLine = document.querySelector('.deladline');

const items  = document.querySelectorAll('.deadline-format h4');


let tempDate = new Date();
let  tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()


let futureDate = new Date(tempYear,tempMonth,tempDay + 10 , 18 ,0, 0);
//console.log(futureDate);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minutes  = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
//const milliSeconds = futureDate.getMilliseconds();
const day = futureDate.getDay()
let meridian = 'am';
if (hour >= 12){
    meridian = 'pm'
}

//let currDate = new Date();
//console.log(currDate);
giveAway.textContent =  `Give away ends on ${weekdays[day]}, ${date} ${months[month]} ${year} ${hour}:${minutes}${meridian}`;

const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const remaining = futureTime - today;
  //console.log("rem" + remaining);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1day = 24h
  //let remainingSeconds = remaining / 1000;
  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  //calculate all values
  let days = Math.floor(remaining / oneDay);
  let hours = Math.floor((remaining % oneDay) / oneHour);
  let minutes = Math.floor((remaining % oneHour) / oneMinute);
  let seconds = Math.floor((remaining % oneMinute) / 1000);
  // console.log(days);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);
  const values = [days,hours,minutes,seconds];
  
  // format in to two digit if number is less than 10 (i.e single digit)
  function format (item){
    if(item < 10){
      return (`0${item}`)
    }
    return item
  }
  items.forEach( (item,index) => {
    item.innerHTML = format(values[index])
  });
  if (remaining < 0){
    clearInterval(countdown);
    deadLine.innerHTML = `<h4 class ="expired" >Expired</h4>`
  }
}
//count down interval
let countdown = setInterval(getRemainingTime,1000);
//countdown();
getRemainingTime();
