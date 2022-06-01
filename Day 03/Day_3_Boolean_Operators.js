//Exercise Level 1

// Question 1
var firstName = 'Johnpaul';
var lastName = 'Eyibra';
var country = 'Nigeria';
var city = 'Lagos';
var age = 20;
var isMarried = false;
var year = 2022;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);
// Question 2
console.log(typeof 10 == typeof '10');
// Question 3
console.log(parseInt('9.8') == 10);
// Question 4
console.log("true,\n 'nk'  \n 1");
console.log("false,\n'null'  \n 0");
// Question 5
let n1 = 4 > 3;
let n2 = 4 >= 3;
let n3 = 4 < 3;
let n4 = 4 <= 3;
let n5 = 4 == 4;
let n6 = 4 === 4;
let n7 = 4 != 4;
let n8 = 4 !== 4;
let n9 = 4 != '4';
let n10 = 4 == '4';
let n11 = 4 === '4';
let n12 = 'python'.length != 'jargon'.length;
console.log(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12);
// Question 6
let m1 = 4 > 3 && 10 < 12;
let m2 = 4 > 3 && 10 > 12;
let m3 = 4 > 3 || 10 < 12;
let m4 = 4 > 3 || 10 > 12;
let m5 = !(4 > 3);
let m6 = !(4 < 3);
let m7 = !(false);
let m8 = !(4 > 3 && 10 < 12);
let m9 = !(4 > 3 && 10 > 12);
let m10 = !(4 === '4');
let python = 'python'
let jargon = 'jargon'
let m11 = python.includes('on') == jargon.includes('on');
console.log(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11);
// Question 7
const now = new Date()
const year = now.getFullYear() // return year
const month = ('0' + (now.getMonth() + 1)).slice(-2)// return month(0 - 11)
const date = ('0' + (now.getDate() + 1)).slice(-2) // return date (1 - 31)
const hours = ('0' + (now.getHours() + 1)).slice(-2) // return number (0 - 23)
const minutes = ('0' + (now.getMinutes() + 1)).slice(-2) // return number (0 -59)
const day = ('0' + (now.getDay() + 1)).slice(-2) // return day (0-6)
console.log(`${date}/${month}/${year} ${hours}:${minutes} , ${day} day of the week`)
console.log(now.getTime())
//Exercise Level 2

// Question 1
let base = prompt('Enter base:')
let height = prompt('Enter height:')
console.log(`The area of the triangle is ${0.5 * base * height}`)
// Question 2
let sideA = parseInt(prompt('Enter side a:'))
let sideB = parseInt(prompt('Enter side b:'))
let sideC = parseInt(prompt('Enter side c:'))
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`)
// Question 3
// 1
let lengthrect = prompt('Enter length:')
let widthrect = prompt('Enter width:')
console.log(`The area of the rectangle is ${lengthrect * widthrect}`)
// 2
let lengthrect1 = parseInt(prompt('Enter length:'))
let widthrect2 = parseInt(prompt('Enter width:'))
console.log(`The perimeter of the rectangle is ${2 * (lengthrect1 + widthrect2)}`)
// Question 4
//1
let radius = prompt('Enter radius:')
console.log(`The area of the circle is ${3.14 * radius * radius}`)
//2
let radiusCircum = prompt('Enter radius:')
console.log(`The circumference of the circle is ${2 * 3.14 * radius}`)
// Question 6
let y1 = prompt('Y1:')
let y2 = prompt('Y2:')
let x1 = prompt('X1:')
let x2 = prompt('X2:')
console.log(`The slope is ${(y2 - y1) / (x2 - x1)}`)
// Question 7
let x = prompt('X value: ')
console.log(`y = ${x**2 + 6*x + 9}`) // y = 0 at x= -3
// Question 8
let userhours = parseInt(prompt('Enter hours: '))
let userrate = parseInt(prompt('Enter rate per hour: '))
console.log(`Your weekly earning is ${40 * 28}`)
// Question 9
const myfirstname = 'Johnpaul'
const myfamilyname = 'Eyibra'
if (myfirstname.length > 7) {
  console.log(`My first name, ${myfirstname} is longer than my family name, ${myfamilyname}`)
} else {
  console.log(`My first name, ${myfirstname} is shorter than my family name, ${myfamilyname}`)    
}
// Question 10 
const noOfyears = prompt('Enter number of years you have lived: ')
console.log(`You lived ${noOfyears * 31536000}`)
//Exercise Level 3

// Question 1
console.log(`${year}/${month}/${date} ${hours}:${minutes}`)