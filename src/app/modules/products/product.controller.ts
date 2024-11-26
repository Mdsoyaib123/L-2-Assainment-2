import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    // get data from body
    const data = req.body;

    // insert data at DB
    const result = await ProductService.createBookIntoDB(data);

    // send response
    res.status(200).json({
      message: "Book created successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err._message || "An error occurred",
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    // query At database
    const result = await ProductService.getAllProduct();
    // send response
    res.status(200).json({
      message: "Books retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error._message || "An error occurred",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;

    // query At DB
    const result = await ProductService.getSingleProduct(id);

    //send response
    res.status(200).json({
      message: "Books retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error._message || "An error occurred",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const data  = req.body
    // update data At DB
    const result = await ProductService.updateProduct(id,data);
    //send response
    res.status(200).json({
      message: "Book updated successfully ",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error._message || "An error occurred",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};
const deleteProduct = async(req:Request,res:Response)=>{
   const id = req.params.productId

  // delete data from DB
   const result = await ProductService.deleteProduct(id)
  //  send response 
   res.status(200).json({
    message: "Book deleted successfully ",
    success: true,
    data: result,
  });
}
export const productController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
