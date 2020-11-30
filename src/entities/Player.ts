import { Entity, PrimaryKey, Property, EntityManager } from "@mikro-orm/core";
import { Player as PlayerInterface } from "@interfaces/chessDotCom";
import { epochToDate } from "@utilities/helper";
import { BaseEntity } from "@entities/BaseEntity";

@Entity()
export class Player extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  url: string;

  @Property()
  username: string;

  @Property()
  followers: number;

  @Property()
  country: string;

  @Property()
  last_online: Date;

  @Property()
  joined: Date;

  @Property()
  status: string;

  @Property()
  is_streamer: boolean;

  constructor(player: PlayerInterface, entityManager: EntityManager) {
    super(entityManager);
    this.url = player.url;
    this.id = player.player_id;
    this.username = player.username;
    this.followers = player.followers;
    this.country = player.country;
    this.last_online = epochToDate(player.last_online);
    this.joined = epochToDate(player.joined);
    this.status = player.status;
    this.is_streamer = player.is_streamer;
  }
}
