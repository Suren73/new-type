import Buyable from './Buyable';

export default class Movie implements Buyable {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly genre: string,
		readonly country: string,
		readonly year: number,
		readonly slogan: string,
		readonly time: string,
		readonly price: number,
	) { }
}