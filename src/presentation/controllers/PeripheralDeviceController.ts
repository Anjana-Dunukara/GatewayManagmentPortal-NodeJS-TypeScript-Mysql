// src/controllers/PeripheralDeviceController.ts
import { Request, Response } from "express";
import { PeripheralDeviceService } from "../../services/PeripheralDeviceService";
import { inject, injectable } from "tsyringe";

@injectable()
export class PeripheralDeviceController {
  constructor(
    @inject("PeripheralDeviceService")
    private readonly peripheralDeviceService: PeripheralDeviceService
  ) {}

  async getAllPeripheralDevices(req: Request, res: Response): Promise<void> {
    try {
      const peripheralDevices =
        await this.peripheralDeviceService.getAllPeripheralDevices();
      res.json(peripheralDevices);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async getPeripheralDeviceById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const peripheralDevice =
        await this.peripheralDeviceService.getPeripheralDeviceById(id);
      if (!peripheralDevice) {
        res.status(404).json({ message: "Peripheral Device not found" });
        return;
      }
      res.json(peripheralDevice);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async createPeripheralDevice(req: Request, res: Response): Promise<void> {
    try {
      const newPeripheralDevice =
        await this.peripheralDeviceService.createPeripheralDevice(req.body);
      res.status(201).json(newPeripheralDevice);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async updatePeripheralDevice(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const updatedPeripheralDevice =
        await this.peripheralDeviceService.updatePeripheralDevice(id, req.body);
      if (!updatedPeripheralDevice) {
        res.status(404).json({ message: "Peripheral Device not found" });
        return;
      }
      res.json(updatedPeripheralDevice);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async deletePeripheralDevice(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      await this.peripheralDeviceService.deletePeripheralDevice(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async partialUpdatePeripheralDevice(
    arg0: string,
    partialUpdatePeripheralDevice: any
  ) {
    throw new Error("Method not implemented.");
  }
}
