"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var GatewayService_1 = require("../services/GatewayService");
var GatewayController_1 = require("./controllers/GatewayController");
var PeripheralDeviceService_1 = require("../services/PeripheralDeviceService");
var PeripheralDeviceController_1 = require("./controllers/PeripheralDeviceController");
var GatewayRepository_1 = require("../repositories/GatewayRepository");
var PeripheralDeviceRepository_1 = require("../repositories/PeripheralDeviceRepository");
var app_datasource_1 = require("../config/app.datasource");
//DataBase
tsyringe_1.container.register("DBInitializeSingelton", { useClass: app_datasource_1.DBInitializeSingelton }, { lifecycle: tsyringe_1.Lifecycle.Singleton });
//Gateway
tsyringe_1.container.register("GatewayRepository", { useClass: GatewayRepository_1.GatewayRepository });
tsyringe_1.container.register("GatewayService", { useClass: GatewayService_1.GatewayService });
tsyringe_1.container.register("GatewayController", { useClass: GatewayController_1.GatewayController });
//Peripheral
tsyringe_1.container.register("PeripheralDeviceRepository", {
    useClass: PeripheralDeviceRepository_1.PeripheralDeviceRepository,
});
tsyringe_1.container.register("PeripheralDeviceService", {
    useClass: PeripheralDeviceService_1.PeripheralDeviceService,
});
tsyringe_1.container.register("PeripheralDeviceController", {
    useClass: PeripheralDeviceController_1.PeripheralDeviceController,
});
