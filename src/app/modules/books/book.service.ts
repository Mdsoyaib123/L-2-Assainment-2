import { TBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBookIntoDB = async (book: TBook) => {
  const result = await BookModel.create(book);
  return result;
};

export const bookService ={
    createBookIntoDB,
}
