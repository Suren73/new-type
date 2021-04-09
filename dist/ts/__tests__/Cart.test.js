"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Movie_1 = __importDefault(require("../domain/Movie"));
var Cart_1 = __importDefault(require("../service/Cart"));
var Book_1 = __importDefault(require("../domain/Book"));
var MusicAlbum_1 = __importDefault(require("../domain/MusicAlbum"));
test('new card should be empty', function () {
    var cart = new Cart_1.default();
    expect(cart.items.length).toBe(0);
});
test('movie class testing', function () {
    var expected = {
        id: 1,
        name: 'Мстители',
        genre: 'фантастика, боевик, фэнтези, приключения',
        country: 'США',
        year: 2012,
        slogan: 'Avengers Assemble!',
        time: '137 min. / 02:17',
        price: 500
    };
    var received = new Movie_1.default(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500);
    expect(received).toEqual(expected);
});
test('testing method add', function () {
    var expected = [
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
    var cart = new Cart_1.default();
    cart.add(new Movie_1.default(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
    var received = cart.items;
    expect(received).toEqual(expected);
});
test('testing method sum', function () {
    var expected = 3400;
    var cart = new Cart_1.default();
    cart.add(new Movie_1.default(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
    cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
    var received = cart.sum();
    expect(received).toEqual(expected);
});
test('testing method totalSum', function () {
    var expected = 3060;
    var cart = new Cart_1.default();
    cart.add(new Movie_1.default(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
    cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
    var received = cart.totalSum(10);
    expect(received).toEqual(expected);
});
test('testing method delItem', function () {
    var expected = [
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
    var cart = new Cart_1.default();
    cart.add(new Movie_1.default(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
    cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
    cart.delItem(1001);
    var received = cart.items;
    expect(received).toEqual(expected);
});
test('testing method totalSum on error', function () {
    expect(function () { return (new Cart_1.default).totalSum(-10); }).toThrow();
});
test('testing method delItem on error', function () {
    expect(function () { return (new Cart_1.default).delItem(100); }).toThrow();
});
//# sourceMappingURL=Cart.test.js.map