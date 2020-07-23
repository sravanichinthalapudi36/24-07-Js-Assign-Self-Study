'use strict'
//concat method

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

//Array iterator
const ar1 = ['a', 'b', 'c'];
const it = ar1.entries();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//indexOf
const names = ['sravani','appu','balu'];
console.log(names.indexOf('appu'));
console.log(names.indexOf('sravani', 2));
console.log(names.indexOf('balu'));

//Array.join
const names1 = ['sravani','appu','balu'];
console.log(names1.join(""));
console.log(names1.join(','));
console.log(names1.join('-'));

//reduce 
const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));
console.log(arr.reduce(reducer, 5));

//sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const num = [21,45,9,134,67];
num.sort();
console.log(num);

//splice method
const mon = ['Jan', 'March', 'April', 'June'];
mon.splice(1, 0, 'Feb');
console.log(mon);
mon.splice(4, 1, 'May');
console.log(mon);

//.values method
const alp = ['a', 'b', 'c'];
const iterator = alp.values();
for (const value of iterator) {
  console.log(value);
}

//Array.reverse

const a1 = ['one', 'two', 'three'];
console.log('array1:', a1);
const reversed = a1.reverse();
console.log('reversed:', reversed);
console.log('array1:', a1);



