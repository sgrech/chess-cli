import "module-alias/register";
import mikroOrmConfig from "@infrastructure/db/mikro-orm.config";
import { MikroORM } from "@mikro-orm/core";
import { ChessDotCom } from "@services/ChessDotCom";
import config from "config";
import { Player } from "@entities/Player";
import { epochToDate } from "@utilities/helper";

const chessDotComBaseUrl = config.get<string>("chessDotCom.baseUrl");
const chessDotCom = ChessDotCom.getInstance(chessDotComBaseUrl);

const {
  POSTGRES_USERNAME: dbUsername,
  POSTGRES_PASSWORD: dbPassword,
} = process.env;

console.log(dbUsername, dbPassword);

const run = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  console.log(orm.em);
  const player = await chessDotCom.getPlayer("eladhel");
  console.log(player);
  console.log(epochToDate(player.last_online));
  console.log(new Date(player.joined * 1000));
  const playerEntity = new Player(player, orm.em);
  await playerEntity.insert();
};

run();
