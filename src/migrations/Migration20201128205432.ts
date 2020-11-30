import { Migration } from '@mikro-orm/migrations';

export class Migration20201128205432 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "player" ("id" serial primary key, "url" varchar(255) not null, "username" varchar(255) not null, "followers" int4 not null, "country" varchar(255) not null, "last_online" timestamptz(0) not null, "joined" timestamptz(0) not null, "status" varchar(255) not null, "is_streamer" bool not null);');
  }

}
