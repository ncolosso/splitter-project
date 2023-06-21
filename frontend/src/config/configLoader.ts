import configDev from "./config.dev.ts";
import configProd from "./config.prod.ts";

const thisConfig = process.env.NODE_ENV === "development" ? configDev : configProd;

export default thisConfig;