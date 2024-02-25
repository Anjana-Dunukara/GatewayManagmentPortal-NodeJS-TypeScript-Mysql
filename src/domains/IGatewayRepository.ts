import { Gateway } from "../domains/entities/Gateway";

export interface IGatewayRepository {
  find(): Promise<Gateway[]>;
  findOne(id: number): Promise<Gateway | undefined>;
  create(gatewayData: Partial<Gateway>): Gateway;
  merge(gateway: Gateway, gatewayData: Partial<Gateway>): Gateway;
  save(gateway: Gateway): Promise<Gateway>;
  delete(id: number): Promise<void>;
}
