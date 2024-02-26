import { DataSource } from "typeorm";
import path from "path";
import { injectable } from "tsyringe";

@injectable()
export class DBInitializeSingelton extends DataSource {
  constructor() {
    super({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "tech-veturas",
      entities: [path.join(process.cwd(), "/src/domains/entities/*.ts")],
      synchronize: true,
      logging: true,
    });

    this.connectToDB();
  }

  private async connectToDB(): Promise<any> {
    try {
      await super.initialize();
      console.log("Connection to Database Succesfull");
    } catch (error) {
      console.log("Connection to Database Failed");
      process.exit(1);
    }
  }
}
