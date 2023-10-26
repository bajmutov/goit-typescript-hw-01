// import { concatenation } from './concatenation';
function add(num1, num2) {
    return num1 + num2;
}
console.log('sum', add(1, 1));
const button = document.querySelector('button');
const input = document.querySelector('input');
function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'Hello world. Peace everyone!!');
    });
}
//# sourceMappingURL=index.js.map