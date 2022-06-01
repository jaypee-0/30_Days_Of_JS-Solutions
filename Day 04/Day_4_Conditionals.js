//Exercise Level 1

// Question 1
let user = prompt('Enter your age:');
if (user >= 18) {
  console.log("You're old enough to drive ");
} else {
  console.log(`You\'d have to wait for ${18 - user} years to drive`);
}
// Question 2
let yourage = prompt('Enter your age:');
let myage = 20;
if (yourage >= myage) {
  console.log(`You\'re ${yourage - myage} older than me`);
} else {
  console.log('I am older than you');
}
// Question 3
let a = 25;
let b = 20;
// if else
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}
// Ternary Operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);
// Question 4
let number = prompt('Enter a number:');
if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

//Exercise Level 2
// Question 1
let score = parseInt(prompt('What is the score?'));
switch (true) {
  case score > 80:
    console.log('Score: A');
    break;
  case score > 70:
    console.log('Score: B');
    break;
  case score > 60:
    console.log('Score: C');
    break;
  case score > 50:
    console.log('Score: D');
    break;
  case score > 0:
    console.log('Score: F');
    break;
  default:
    console.log('Please enter a score within the range of 0-100');
}
// Question 2
let season = (prompt('Enter a month to determine the season').toLowerCase())
switch (season) {
    case 'september':
        console.log('Autumn')
        break; 
    case 'october':
        console.log('Autumn')
        break; 
    case 'november':
        console.log('Autumn')
        break;
    case 'december':
        console.log('Winter')
        break;
    case 'january':
        console.log('Winter')
        break;
    case 'february':
        console.log('Winter')
        break;
    case 'march':
        console.log('Spring')
        break;
    case 'april':
        console.log('Spring')
        break;
    case 'may':
        console.log('Spring')
        break;
    case 'june':
        console.log('Summer')
        break;
    case 'july':
        console.log('Summer')
        break;
    case 'august':
        console.log('Summer')
        break;
    default:
        console.log('Enter a valid month')
}
// Question 3
let day = prompt('What day is it today?').toLowerCase();
switch (day) {
    case 'monday':
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}\'s a weekday`)
        break; 
    case 'tuesday':
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}\'s a weekday`)
        break; 
    case 'wednesday':
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}\'s a weekday`)
        break; 
    case 'thursday':
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}\'s a weekday`)
        break; 
    case 'friday':
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}\'s a weekday`)
        break; 
    case 'saturday':
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}\'s a weekend`)
        break; 
    case 'sunday':
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)}\'s a weekend`)
        break; 
    default:
        console.log('Input a valid day of the week')
}

//Exercise Level 3

// Question 1
let days = prompt('Enter a month:').toLowerCase();
switch (days) {
    case 'january':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 31 days`)
        break; 
    case 'february':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 28 days`)
        break; 
    case 'march':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 31 days`)
        break; 
    case 'april':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 30 days`)
        break; 
    case 'may':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 31 days`)
        break; 
    case 'june':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 30 days`)
        break; 
    case 'july':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 31 days`)
        break; 
    case 'august':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 31 days`)
        break; 
    case 'september':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 30 days`)
        break; 
    case 'october':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 31 days`)
        break; 
    case 'november':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 30 days`)
        break; 
    case 'december':
        console.log(`${days.charAt(0).toUpperCase() + days.slice(1)} has 31 days`)
        break; 
    default:
        console.log('Input a valid month')
}
// Question 2
let daysleap = prompt('Enter a month:').toLowerCase();
switch (daysleap) {
    case 'january':
        console.log(`${daysleap} has 31 days`)
        break; 
    case 'february':
        console.log(`${daysleap} has 29 days`)
        break; 
    case 'march':
        console.log(`${daysleap} has 31 days`)
        break; 
    case 'april':
        console.log(`${daysleap} has 30 days`)
        break; 
    case 'may':
        console.log(`${daysleap} has 31 days`)
        break; 
    case 'june':
        console.log(`${daysleap} has 30 days`)
        break; 
    case 'july':
        console.log(`${daysleap} has 31 days`)
        break; 
    case 'august':
        console.log(`${daysleap} has 31 days`)
        break; 
    case 'september':
        console.log(`${daysleap} has 30 days`)
        break; 
    case 'october':
        console.log(`${daysleap} has 31 days`)
        break; 
    case 'november':
        console.log(`${daysleap} has 30 days`)
        break; 
    case 'december':
        console.log(`${daysleap} has 31 days`)
        break; 
    default:
        console.log('Input a valid month')
}