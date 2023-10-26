// import { concatenation } from './concatenation';

function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log('sum', add(1, 1));

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
}

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'Hello world. Peace everyone!!');
  });
}
