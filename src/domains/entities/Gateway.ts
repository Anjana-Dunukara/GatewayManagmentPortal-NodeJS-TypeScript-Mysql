import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PeripheralDevice } from "./PeripheralDevice";

@Entity()
export class Gateway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  serialNumber: string;

  @Column()
  name: string;

  @Column({ unique: true })
  ipv4Address: string;

  @OneToMany(() => PeripheralDevice, (device) => device.gateway)
  peripheralDevices: PeripheralDevice[];
}
