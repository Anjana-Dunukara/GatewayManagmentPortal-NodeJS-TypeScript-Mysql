"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.status(200).json({ message: "hello world" });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server is running on PORT ".concat(PORT));
});
