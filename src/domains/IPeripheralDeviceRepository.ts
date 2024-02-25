import { PeripheralDevice } from "../domains/entities/PeripheralDevice";

export interface IPeripheralDeviceRepository {
  find(): Promise<PeripheralDevice[]>;
  findOne(id: number): Promise<PeripheralDevice | undefined>;
  create(peripheralDeviceData: Partial<PeripheralDevice>): PeripheralDevice;
  merge(
    peripheralDevice: PeripheralDevice,
    peripheralDeviceData: Partial<PeripheralDevice>
  ): PeripheralDevice;
  save(peripheralDevice: PeripheralDevice): Promise<PeripheralDevice>;
  delete(id: number): Promise<void>;
}
