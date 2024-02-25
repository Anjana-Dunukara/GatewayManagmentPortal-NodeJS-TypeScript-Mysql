import { PeripheralDevice } from "../domains/entities/PeripheralDevice";
import { IPeripheralDeviceRepository } from "../domains/IPeripheralDeviceRepository";
import { inject, injectable } from "tsyringe";
import { DBInitializeSingelton } from "../config/app.datasource";

@injectable()
export class PeripheralDeviceRepository implements IPeripheralDeviceRepository {
  constructor(
    @inject("DBInitializeSingelton")
    private readonly db: DBInitializeSingelton
  ) {}

  async find(): Promise<PeripheralDevice[]> {
    return await this.db
      .getRepository<PeripheralDevice>(PeripheralDevice)
      .find();
  }

  async findOne(id: number): Promise<PeripheralDevice | undefined> {
    return await this.db
      .getRepository<PeripheralDevice>(PeripheralDevice)
      .findOne(id);
  }

  async create(
    peripheralDeviceData: Partial<PeripheralDevice>
  ): Promise<PeripheralDevice> {
    const newPeripheralDevice = this.db
      .getRepository<PeripheralDevice>(PeripheralDevice)
      .create(peripheralDeviceData);
    return await this.db
      .getRepository<PeripheralDevice>(PeripheralDevice)
      .save(newPeripheralDevice);
  }

  async merge(
    peripheralDevice: PeripheralDevice,
    peripheralDeviceData: Partial<PeripheralDevice>
  ): Promise<PeripheralDevice> {
    const mergedPeripheralDevice = this.db
      .getRepository<PeripheralDevice>(PeripheralDevice)
      .merge(peripheralDevice, peripheralDeviceData);
    return await this.db
      .getRepository<PeripheralDevice>(PeripheralDevice)
      .save(mergedPeripheralDevice);
  }

  async save(peripheralDevice: PeripheralDevice): Promise<PeripheralDevice> {
    return await this.db
      .getRepository<PeripheralDevice>(PeripheralDevice)
      .save(peripheralDevice);
  }

  async delete(id: number): Promise<void> {
    await this.db.getRepository<PeripheralDevice>(PeripheralDevice).delete(id);
  }
}
