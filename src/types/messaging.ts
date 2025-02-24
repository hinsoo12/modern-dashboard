
export interface MessagingChannel {
  id: string;
  type: "whatsapp" | "telegram";
  name: string;
  status: "active" | "inactive";
  phoneNumber?: string;
  username?: string;
  createdAt: string;
  lastActive: string;
}

export interface Message {
  id: string;
  channelId: string;
  channelType: "whatsapp" | "telegram";
  userId?: string;
  userName?: string;
  content: string;
  direction: "inbound" | "outbound";
  status: "sent" | "delivered" | "read" | "failed";
  timestamp: string;
}
