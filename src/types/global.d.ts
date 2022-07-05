export {};

declare global {
  type DiscordUserData = {
    id: string;
    username: string;
    avatar: string;
  };

  interface UserDTO {
    discordId: number;
    username: string;
    avatar: string;
  }
}
