var sayMyName = function (name) {
	alert('My name is: '+name);
}

 car = { //you signify an object within these braces
	make: 'VW', //property: value
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	turnOn: function () { //this is a method - to execute it: type car.turnOn
		this.isTurnedOn = true;
	},
	fly: function () { //another method - because it's a method and you want it to be executed,(when you're on the console) type it as car.fly()
		alert('fly');
	},
	switchCar: function (isOn/*this is a parameter*/) {
		console.log('turn car '+isOn);
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};

console.log('hello there friends!')