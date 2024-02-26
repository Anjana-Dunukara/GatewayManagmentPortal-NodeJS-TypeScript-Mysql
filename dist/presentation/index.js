"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./containerInitializer");
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var gatewayRoutes_1 = __importDefault(require("./routes/gatewayRoutes"));
var peripheralDeviceRoutes_1 = __importDefault(require("./routes/peripheralDeviceRoutes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/gateways", gatewayRoutes_1.default);
app.use("/devices", peripheralDeviceRoutes_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server is running on PORT ".concat(PORT));
});
