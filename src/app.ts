import "module-alias/register";
import config from "config";
import { ChessDotCom } from "@services/ChessDotCom";

const chessDotComBaseUrl = config.get<string>("chessDotCom.baseUrl");
const chessDotCom = ChessDotCom.getInstance(chessDotComBaseUrl);

const run = async () => {
  const player = await chessDotCom.getPlayer("eladhel");
  console.log(player);
};

run();
