// import 'reflect-metadata';
// import {log} from './log';
// import {AppContainer} from './appContainer';
// import {myContainer, myContainerLoadAllModules} from '../../inversify.config';
// import {TYPES} from '../objects/types';

console.log('bootstrap2.ts called')
async function f() {
	console.log(`now is ${Date.now()}`)
	const age =	await new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log("delayed call")
			resolve(22)
		}, 1000)
	})
	console.log(`after is ${Date.now()}`)
	const obj1 = {a: 3, b: 4}
	const obj2 = {
		...obj1,
		c: 5,
	}
	console.log(`obj2 is ${obj2}`, obj2)
}
f()
// myContainerLoadAllModules({fakeSigma: false});
// const appContainer = myContainer.get<AppContainer>(TYPES.AppContainer);
// appContainer.start();
