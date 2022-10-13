export interface IPost {
  id: number;
  title: string;
  text: string;
  image: string;
}

enum UserStatus {
  ACTIVE = "active",
  NO_ACTIVE = "no-active",
}
