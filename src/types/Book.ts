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

interface BookDetail {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
  pdf: {
    "Free eBook": string;
  };
}

interface BookDetailResponse {
  status: number;
  data: BookDetail;
}

export type { Books, BookResponse, Book, BookDetail, BookDetailResponse };
