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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeripheralDeviceController = void 0;
var PeripheralDeviceService_1 = require("../../services/PeripheralDeviceService");
var tsyringe_1 = require("tsyringe");
var PeripheralDeviceController = /** @class */ (function () {
    function PeripheralDeviceController(peripheralDeviceService) {
        this.peripheralDeviceService = peripheralDeviceService;
    }
    PeripheralDeviceController.prototype.getAllPeripheralDevices = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var peripheralDevices, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.peripheralDeviceService.getAllPeripheralDevices()];
                    case 1:
                        peripheralDevices = _a.sent();
                        res.json(peripheralDevices);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(500).json({ message: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PeripheralDeviceController.prototype.getPeripheralDeviceById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, peripheralDevice, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, this.peripheralDeviceService.getPeripheralDeviceById(id)];
                    case 1:
                        peripheralDevice = _a.sent();
                        if (!peripheralDevice) {
                            res.status(404).json({ message: "Peripheral Device not found" });
                            return [2 /*return*/];
                        }
                        res.json(peripheralDevice);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(500).json({ message: error_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PeripheralDeviceController.prototype.createPeripheralDevice = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newPeripheralDevice, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.peripheralDeviceService.createPeripheralDevice(req.body)];
                    case 1:
                        newPeripheralDevice = _a.sent();
                        res.status(201).json(newPeripheralDevice);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(500).json({ message: error_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PeripheralDeviceController.prototype.updatePeripheralDevice = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, updatedPeripheralDevice, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, this.peripheralDeviceService.updatePeripheralDevice(id, req.body)];
                    case 1:
                        updatedPeripheralDevice = _a.sent();
                        if (!updatedPeripheralDevice) {
                            res.status(404).json({ message: "Peripheral Device not found" });
                            return [2 /*return*/];
                        }
                        res.json(updatedPeripheralDevice);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res.status(500).json({ message: error_4.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PeripheralDeviceController.prototype.deletePeripheralDevice = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, this.peripheralDeviceService.deletePeripheralDevice(id)];
                    case 1:
                        _a.sent();
                        res.sendStatus(204);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(500).json({ message: error_5.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PeripheralDeviceController.prototype.partialUpdatePeripheralDevice = function (arg0, partialUpdatePeripheralDevice) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Method not implemented.");
            });
        });
    };
    PeripheralDeviceController = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("PeripheralDeviceService")),
        __metadata("design:paramtypes", [PeripheralDeviceService_1.PeripheralDeviceService])
    ], PeripheralDeviceController);
    return PeripheralDeviceController;
}());
exports.PeripheralDeviceController = PeripheralDeviceController;
