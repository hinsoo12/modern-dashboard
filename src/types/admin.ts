
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "super_admin" | "admin";
  status: "active" | "inactive";
  createdAt: string;
  lastLogin: string | null;
}

export type AdminFormData = Omit<AdminUser, "id" | "createdAt" | "lastLogin">;
