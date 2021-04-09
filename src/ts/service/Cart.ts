import Buyable from '../domain/Buyable';

export default class Cart {
	private _items: Buyable[] = [];
	private result: number = 0;
	private totalAmaunt: number = 0;

	add(item: Buyable): void {
		this._items.push(item);
	}

	get items(): Buyable[] {
		return [...this._items];
	}

	sum(): number {
		return this.result = this._items.reduce((sum, current) => {
			return sum + current.price;
		}, 0);
	}
	totalSum(bonus: number): number | Error {
		if (bonus > 0) {
			return this.totalAmaunt = this.sum() - Math.ceil(this.sum() * bonus / 100);
		} else {
			throw new Error('Бонус должен быть больше нуля');
		}

	}
	delItem(id: number): void {
		let count: number = this._items.findIndex((el) => el.id === id);

		if (count > -1) {
			this._items.splice(count, 1);
		} else {
			throw new Error('Индекс ненайден');
		}
	}
}