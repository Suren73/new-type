import Movie from './domain/Movie';
import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

console.log(cart.items);

cart.add(new Movie(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
console.log(cart.items);
console.log(cart.sum());

console.log(cart.totalSum(10));

cart.delItem(1008);
console.log(cart.items);





