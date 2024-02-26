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
exports.Gateway = void 0;
// src/entities/Gateway.ts
var typeorm_1 = require("typeorm");
var PeripheralDevice_1 = require("./PeripheralDevice");
var Gateway = /** @class */ (function () {
    function Gateway() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Gateway.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Gateway.prototype, "serialNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Gateway.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Gateway.prototype, "ipv4Address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return PeripheralDevice_1.PeripheralDevice; }, function (device) { return device.gateway; }),
        __metadata("design:type", Array)
    ], Gateway.prototype, "peripheralDevices", void 0);
    Gateway = __decorate([
        (0, typeorm_1.Entity)()
    ], Gateway);
    return Gateway;
}());
exports.Gateway = Gateway;
