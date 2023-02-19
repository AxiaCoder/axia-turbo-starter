import { User as ClerkUser } from "@clerk/backend";

export interface User {
  clerkUser: ClerkUser;
  apiUser: any;
}

export interface ApiUser {
  clerk_id: string;
  role: string;
}
