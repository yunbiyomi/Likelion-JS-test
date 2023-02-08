const $one=document.getElementById('one');

console.log($one.innerHTML);

$one.innerHTML = 'hi world'

//nullish 병합 연산자
let result1;
let result2 = result1 ?? 100;

let result3 = 10;
let result4 = result3 ?? 100;

let result5 = null;
let result6 = result5 ?? 100;

console.log(result2);
console.log(result4);
console.log(result6);