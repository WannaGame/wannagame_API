export {};

declare global {
  type DiscordUserData = {
    id: string;
    username: string;
    avatar: string;
  };

  interface UserDTO {
    discordId: string;
    username: string;
    avatar: string;
  }
}
