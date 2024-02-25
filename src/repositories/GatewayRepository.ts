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
    return await this.db.getRepository<Gateway>(Gateway).find({});
  }

  async findOne(id: number): Promise<Gateway | null> {
    return await this.db.getRepository<Gateway>(Gateway).findOneBy({
      id,
    });
  }

  async create(gatewayData: Partial<Gateway>): Promise<Gateway> {
    const newGateway = this.db
      .getRepository<Gateway>(Gateway)
      .create(gatewayData);
    return await this.db.getRepository<Gateway>(Gateway).save(newGateway);
  }

  async merge(
    gateway: Gateway,
    gatewayData: Partial<Gateway>
  ): Promise<Gateway> {
    const mergedGateway = this.db
      .getRepository<Gateway>(Gateway)
      .merge(gateway, gatewayData);
    return await this.db.getRepository<Gateway>(Gateway).save(mergedGateway);
  }

  async save(gateway: Gateway): Promise<Gateway> {
    return await this.db.getRepository<Gateway>(Gateway).save(gateway);
  }

  async delete(id: number): Promise<void> {
    await this.db.getRepository<Gateway>(Gateway).delete({ id });
  }
}
