
export interface Activity {
  id: string;
  userId?: string;
  userName?: string;
  type: "user_action" | "system_event" | "admin_action";
  action: string;
  details: string;
  ipAddress?: string;
  timestamp: string;
  status: "success" | "failed" | "pending";
  module: "auth" | "kyc" | "transaction" | "support" | "system" | "wallet" | "profile";
}
