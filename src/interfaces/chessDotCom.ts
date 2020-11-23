export interface Player {
  player_id: string;
  username: string;
  followers: number;
  country: string;
  last_online: Date;
  joined: Date;
  status: string;
  is_streamer: boolean;
}
