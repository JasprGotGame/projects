

// var userName = parseInt(prompt('What ya Name Foo'));
// var num1 = parseInt(prompt('pick anumber foo'));
// var num2 = parseInt(prompt('pick another number'));
// //Function Declaration
// function funcDec(a){
//     alert(a + (b + c))};
// funcDec(userName, num1, num2);


// var car = {
//   make: 'Chevy',
//   model: 'Camaro',
//   year: 1969,
//   color: 'red'
// };
//
// function myModel(a){
//   alert(a);}
//   myModel(car.model);

var myFriendz = [ 'Cobi', 'Eric', 'Gus', 'Kevin', 'Monty'];
var myCereal = [ 'Cheerios', 'Chex', 'CoCoPuffs', 'Frosted Flakes', 'Fruity Pebbles'];

var funEx = function(){
var numFri = myFriendz.length;
var ranFri = Math.ceil(Math.random() * numFri) - 1 ;
var numCer = myCereal.length;
var ranCer = Math.ceil(Math.random() * numCer) - 1;
alert(myFriendz[ranFri] + " " + myCereal[ranCer]);
}(myFriendz, myCereal);
// var randFri = myFriendz[Math.floor(Math.random() * myFriendz.length)];
// var randCer = myCereal[Math.floor(Math.random() * myCereal.length)];
// alert(randFri + randCer);
