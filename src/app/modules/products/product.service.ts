import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// insert product into DB
const createBookIntoDB = async (book: TProduct) => {
  const result = await ProductModel.create(book);
  return result;
};
// get all product
const getAllProduct = async () => {
  const result = await ProductModel.find();
  return result;
};
// get single product
const getSingleProduct = async (id: string) => {
  const result = await ProductModel.findById({ _id: id });
  return result;
};
// update product
const updateProduct = async (id: string, data: TProduct) => {
  const filter = { _id: id };
  const update = {
    $set: {
      title: data.title,
      author: data.author,
      price: data.price,
      category: data.category,
      description: data.description,
      quantity: data.quantity,
      inStock: data.inStock,
    },
  };
  const updatedProduct = await ProductModel.updateMany(filter, update);
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// delete a product
const deleteProduct = async (id: string) => {
  const removeProduct = await ProductModel.deleteOne({ _id: id });
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

export const ProductService = {
  createBookIntoDB,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
