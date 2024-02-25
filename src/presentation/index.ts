import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import gatewayRoutes from "./routes/gatewayRoutes";
import peripheralDeviceRoutes from "./routes/peripheralDeviceRoutes";

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());

app.use("/gateways", gatewayRoutes);
app.use("/devices", peripheralDeviceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
