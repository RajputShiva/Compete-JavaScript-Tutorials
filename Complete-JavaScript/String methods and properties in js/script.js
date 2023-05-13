//const message = 'hello, i am Shiavji Singh'
// console.log(message);

// Property
//console.log(message.length);

// Methods(Without Argument)
//console.log(message.toUpperCase());
//console.log(message.toLowerCase());

//const message1 = '   hello, i am Shiavji Singh   '
//console.log(message1.trim()); // iska ka hota faltu ka sara space hata deta hain.
//console.log(message1.trim().toUpperCase()); // trim method ke sth toUpperCase and toLowerCase method ko likh skte hain.
//console.log(message1.trimStart()); // aur iska km h aage se faltu space hata dena.
//console.log(message1.trimEnd()); // aur iska km h pichhe se faltu ka space hata dena.

//Method (With Argument)
//const mess1 ='hiii i am shiva';
//const mess = "hello everyone how are you";
//console.log(mess.includes('how')); // ye ek bada string choti string ko check krta h agar hoga to true and nhi hoga to false return krta hain.
//console.log(mess.indexOf('o')); // ye hame indexing deta hain wo starting se jo pehle aayega usi ka indexing dega aur nhi milega to -1 return kr dega.
//console.log(mess.replace('a','shiva')); // iska km hota h jo value daloge us jagah dusari value daloge to pehle wali replace kr degi new wali se.
//console.log(mess.replaceAll('r','golu')); // iska km saare value ko replace kr dega new value se.
//console.log(mess.concat(mess1 + " , " + mess)); // iska km hota h add krna do ya do se aadhik string ko.

// const digits = '7856'
// console.log(digits.padStart(16,'*'));
// console.log(digits.padEnd(16,'*'));

// const charactors = 'hello my name is shiva';
// console.log(charactors.charAt('7')); // ye charactor ki indexing batata hain.

// const message = 'hello everyone i Am shiva';
// //console.log(message.charCodeAt(17)); // ye hume acii code deta hain jo index hum put krte hain uska.
// console.log(message.split('')); // ye value ko split krta hain.

// String template literal :-
// `` isi ko hum template string bolte hain.
// ~ isko hum tilde bolte hain.
const lastFourDigits = '7856'
//  const concatenatedString = `Last four digit of my account number is ` +  lastFourDigits;
//  console.log(concatenatedString);
// or using concate
// const templateString = `Last four digit of my account number is `.concat(lastFourDigits);
// console.log(templateString);

// using string literal
const templateString = `My account number is ${lastFourDigits.padStart(11, '*')}.`
console.log(templateString);
const bankBalance = 98730000;
const templateString2 = `I have ${bankBalance}Rs in my account.`
console.log(templateString2);

const addedString = `I have added ₹` + bankBalance + ' in my account.'
console.log(addedString);