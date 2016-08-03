




var b = (null === undefined);
console.log("b:  " +  b);

var a = undefined;

console.log("a:  " +  a);


var x = {ken: 7, mary: 'blah'};
var y = Object.create(x);
var z = Object.create(y);
console.log(y.ken);
y.ken=10;
z.ken=100;
console.log(y.ken);
console.log(z.ken);

var Cat= {
	meow: function() {
		
	},
	sleep: function(){
		
	},
	eat: function (){
		
	}
	
};

var mittens = Object.create(Cat);
mittens.meow();
mittens.age=7;
mittens.name='Mittens';

var fluffy = Object.create(Cat);
fluffy.meow();
fluffy.age=5;
fluffy.name='Fluffy';

console.log ('CatType:name:  ' + fluffy.name + '     age:  ' + fluffy.age);

document.getElementById("input1").innerHTML = 'CatType:name:  ' + fluffy.name + '     age:  ' + fluffy.age;

function sum(args){
	console.log ("args:  " +  args);

	console.log('arguments:  ' + arguments.length); //arguments is the default list of parameters to the function
	var mysum =0;
	for (i = 0; i < arguments.length; i++){
		mysum=mysum+=arguments[i];
//		console.log('mysum:  ' + mysum);
	}
	return mysum;
}

console.log('sum 7+3+5: '  + sum(7,3,5));
console.log('sum 7+3+5-20:  '  + sum(7,3,5,-20));