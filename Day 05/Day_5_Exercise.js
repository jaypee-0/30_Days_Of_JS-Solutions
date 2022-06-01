//Exercise Level 1

// Question 1
const empArray = [];
// Question 2
const array5 = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Mongo'];
// Question 3
console.log(array5.length)
// Question 4
console.log(array5[0],array5[2],array5[4])
// Question 5
const mixedDataTypes = Array('Yes', 'No', true, 2, 9.5, false)
console.log(mixedDataTypes.length)
// Question 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Question 7
console.log(itCompanies)
// Question 8
console.log(itCompanies.length)
// Question 9
console.log(itCompanies[0], itCompanies[2], itCompanies[6])
// Question 10
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3],itCompanies[4], itCompanies[5], itCompanies[6])
// Question 11
console.log(itCompanies)
// Question 12
console.log(`${itCompanies.slice(0, 6)} and ${itCompanies[6]} are big IT companies`)
// Question 13
const company = 'Facebook'
if (itCompanies.includes(`${company}`)) {
    console.log(`${company} is present`)
}else console.log(`${company} not found`)
// Question 14
console.log(itCompanies.splice(2, 5))
// Question 15
console.log(itCompanies.sort())
// Question 16
console.log(itCompanies.reverse())
// Question 17
console.log(itCompanies.slice(3))
// Question 18
console.log(itCompanies.slice(0, 4))
// Question 19
console.log(itCompanies.slice(3, 4))
// Question 20
console.log(itCompanies.splice(0, 1))
// Question 21
console.log(itCompanies.splice(3, 1))
// Question 22
console.log(itCompanies.pop())
// Question 23
console.log(itCompanies.splice())

//Exercise Level 2

// Question 1
const webTech = require('./web_text');
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
// Question 2
const txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(txt.split(' '))
console.log(txt.split(' ').length)
// Question 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift('Meat'))
console.log(shoppingCart.push('Sugar'))
const shoppingCar = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCar.pop())
console.log(shoppingCart[2] = 'Green Tea')
console.log(shoppingCart)
// Question 4
console.log(countries.includes('Ethiopia') ? "ETHIOPIA" : countries.push('Ethiopia'))
// Question 6
console.log(webTechs.includes('SASS') ? "Sass is a CSS preprocess" :  webTechs.unshift('SASS'))
console.log(webTechs)
// Question 7
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)

//Exercise Level 3

// Question 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const max = ages.sort().pop()
const min = ages.sort().shift()
console.log(`Max age: ${max}`)
console.log(`Min age: ${min}`)
console.log(`Median age: ${parseInt(ages.sort().slice(4, 6)) /2}`)
const ages1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const average = ages1.reduce(function (a, b) {return a + b}) /ages1.length
console.log(`Average age: ${average}`)
console.log(`Range: ${max} - ${min} = ${max - min}`)
const minA = Math.abs(min - average)
console.log(minA)
const maxA = Math.abs(max- average)
console.log(maxA)
// Question 2
const countrys = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];
console.log(countrys.slice(0, 9))
// Question 3
console.log(countrys[parseInt(countrys.length /2)])
// Question 4t  
if (countrys.length %2 == 0) {
  const newcountry1 = countrys.slice(0, (countrys.length /2))
  const newcountry2 = countrys.slice((countrys.length /2), countrys.lastIndexOf())
  console.log(newcountry1)
  console.log(newcountry2)
} else {
  console.log(countrys.push('Bahamas'))
} 