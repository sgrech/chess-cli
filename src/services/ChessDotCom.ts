import type { Player } from "@interfaces/chessDotCom";
import axios from "axios";
import type { AxiosInstance } from "axios";
import { MemoryCache } from "ts-method-cache";

export class ChessDotCom {
  private static instance: ChessDotCom;
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({ baseURL });
  }

  @MemoryCache()
  async getPlayer(username: string): Promise<Player> {
    console.log("Calling getPlayer again");
    const response = await this.api.get(`/pub/player/${username}`);
    return response.data as Player;
  }

  public static getInstance(baseURL: string): ChessDotCom {
    if (!ChessDotCom.instance) {
      ChessDotCom.instance = new ChessDotCom(baseURL);
    }
    return ChessDotCom.instance;
  }
}
