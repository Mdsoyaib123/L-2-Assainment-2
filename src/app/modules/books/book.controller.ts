import { Request, Response } from "express";
import { bookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  const data = req.body;

  const result = await bookService.createBookIntoDB(data);
  res.status(200).json({
    success: true,
    message: "student is created successfully",
    data: result,
  });
};

export const bookController = {
  createBook,
};
