function doSumthing(){
    console.log('this is our js code editor');
}
console.log('first object');
console.log('second object');
setTimeout(doSumthing,5000);
setTimeout(() => {
    console.log('this is vs code');
}, 1000);
console.log('third object');
console.log('fourth object');
const num=[1,2,3,4,5,6];
num.forEach(element => {
    console.log(element);
});