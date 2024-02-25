import { GatewayRepository } from "../repositories/GatewayRepository";
import { Gateway } from "../domains/entities/Gateway";
import { inject, injectable } from "tsyringe";

@injectable()
export class GatewayService {
  constructor(
    @inject("GatewayRepository")
    private readonly gatewayRepository: GatewayRepository
  ) {}

  async getAllGateways(): Promise<Gateway[]> {
    return await this.gatewayRepository.find();
  }

  async getGatewayById(id: number): Promise<Gateway | undefined> {
    return await this.gatewayRepository.findOne(id);
  }

  async createGateway(gatewayData: Partial<Gateway>): Promise<Gateway> {
    const gateway = this.gatewayRepository.create(gatewayData);
    return await this.gatewayRepository.save(gateway);
  }

  async updateGateway(
    id: number,
    gatewayData: Partial<Gateway>
  ): Promise<Gateway | undefined> {
    let gateway = await this.gatewayRepository.findOne(id);
    if (gateway) {
      gateway = this.gatewayRepository.merge(gateway, gatewayData);
      return await this.gatewayRepository.save(gateway);
    }
    return undefined;
  }

  async deleteGateway(id: number): Promise<void> {
    await this.gatewayRepository.delete(id);
  }
}
