// Exercise: Level 2

// Question 1
const johnHolmesQuote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another'
console.log(johnHolmesQuote)
// Question 2
const motherTheresaQuote = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"' 
console.log(motherTheresaQuote)
// Question 3
let ten = '10'
let tenOf = +ten
console.log(typeof tenOf)
// Question 4 
let nine8 = '9.8'
let nine8Float = Math.ceil(parseFloat(nine8))
console.log(nine8Float)
// Question 5
let string5 = 'python jargon'
console.log(string5.includes('on'))
// Question 6
let string6 = 'I hope this course is not full of jargon.'
console.log(string6.includes('jargon'))
// Question 7
let numBtw0_100 = Math.floor(Math.random() * 101)
console.log(numBtw0_100)
// Question 8
let numBtw50_100 = Math.floor(Math.random() * 51) + 50;
console.log(numBtw50_100)
// Question 9
let numBtw0_255 = Math.floor(Math.random() * 256)
console.log(numBtw0_255)
// Questin 10 
let string8 = 'JavaScript'
let string8Random = string8[Math.floor(Math.random() * 11)]
console.log(string8Random)
// Question 11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
// Question 12
let string12 = 'You cannot end a sentence with because because because is a conjunction'
let string12Substr = string12.substr(31, 23)
console.log(string12Substr)


// Exercise: Level 3
// Question 1
let string231 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern231 = /love/gi
console.log(string231.match(pattern231))
// Question 2
let string232 = 'You cannot end a sentence with because because because is a conjunction'
let pattern232 = /because/gi
console.log(string232.match(pattern232))
// Question 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const clean = sentence.replace(/[^\w\s]/g, '')
console.log(clean)
// Question 4
let string234 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numX = string234.match(/\d+/g)
let annualIncome = (+numX[0] + +numX[1] + +numX[2])
console.log(annualIncome)
