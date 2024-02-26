"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/gatewayRoutes.ts
var express_1 = __importDefault(require("express"));
var GatewayController_1 = require("../controllers/GatewayController");
var tsyringe_1 = require("tsyringe");
var router = express_1.default.Router();
var gatewayController = tsyringe_1.container.resolve(GatewayController_1.GatewayController);
router.get("/", gatewayController.getAllGateways).bind(gatewayController);
router.get("/:id", gatewayController.getGatewayById).bind(gatewayController);
router.post("/", gatewayController.createGateway).bind(gatewayController);
router.put("/:id", gatewayController.updateGateway).bind(gatewayController);
router
    .patch("/:id", gatewayController.partialUpdateGateway)
    .bind(gatewayController);
router.delete("/:id", gatewayController.deleteGateway).bind(gatewayController);
exports.default = router;
