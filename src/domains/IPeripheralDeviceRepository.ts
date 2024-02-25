import { PeripheralDevice } from "../domains/entities/PeripheralDevice";

export interface IPeripheralDeviceRepository {
  find(): Promise<PeripheralDevice[]>;
  findOne(id: number): Promise<PeripheralDevice | null>;
  create(
    peripheralDeviceData: Partial<PeripheralDevice>
  ): Promise<PeripheralDevice>;
  merge(
    peripheralDevice: PeripheralDevice,
    peripheralDeviceData: Partial<PeripheralDevice>
  ): Promise<PeripheralDevice>;
  save(peripheralDevice: PeripheralDevice): Promise<PeripheralDevice>;
  delete(id: number): Promise<void>;
}
