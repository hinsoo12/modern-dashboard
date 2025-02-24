
import { Card } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const userActivityData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 1000 },
  { name: "May", users: 1200 },
  { name: "Jun", users: 1500 },
];

const transactionData = [
  { name: "Jan", amount: 5000 },
  { name: "Feb", amount: 7000 },
  { name: "Mar", amount: 9000 },
  { name: "Apr", amount: 12000 },
  { name: "May", amount: 15000 },
  { name: "Jun", amount: 18000 },
];

const userTypeData = [
  { name: "Regular", value: 400 },
  { name: "Premium", value: 300 },
  { name: "Enterprise", value: 200 },
];

const COLORS = ["#0EA5E9", "#8B5CF6", "#F97316"];

const Analytics = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics & Reporting</h1>
        <p className="text-muted-foreground">
          Monitor key metrics and performance indicators
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Users", value: "12,345", change: "+12.3%" },
          { label: "Revenue", value: "$45.6K", change: "+8.5%" },
          { label: "Active Sessions", value: "2,345", change: "+15.3%" },
          { label: "Conversion Rate", value: "3.2%", change: "+2.1%" },
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

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">User Activity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#0EA5E9" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Transaction Volume</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="amount" 
                  fill="#8B5CF6" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Card className="col-span-1 p-6">
          <h3 className="text-lg font-semibold mb-4">User Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userTypeData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {userTypeData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm text-gray-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-2 p-6">
          <h3 className="text-lg font-semibold mb-4">Key Performance Metrics</h3>
          <div className="grid gap-4 grid-cols-2">
            {[
              { label: "Avg. Session Duration", value: "5m 32s" },
              { label: "Bounce Rate", value: "32.4%" },
              { label: "Pages per Session", value: "3.8" },
              { label: "New Users", value: "45.2%" },
            ].map((metric) => (
              <div 
                key={metric.label} 
                className="p-4 border rounded-lg"
              >
                <p className="text-sm text-gray-500">{metric.label}</p>
                <p className="text-xl font-semibold mt-1">{metric.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
