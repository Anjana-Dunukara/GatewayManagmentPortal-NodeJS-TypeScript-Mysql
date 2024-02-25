import { Gateway } from "../domains/entities/Gateway";

export interface IGatewayRepository {
  find(): Promise<Gateway[]>;
  findOne(id: number): Promise<Gateway | null>;
  create(gatewayData: Partial<Gateway>): Promise<Gateway>;
  merge(gateway: Gateway, gatewayData: Partial<Gateway>): Promise<Gateway>;
  save(gateway: Gateway): Promise<Gateway>;
  delete(id: number): Promise<void>;
}
