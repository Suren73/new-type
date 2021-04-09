"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Movie_1 = __importDefault(require("./domain/Movie"));
var Cart_1 = __importDefault(require("./service/Cart"));
var Book_1 = __importDefault(require("./domain/Book"));
var MusicAlbum_1 = __importDefault(require("./domain/MusicAlbum"));
var cart = new Cart_1.default();
console.log(cart.items);
cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
console.log(cart.items);
cart.add(new Movie_1.default(1, "Мстители", "фантастика, боевик, фэнтези, приключения", "США", 2012, "Avengers Assemble!", "137 min. / 02:17", 500));
console.log(cart.items);
console.log(cart.sum());
console.log(cart.totalSum(10));
cart.delItem(1008);
console.log(cart.items);
//# sourceMappingURL=app.js.map