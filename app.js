console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');

function printOdds(count) {
	for (let i = 0; i <= count; i++) {
		if (count % 2 == 0) {
			console.log(i);
		}
	}
}

printOdds(100);

// Exercise 2 Section
console.log('EXERCISE 2:\n==========\n');

function checkAge(userName, age) {
	let aboveSixteen = `Congrats ${userName}, you can drive!`;
	let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

	if (age < 16) {
		console.log(belowSixteen);
	} else {
		console.log(aboveSixteen);
	}
}

checkAge('Nick', 16);

// Exercise 3 Section
console.log('EXERCISE 3:\n==========\n');

function quadrant(x, y) {
	if (x < 0 && y > 0) {
		console.log('Quadrant 2');
	} else if (x > 0 && y > 0) {
		console.log('Quadrant 1');
	} else if (x < 0 && y < 0) {
		console.log('Quadrant 3');
	} else if (x > 0 && y < 0) {
		console.log('Quadrant 4');
	} else if (x == 0 && y != 0) {
		console.log('X Axis');
	} else if (x != 0 && y == 0) {
		console.log('Y Axis');
	} else {
		console.log('Origin');
	}
}

quadrant(11, 1);

// Exercise 4 Section
console.log('EXERCISE 4:\n==========\n');

function isValidTriangle(a, b, c) {
	return a + b > c || a + c > b || b + c > a;
}

function checkTriangle(a, b, c) {
	let isValid = isValidTriangle(a, b, c);

	if (isValid) {
		if (a == b && b == c) {
			return 'Equilateral';
		} else if (a == b || b == c || a == c) {
			return 'Isoscales';
		} else {
			return 'Scalene';
		}
	} else {
		return 'Not a Valid Triangle';
	}
}

console.log(checkTriangle(1, 2, 2));
