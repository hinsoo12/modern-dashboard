
export interface Complaint {
  id: string;
  userId: string;
  userName: string;
  subject: string;
  message: string;
  status: "new" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  category: "account" | "transaction" | "technical" | "other";
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  resolution?: string;
}
