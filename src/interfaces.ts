// interface (regla o plantilla)
interface Book {
  id: number;
  title: string;
  author: string;
  co_author?: string;
}

// objeto implementado la interface
const book: Book = {
  id: 1,
  title: "My title",
  author: "My Author",
};

// array
const books: Book[] = [];

function getBook(): Book {
  return { id: 1, title: "my title", author: "Manuel" };
}

const myBook = getBook();
console.log(myBook.author);
