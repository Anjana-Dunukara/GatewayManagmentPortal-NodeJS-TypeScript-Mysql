import { PeripheralDeviceRepository } from "../repositories/PeripheralDeviceRepository";
import { PeripheralDevice } from "../domains/entities/PeripheralDevice";
import { inject, injectable } from "tsyringe";

@injectable()
export class PeripheralDeviceService {
  constructor(
    @inject("PeripheralDeviceRepository")
    private readonly peripheralDeviceRepository: PeripheralDeviceRepository
  ) {}

  async getAllPeripheralDevices(): Promise<PeripheralDevice[]> {
    return await this.peripheralDeviceRepository.find();
  }

  async getPeripheralDeviceById(id: number): Promise<PeripheralDevice | null> {
    return await this.peripheralDeviceRepository.findOne(id);
  }

  async createPeripheralDevice(
    peripheralDeviceData: Partial<PeripheralDevice>
  ): Promise<PeripheralDevice> {
    return await this.peripheralDeviceRepository.create(peripheralDeviceData);
  }

  async updatePeripheralDevice(
    id: number,
    peripheralDeviceData: Partial<PeripheralDevice>
  ): Promise<PeripheralDevice | undefined> {
    let peripheralDevice = await this.peripheralDeviceRepository.findOne(id);
    if (peripheralDevice) {
      peripheralDevice = await this.peripheralDeviceRepository.merge(
        peripheralDevice,
        peripheralDeviceData
      );
      return await this.peripheralDeviceRepository.save(peripheralDevice);
    }
    return undefined;
  }

  async deletePeripheralDevice(id: number): Promise<void> {
    await this.peripheralDeviceRepository.delete(id);
  }
}
