interface Book {
  id: number;
  title: string;
  author: string;
  coAuthor?: string; // opcional
  isLoan?: () => void; // metodo o funcion opcional
}

// le indicamos usara la inteface Books
const book: Book = { id: 1, title: "my_title", author: "Manuel" };

// Array
const books: Book[] = [];

// function
function Get_Books(): Book {
  return { id: 1, title: "codificando", author: "uknow" };
}

const my_book = Get_Books();

function Create_Book(book: Book): Book {
  return book;
}

const new_book: Book = {
  id: 2,
  title: "Alicia in wonderland",
  author: "uknow",
};
Create_Book(new_book);
