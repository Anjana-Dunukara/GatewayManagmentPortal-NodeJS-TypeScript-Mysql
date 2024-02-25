import { Lifecycle, container } from "tsyringe";
import { GatewayService } from "../services/GatewayService";
import { GatewayController } from "./controllers/GatewayController";
import { PeripheralDeviceService } from "../services/PeripheralDeviceService";
import { PeripheralDeviceController } from "./controllers/PeripheralDeviceController";
import { GatewayRepository } from "../repositories/GatewayRepository";
import { PeripheralDeviceRepository } from "../repositories/PeripheralDeviceRepository";
import { DBInitializeSingelton } from "../config/app.datasource";

//DataBase
container.register(
  "DBInitializeSingelton",
  { useClass: DBInitializeSingelton },
  { lifecycle: Lifecycle.Singleton }
);

//Gateway
container.register("GatewayRepository", { useClass: GatewayRepository });
container.register("GatewayService", { useClass: GatewayService });
container.register("GatewayController", { useClass: GatewayController });

//Peripheral
container.register("PeripheralDeviceRepository", {
  useClass: PeripheralDeviceRepository,
});
container.register("PeripheralDeviceService", {
  useClass: PeripheralDeviceService,
});
container.register("PeripheralDeviceController", {
  useClass: PeripheralDeviceController,
});
