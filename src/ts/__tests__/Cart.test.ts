import Movie from '../domain/Movie';
import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
	const cart = new Cart();
	expect(cart.items.length).toBe(0);
});

test('movie class testing', () => {
	const expected = {
		id: 1,
		name: 'Мстители',
		genre: 'фантастика, боевик, фэнтези, приключения',
		country: 'США',
		year: 2012,
		slogan: 'Avengers Assemble!',
		time: '137 min. / 02:17',
		price: 500
	};
	const received = new Movie(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500);
	expect(received).toEqual(expected);
});

test('testing method add', () => {
	const expected = [
		{
			id: 1,
			name: 'Мстители',
			genre: 'фантастика, боевик, фэнтези, приключения',
			country: 'США',
			year: 2012,
			slogan: 'Avengers Assemble!',
			time: '137 min. / 02:17',
			price: 500
		}
	];
	const cart = new Cart();
	cart.add(new Movie(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
	const received = cart.items;
	expect(received).toEqual(expected);
});

test('testing method sum', () => {
	const expected = 3400;
	const cart = new Cart();
	cart.add(new Movie(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
	cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	const received = cart.sum();
	expect(received).toEqual(expected);
});

test('testing method totalSum', () => {
	const expected = 3060;
	const cart = new Cart();
	cart.add(new Movie(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
	cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	const received = cart.totalSum(10);
	expect(received).toEqual(expected);
});

test('testing method delItem', () => {
	const expected = [
		{
			id: 1,
			name: 'Мстители',
			genre: 'фантастика, боевик, фэнтези, приключения',
			country: 'США',
			year: 2012,
			slogan: 'Avengers Assemble!',
			time: '137 min. / 02:17',
			price: 500
		},
		{
			id: 1008,
			name: 'Meteora',
			author: 'Linkin Park',
			price: 900,
		}
	];
	const cart = new Cart();
	cart.add(new Movie(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
	cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	cart.delItem(1001);
	const received = cart.items

	expect(received).toEqual(expected);
});

test('testing method totalSum on error', () => {
	expect(() => (new Cart).totalSum(-10)).toThrow();
});

test('testing method delItem on error', () => {
	expect(() => (new Cart).delItem(100)).toThrow();
});
