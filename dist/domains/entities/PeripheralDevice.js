"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeripheralDevice = void 0;
// src/entities/PeripheralDevice.ts
var typeorm_1 = require("typeorm");
var Gateway_1 = require("./Gateway");
var PeripheralDevice = /** @class */ (function () {
    function PeripheralDevice() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], PeripheralDevice.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PeripheralDevice.prototype, "vendor", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], PeripheralDevice.prototype, "dateCreated", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PeripheralDevice.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Gateway_1.Gateway; }, function (gateway) { return gateway.peripheralDevices; }),
        __metadata("design:type", Gateway_1.Gateway)
    ], PeripheralDevice.prototype, "gateway", void 0);
    PeripheralDevice = __decorate([
        (0, typeorm_1.Entity)()
    ], PeripheralDevice);
    return PeripheralDevice;
}());
exports.PeripheralDevice = PeripheralDevice;
