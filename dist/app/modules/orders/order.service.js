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
exports.OrderService = void 0;
const product_model_1 = require("../products/product.model");
const order_model_1 = require("./order.model");
// create a order
const createOrder = (data, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = data.product;
    const isExitProduct = yield product_model_1.ProductModel.findOne({ _id: id });
    if (!isExitProduct) {
        return res.status(404).json({
            message: "Product not found",
            success: false,
        });
    }
    if (isExitProduct.quantity < 0) {
        yield product_model_1.ProductModel.updateOne({ _id: id }, {
            $set: {
                inStock: false,
            },
        });
        return res.status(400).json({
            message: "You cannot order the product because quantity is lower than 0",
            success: false,
        });
    }
    if (isExitProduct.quantity < data.quantity) {
        return res.status(400).json({
            message: "Insufficient stock for the requested quantity",
            success: false,
        });
    }
    const decreaseProductQuantity = yield product_model_1.ProductModel.updateOne({ _id: id }, {
        $set: {
            quantity: (isExitProduct === null || isExitProduct === void 0 ? void 0 : isExitProduct.quantity) - data.quantity,
        },
    });
    if (decreaseProductQuantity) {
        const result = yield order_model_1.OrderModel.create(data);
        return result;
    }
});
// calculate Total Revenue
const totalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: { $multiply: ["$totalPrice", "$quantity"] } },
            },
        },
        {
            $project: { totalRevenue: 1, _id: 0 },
        },
    ]);
    return result;
});
exports.OrderService = {
    createOrder,
    totalRevenue,
};
