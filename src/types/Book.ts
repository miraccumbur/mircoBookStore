interface Book {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

interface Books {
  error: string;
  total: string;
  books: Array<Book>;
}

interface BookResponse {
  status: number;
  data: Books;
}

export type { Books, BookResponse, Book };
