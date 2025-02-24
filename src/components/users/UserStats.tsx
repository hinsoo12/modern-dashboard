
import { Card } from "@/components/ui/card";

const UserStats = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {[
        { label: "Total Users", value: "12,345", change: "+12.3%" },
        { label: "Active Users", value: "10,234", change: "+8.5%" },
        { label: "Pending Verification", value: "123", change: "-5.3%" },
        { label: "Suspended Accounts", value: "45", change: "-2.3%" },
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
  );
};

export default UserStats;
