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
exports.productController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get data from body
        const data = req.body;
        // insert data at DB
        const result = yield product_service_1.ProductService.createBookIntoDB(data);
        // send response
        res.status(200).json({
            message: "Book created successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err._message || "An error occurred",
            success: false,
            error: err,
            stack: err.stack,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // query At database
        const result = yield product_service_1.ProductService.getAllProduct();
        // send response
        res.status(200).json({
            message: "Books retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error._message || "An error occurred",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        // query At DB
        const result = yield product_service_1.ProductService.getSingleProduct(id);
        //send response
        res.status(200).json({
            message: "Books retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error._message || "An error occurred",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const data = req.body;
        // update data At DB
        const result = yield product_service_1.ProductService.updateProduct(id, data);
        //send response
        res.status(200).json({
            message: "Book updated successfully ",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error._message || "An error occurred",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.productId;
    // delete data from DB
    const result = yield product_service_1.ProductService.deleteProduct(id);
    //  send response 
    res.status(200).json({
        message: "Book deleted successfully ",
        success: true,
        data: result,
    });
});
exports.productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
};
