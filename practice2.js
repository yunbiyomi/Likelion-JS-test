//forEach
f=[10, 20, 30, 40];
f.forEach(f=>console.log(f**2)); //E 대문자 주의


//map
m=[10, 20, 30 , 40].map(x=>x+=100);
console.log(m);


//filter
n=[1, 2, 3, 4, 5, 6, 7].filter(x=>x>4);
console.log(n);


//find
a=[1, 2, 3, 4, 5, 6, 7].find(x=>x>4);
console.log(a);


//fill
b=Array(100).fill(0);
console.log(b);

c=Array(100).fill(0).map((value, index)=>value+index);
console.log(c);


//object
let x=1, y=2, z=3;
let object={x, y, z};
console.log(object);

console.log(object.x);

console.log(object['x']);

object['hello']='world';
console.log(object);

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));


//map:object
let map = new Map();
map.set('one', 100);
map.set('two', 200);
map.set('three', 300);
map.set('four', [10, 20]);
map.set(5, [100, 200]);
map.set([1, 2], [100, 200]);

console.log(map);

console.log(map.get('one'));

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

let test = new Map(Object.entries(object));
console.log(test);
console.log(object);


//set
let set=new Set('11111111111111122222222222333');
console.log(set); //중복을 허락하지 않음
set.add(5);
set.add(4);
console.log(set);


//if
if(false){
    console.log('hello 1');
}
if(false){
    console.log('hello 2');
}
if(true){
    console.log('hello 3');
}
if(true){
    console.log('hello 4');
}


//else if && else
if(false){
    console.log('hello 1');
}
else if(false){
    console.log('hello 2');
}
else if(true){
    console.log('hello 3');
}
else if(true){
    console.log('hello 4');
}
else{
    console.log('!!');
}


//삼항연산자
let result = true ? 1 : 100;
console.log(result);


//switch
let day;
switch (new Date().getDay()) {
    case 0:
        day="일";
        break;
    case 1:
        day="월";
        break;
    case 2:
        day = "화";
        break;
    case 3:
        day = "수";
        break;
    case 4:
        day = "목";
        break;
    case 5:
        day = "금";
        break;
    case 6:
        day = "토";
}
console.log(day);


//for
for(let i=0; i<10; i++){
    console.log(i);
}


//이중 for
for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(i + j +'=' +i*j);
    }
}


//for of
let aa='hello';
for(let i of aa){
    console.log(i);
}

let h=0;
let ss='19821'
for(let i of ss){
    h+=i;
}
console.log(h);

let u=0;
let zz='19821'
for(let i of zz){
    u+=parseInt(i);
}
console.log(u);

let p={'one':1, 'two':2};
for(let i in p){
    console.log(i);
    console.log(p[i]);
}


//while
let xx=0;
while(xx<10){
    console.log(xx);
    xx++;
}


//break
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}


//continue
for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
} 


//함수
function add(x, y) {
    return x+y;
}
console.log(add(3, 5));

let add2 = function(x, y){
    return x+y;
}
console.log(add2(3, 5));

function add3(a=100, b=200){ //입력안했을시 default값
    console.log(a, b);
    return a+b;
}
console.log(add3(10, 20));
console.log(add3());


//callback
function add(x, y){
    return x+y;
}
function mul(x, y){
    return x*y;
}
function cal(a, b){
    return a(10, 10) + b(10, 10);
}
console.log(cal(add, mul));

console.log(cal((a,b)=>a+b, (a,b)=>a*b));

//화살표함수
let po = x=> x**2;