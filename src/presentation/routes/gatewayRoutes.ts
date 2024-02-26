import express, { Router } from "express";
import { GatewayController } from "../controllers/GatewayController";
import { container } from "tsyringe";

const router: Router = express.Router();
const gatewayController = container.resolve(GatewayController);

router.get("/", gatewayController.getAllGateways).bind(gatewayController);
router.get("/:id", gatewayController.getGatewayById).bind(gatewayController);
router.post("/", gatewayController.createGateway).bind(gatewayController);
router.put("/:id", gatewayController.updateGateway).bind(gatewayController);
router
  .patch("/:id", gatewayController.partialUpdateGateway)
  .bind(gatewayController);
router.delete("/:id", gatewayController.deleteGateway).bind(gatewayController);

export default router;
