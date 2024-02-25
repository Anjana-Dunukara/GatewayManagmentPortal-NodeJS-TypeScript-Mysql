// src/routes/peripheralDeviceRoutes.ts
import express, { Router } from "express";
import { PeripheralDeviceController } from "../controllers/PeripheralDeviceController";
import { container } from "tsyringe";

const router: Router = express.Router();
const peripheralDeviceController = container.resolve(
  PeripheralDeviceController
);

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

export default router;
