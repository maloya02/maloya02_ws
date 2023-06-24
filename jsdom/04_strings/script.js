// custom script
// alert(`Welcome to JS`)

// string - collection of characters
// string -- can be iterated using a for loop (Loop of)
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let excluded = 'aeiou' // can be [a,e,i,o,u]
let results = '';
for (let char of alphabet) {
    // if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ) continue;
    if (excluded.includes(char)) continue
    results += char;
    // console.log(`Current character is ${char}`);
};
console.log(`Current character is ${results}`);

// declare a string
// delimiters (',"",`)
// how to break string in multiple lines --- back slash \ also is a escape char
// \t - tab, \n new line, \r - carriageReturn

let fragment = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
 Nostrum accusamus sapiente, molestiae, consequuntur temporibus maiores perspiciatis, \
  modi iste numquam nesciunt dignissimos dolores ut officia unde quo sint mollitia atque delectus. '
console.log(fragment);

console.log('\n' + '*'.repeat(30));
// use backtick for string interpolation, variable resolution
let word = 'apple';
let phrase = 'let there be';
let sentence = 'Gotcha!';
let revised = true;

let template = `There is a big ${word} tree. Now, ${phrase} some snake. ${sentence} You are back to Eden!`
let template2 = `There is a big ${revised ? 'pineapple' : word} tree. Now, ${phrase} some snake. ${sentence} You are back to Eden!`
console.log(template);
console.log(template2);

// string concatenation
let fullName = 'AA ' + 'daslla'
console.log(fullName);
console.log('R'+7);
console.log('01'+'000089');
console.log(1+'0000089');
console.log(+'0000089');
console.log(1+(+'00000089'));