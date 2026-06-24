import { ReactNode } from "react";

export interface SessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export interface SessionData {
  user?: SessionUser;
}

export interface NavItem {
  name: string;
  href: string;
  icon: ReactNode;
}
