
const userName = '';
const date = new Date()
const RandomNumber = Math.floor(Math.random() * 8);
//console.log(`hello ${userName}`)
//console.log(`Todays date is ${date.toLocaleDateString()}`)

userName ? console.log(`Today date is ${date.toLocaleDateString()} Hello ${userName}!` ) : console.log('Hello Stranger');

if (RandomNumber === 1) {
  console.log('The purpose of our lives is to be happy. - Dalai Lama');
} else if  (RandomNumber === 2) {
  console.log('You only live once, but if you do it right, once is enough. — Mae West');
} else if (RandomNumber === 3) {
  console.log('Turn your wounds into wisdom. — Oprah Winfrey');

} else if (RandomNumber === 4) {
  console.log('In three words I can sum up everything Ive learned about life: It goes on. ― Robert Frost');
} else if (RandomNumber === 5){
  console.log('The greatest pleasure of life is love. — Euripides');
} else if (RandomNumber === 6) {
  console.log('Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi');
} else if (RandomNumber === 7) {
  console.log('Dont cry because its over, smile because it happened. —Dr. Seuss');
} else {
  console.log('The best way to predict your future is to create it." — Abraham Lincoln');
}