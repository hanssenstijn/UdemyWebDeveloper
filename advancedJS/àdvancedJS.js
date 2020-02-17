const basket = ['apples','orages','grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}


for ( let i= 0; i < basket.length; i++){
	console.log(basket[i]);
}

basket.forEach(item => {
	console.log(item);
})

for (item of basket) {
	console.log(item);
}


for (item of 'basket') {
	console.log(item)
}

for (item in detailedBasket){
	console.log(item)
}

const flattend = [[0,1],[2,3],[4,5]].reduce((a,b) => a,concat(b), []);

const one = () => {
	const two = () => {
		console.log('4');
	}
	two();
}

// time out for asynchrones programming
setTimeout(() => {
	console.log('2')
}, 2000)

//call stack
//web api
// call back queue

// event loop
element.addEventListener('click', () => {
	console.log('click')
})

// modules
