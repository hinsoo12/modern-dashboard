
export interface UserFinance {
  id: string;
  userId: string;
  userName: string;
  email: string;
  balance: {
    fiat: number;
    currency: string;
  };
  cryptocurrencies: {
    symbol: string;
    amount: number;
    usdValue: number;
  }[];
  lastTransaction: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: "credit" | "debit";
  amount: number;
  currency: string;
  status: "completed" | "pending" | "failed";
  description: string;
  timestamp: string;
}
