
export interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "suspended" | "pending";
  verified: boolean;
  joinDate: string;
  lastLogin: string;
}

export type DialogType = "edit" | "add" | "verify" | "reset" | "email" | "pin";

export interface ResetData {
  password: string;
  confirmPassword: string;
  pin: string;
  confirmPin: string;
  email: string;
}
