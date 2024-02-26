"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/peripheralDeviceRoutes.ts
var express_1 = __importDefault(require("express"));
var PeripheralDeviceController_1 = require("../controllers/PeripheralDeviceController");
var tsyringe_1 = require("tsyringe");
var router = express_1.default.Router();
var peripheralDeviceController = tsyringe_1.container.resolve(PeripheralDeviceController_1.PeripheralDeviceController);
router
    .get("/", peripheralDeviceController.getAllPeripheralDevices)
    .bind(peripheralDeviceController);
router
    .get("/:id", peripheralDeviceController.getPeripheralDeviceById)
    .bind(peripheralDeviceController);
router
    .post("/", peripheralDeviceController.createPeripheralDevice)
    .bind(peripheralDeviceController);
router
    .put("/:id", peripheralDeviceController.updatePeripheralDevice)
    .bind(peripheralDeviceController);
router
    .patch("/:id", peripheralDeviceController.partialUpdatePeripheralDevice)
    .bind(peripheralDeviceController);
router
    .delete("/:id", peripheralDeviceController.deletePeripheralDevice)
    .bind(peripheralDeviceController);
exports.default = router;
