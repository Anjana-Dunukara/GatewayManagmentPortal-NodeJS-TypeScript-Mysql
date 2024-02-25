import { Gateway } from "../domains/entities/Gateway";
import { IGatewayRepository } from "../domains/IGatewayRepository";
import { inject, injectable } from "tsyringe";
import { DBInitializeSingelton } from "../config/app.datasource";

@injectable()
export class GatewayRepository implements IGatewayRepository {
  constructor(
    @inject("DBInitializeSingelton")
    private readonly db: DBInitializeSingelton
  ) {}

  async find(): Promise<Gateway[]> {
    return this.db.getRepository<Gateway>(Gateway).find({});
  }

  async findOne(id: number): Promise<Gateway | undefined> {
    return this.db.getRepository<Gateway>(Gateway).find({
      where: {
        id: id,
      },
    });
  }

  async create(gatewayData: Partial<Gateway>): Promise<Gateway> {
    const newGateway = this.db.create(gatewayData);
    return await this.gatewayRepository.save(newGateway);
  }

  async merge(
    gateway: Gateway,
    gatewayData: Partial<Gateway>
  ): Promise<Gateway> {
    const mergedGateway = await this.db.merge(Gateway, gateway, gatewayData);
    return await this.db.save(mergedGateway);
  }

  async save(gateway: Gateway): Promise<Gateway> {
    return await this.db.save(gateway);
  }

  async delete(id: number): Promise<void> {
    await this.db.delete(Gateway, id);
  }
}
