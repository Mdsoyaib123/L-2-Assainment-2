"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
// insert product into DB
const createBookIntoDB = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(book);
    return result;
});
// get all product
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
// get single product
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findById({ _id: id });
    return result;
});
// update product
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
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
    const updatedProduct = yield product_model_1.ProductModel.updateMany(filter, update);
    if (updatedProduct) {
        const result = yield product_model_1.ProductModel.findOne({ _id: id });
        return result;
    }
});
// delete a product
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const removeProduct = yield product_model_1.ProductModel.deleteOne({ _id: id });
    if (removeProduct) {
        const result = yield product_model_1.ProductModel.findOne({ _id: id });
        return result;
    }
});
exports.ProductService = {
    createBookIntoDB,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
