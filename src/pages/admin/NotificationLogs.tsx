
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Archive,
  Bell,
  Download,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import { useState } from "react";

interface NotificationLog {
  id: string;
  type: "info" | "warning" | "success" | "error";
  message: string;
  recipient: string;
  channel: "email" | "sms" | "push";
  status: "sent" | "failed" | "pending";
  timestamp: string;
}

const mockLogs: NotificationLog[] = [
  {
    id: "NOT001",
    type: "success",
    message: "KYC verification completed successfully",
    recipient: "john.doe@example.com",
    channel: "email",
    status: "sent",
    timestamp: "2024-02-20 14:30:00",
  },
  {
    id: "NOT002",
    type: "warning",
    message: "Suspicious login attempt detected",
    recipient: "+1234567890",
    channel: "sms",
    status: "sent",
    timestamp: "2024-02-20 13:15:00",
  },
  {
    id: "NOT003",
    type: "error",
    message: "Failed to process withdrawal request",
    recipient: "alice.smith@example.com",
    channel: "push",
    status: "failed",
    timestamp: "2024-02-20 12:45:00",
  },
  {
    id: "NOT004",
    type: "info",
    message: "Account settings updated",
    recipient: "bob.wilson@example.com",
    channel: "email",
    status: "pending",
    timestamp: "2024-02-20 11:30:00",
  },
];

const NotificationLogs = () => {
  const [logs] = useState<NotificationLog[]>(mockLogs);

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "sent":
        return "secondary";
      case "failed":
        return "destructive";
      default:
        return "default";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "error":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Notification Logs
          </h1>
          <p className="text-muted-foreground">
            View and manage system notification history
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
          <Button variant="outline" size="sm">
            <Archive className="w-4 h-4 mr-2" />
            Archive
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Notifications", value: "5,432", change: "+8.1%" },
          { label: "Successful Deliveries", value: "5,001", change: "+12.3%" },
          { label: "Failed Deliveries", value: "431", change: "-15.2%" },
          { label: "Pending Notifications", value: "89", change: "+3.7%" },
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
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              placeholder="Search notifications..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(log.type)}
                      <span className="capitalize">{log.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {log.message}
                  </TableCell>
                  <TableCell>{log.recipient}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {log.channel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(log.status)}>
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default NotificationLogs;
