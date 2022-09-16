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

let futureDate = new Date(2022 , 8, 25 , 18 ,0, 0);
console.log(futureDate);

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
  console.log(remaining);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1day = 24h
  //let remainingSeconds = remaining / 1000;

}

getRemainingTime();
