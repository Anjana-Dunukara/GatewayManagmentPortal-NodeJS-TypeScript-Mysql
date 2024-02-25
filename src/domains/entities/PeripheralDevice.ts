// src/entities/PeripheralDevice.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Gateway } from "./Gateway";

@Entity()
export class PeripheralDevice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vendor: string;

  @Column()
  dateCreated: Date;

  @Column()
  status: string;

  @ManyToOne(() => Gateway, (gateway) => gateway.peripheralDevices)
  gateway: Gateway;
}
