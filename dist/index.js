import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'Hello world. Peace everyone!!');
    });
}
function add(num1, num2) {
    return num1 + num2;
}
console.log('sum', add(1, 1));
//# sourceMappingURL=index.js.map