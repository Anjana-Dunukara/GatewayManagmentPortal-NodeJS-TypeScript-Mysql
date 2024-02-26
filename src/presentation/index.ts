import "reflect-metadata";
import "./containerInitializer";
import express, { Express } from "express";
import dotenv from "dotenv";
import gatewayRoutes from "./routes/gatewayRoutes";
import peripheralDeviceRoutes from "./routes/peripheralDeviceRoutes";

dotenv.config();

const app: Express = express();
app.use(express.json());

app.use("/gateways", gatewayRoutes);
app.use("/devices", peripheralDeviceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
