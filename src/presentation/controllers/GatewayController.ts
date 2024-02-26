import { Request, Response } from "express";
import { GatewayService } from "../../services/GatewayService";
import { inject, injectable } from "tsyringe";

@injectable()
export class GatewayController {
  constructor(
    @inject("GatewayService") private readonly gatewayService: GatewayService
  ) {}

  async getAllGateways(req: Request, res: Response): Promise<void> {
    try {
      const gateways = await this.gatewayService.getAllGateways();
      res.json(gateways);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async getGatewayById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const gateway = await this.gatewayService.getGatewayById(id);
      if (!gateway) {
        res.status(404).json({ message: "Gateway not found" });
        return;
      }
      res.json(gateway);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async createGateway(req: Request, res: Response): Promise<void> {
    try {
      const newGateway = await this.gatewayService.createGateway(req.body);
      res.status(201).json(newGateway);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async updateGateway(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const updatedGateway = await this.gatewayService.updateGateway(
        id,
        req.body
      );
      if (!updatedGateway) {
        res.status(404).json({ message: "Gateway not found" });
        return;
      }
      res.json(updatedGateway);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async deleteGateway(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      await this.gatewayService.deleteGateway(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async partialUpdateGateway(arg0: string, partialUpdateGateway: any) {
    throw new Error("Method not implemented.");
  }
}
