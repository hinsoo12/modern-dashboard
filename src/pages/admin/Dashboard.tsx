
import { Card } from "@/components/ui/card";
import { Users, Wallet, RefreshCcw, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+12.3%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Active Wallets",
    value: "8,765",
    change: "+5.7%",
    icon: Wallet,
    trend: "up",
  },
  {
    title: "Daily Transactions",
    value: "2,345",
    change: "+8.1%",
    icon: RefreshCcw,
    trend: "up",
  },
  {
    title: "Revenue",
    value: "$123.4k",
    change: "+15.3%",
    icon: TrendingUp,
    trend: "up",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your platform today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <stat.icon className="w-5 h-5 text-primary" />
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div>
                  <p className="text-sm">New user registration</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Pending Actions</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <div>
                  <p className="text-sm">Withdrawal approval needed</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">System Status</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <div>
                  <p className="text-sm">All systems operational</p>
                  <p className="text-xs text-gray-500">Updated 1 minute ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
