// custom script
// alert('welcome to JS)
console.log('Welcomt to node');

let color = 'red';

console.log('After var decleration');

// IF statement
// if (<condition>) true_statement;

if (color == 'red') console.log('it is red');
color == 'red' && console.log('it is red');
color == 'red' ? console.log('it is pula') : console.log('hinde pula');

// if(color == 'red')
//     console.log('it is red');
//     console.log('Yes, it is indeed red'); //will not be included in the if statement

if (color == 'red') {
    console.log('it is red');
    console.log('Yes, it is indeed red');
}

let holiday = 'Tuesday';
if (holiday == 'Monday') {
    console.log('No classes');
} else {
    console.log('Log in to zoom class pls');
    console.log('There is a class');
}

// Raw Grade to Point Grade
/*
1.00 = 97 - 100
1.25 = 95 - 97.5
....
.......
etc
*/
let grade = 93;
let pointGrade;

if (grade >= 97.6 && grade <= 100) {
    pointGrade = '1.00';
} else if (grade >= 95.0 && grade <= 97.5) {
    pointGrade = '1.25';
} else if (grade >= 90.0 && grade <= 94.9) {
    pointGrade = '1.50';
} else if (grade >= 87.5 && grade <= 89.9) {
    pointGrade = '1.75';
} else {
    pointGrade = '2.00'
}
console.log(`Ur grade ${grade} is equal to ${pointGrade}`);

////-------
{
let serverity = 'Normal';
let emailBody;
let sendEmail = (to, emailBody) => {
    console.log('*'.repeat(30));
    console.log(`To: ${to}`);
    console.log(`Message:\n\t${emailBody}`);
    console.log('*'.repeat(30) + '\n\n');
}
// switch statement
// switch (serverity) {
//     case 'Low':
//         colorCode = 'Blue';
//         break;
//     case 'Normal':
//         colorCode = 'Orange';
//         break;
//     case 'High':
//         colorCode = 'Red';
//         break;
//     default:
//         colorCode = 'White'
// }
// Implementation 2:Objects
let serverityConverter = {
    Low: 'Blue',
    Normal: 'Orange',
    High: 'Red'
};
colorCode = serverityConverter[serverity] || 'White';

emailBody = `A system alert was raised to ${colorCode} code. 
Please login and and resolve this ${colorCode} code. ASAP`
sendEmail('maloya02@gmail.com', emailBody)
}

