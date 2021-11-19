"use strict";
// le indicamos usara la inteface Books
const book = { id: 1, title: "my_title", author: "Manuel" };
// Array
const books = [];
// function
function Get_Books() {
    return { id: 1, title: "codificando", author: "uknow" };
}
const my_book = Get_Books();
function Create_Book(book) {
    return book;
}
const new_book = {
    id: 2,
    title: "Alicia in wonderland",
    author: "uknow",
};
Create_Book(new_book);
