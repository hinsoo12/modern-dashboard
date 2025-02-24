
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Download,
  Filter,
  RefreshCcw,
  XCircle,
} from "lucide-react";
import { useState } from "react";

type TransactionStatus = "pending" | "completed" | "failed" | "cancelled";

interface Transaction {
  id: string;
  user: string;
  type: "buy" | "sell" | "transfer";
  amount: string;
  currency: string;
  status: TransactionStatus;
  date: string;
  paymentMethod?: string;
  description?: string;
  fee?: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "TX123456",
    user: "john.doe@example.com",
    type: "buy",
    amount: "0.5 BTC",
    currency: "USD",
    status: "completed",
    date: "2024-02-20 14:30",
    paymentMethod: "Credit Card",
    description: "Purchase of Bitcoin",
    fee: "$25.00",
  },
  {
    id: "TX123457",
    user: "alice.smith@example.com",
    type: "sell",
    amount: "1.2 ETH",
    currency: "EUR",
    status: "pending",
    date: "2024-02-20 14:25",
    paymentMethod: "Bank Transfer",
    description: "Sale of Ethereum",
    fee: "€15.00",
  },
  {
    id: "TX123458",
    user: "bob.wilson@example.com",
    type: "transfer",
    amount: "100 USDT",
    currency: "USDT",
    status: "failed",
    date: "2024-02-20 14:20",
    paymentMethod: "Internal Transfer",
    description: "Transfer to external wallet",
    fee: "$5.00",
  },
  {
    id: "TX123459",
    user: "carol.white@example.com",
    type: "buy",
    amount: "0.8 BTC",
    currency: "GBP",
    status: "cancelled",
    date: "2024-02-20 14:15",
    paymentMethod: "Debit Card",
    description: "Purchase of Bitcoin",
    fee: "£20.00",
  },
];

const getStatusIcon = (status: TransactionStatus) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    case "pending":
      return <Clock className="w-4 h-4 text-yellow-500" />;
    case "failed":
      return <XCircle className="w-4 h-4 text-red-500" />;
    case "cancelled":
      return <AlertCircle className="w-4 h-4 text-gray-500" />;
  }
};

const getStatusColor = (status: TransactionStatus) => {
  switch (status) {
    case "completed":
      return "text-green-500 bg-green-50";
    case "pending":
      return "text-yellow-500 bg-yellow-50";
    case "failed":
      return "text-red-500 bg-red-50";
    case "cancelled":
      return "text-gray-500 bg-gray-50";
  }
};

const Transactions = () => {
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleApprove = (transaction: Transaction) => {
    setTransactions(
      transactions.map((t) =>
        t.id === transaction.id ? { ...t, status: "completed" } : t
      )
    );
    setIsDetailsOpen(false);
    toast({
      title: "Transaction Approved",
      description: `Transaction ${transaction.id} has been approved successfully.`,
    });
  };

  const handleReject = (transaction: Transaction) => {
    setTransactions(
      transactions.map((t) =>
        t.id === transaction.id ? { ...t, status: "cancelled" } : t
      )
    );
    setIsDetailsOpen(false);
    toast({
      title: "Transaction Rejected",
      description: `Transaction ${transaction.id} has been rejected.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Transaction Management
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage all platform transactions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="default" size="sm">
            <RefreshCcw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Transactions", value: "1,234", change: "+12.3%" },
          { label: "Success Rate", value: "98.7%", change: "+0.5%" },
          { label: "Average Amount", value: "$1,234", change: "-2.3%" },
          { label: "Total Volume", value: "$1.23M", change: "+15.3%" },
        ].map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <span
                className={`text-xs font-medium ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="relative overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.id}
                  </TableCell>
                  <TableCell>{transaction.user}</TableCell>
                  <TableCell className="capitalize">{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.currency}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(transaction.status)}
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          transaction.status
                        )}`}
                      >
                        {transaction.status.charAt(0).toUpperCase() +
                          transaction.status.slice(1)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setIsDetailsOpen(true);
                        }}
                      >
                        View
                      </Button>
                      {transaction.status === "pending" && (
                        <Button variant="default" size="sm">
                          Approve
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Transaction Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Transaction ID
                  </label>
                  <p className="mt-1">{selectedTransaction.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Status
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    {getStatusIcon(selectedTransaction.status)}
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        selectedTransaction.status
                      )}`}
                    >
                      {selectedTransaction.status.charAt(0).toUpperCase() +
                        selectedTransaction.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">User</label>
                  <p className="mt-1">{selectedTransaction.user}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Date</label>
                  <p className="mt-1">{selectedTransaction.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Type</label>
                  <p className="mt-1 capitalize">{selectedTransaction.type}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Amount
                  </label>
                  <p className="mt-1">
                    {selectedTransaction.amount} {selectedTransaction.currency}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Payment Method
                  </label>
                  <p className="mt-1">{selectedTransaction.paymentMethod}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Fee</label>
                  <p className="mt-1">{selectedTransaction.fee}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Description
                </label>
                <p className="mt-1">{selectedTransaction.description}</p>
              </div>
            </div>
          )}
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>
              Close
            </Button>
            {selectedTransaction?.status === "pending" && (
              <>
                <Button
                  variant="destructive"
                  onClick={() => handleReject(selectedTransaction)}
                >
                  Reject
                </Button>
                <Button onClick={() => handleApprove(selectedTransaction)}>
                  Approve
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Transactions;
