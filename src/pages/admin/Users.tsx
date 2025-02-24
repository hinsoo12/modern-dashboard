
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Download, Filter, UserPlus, Search } from "lucide-react";
import { useState } from "react";
import UserStats from "@/components/users/UserStats";
import UserTable from "@/components/users/UserTable";
import UserDialogs from "@/components/users/UserDialogs";
import { User, DialogType, ResetData } from "@/types/user";

const mockUsers: User[] = [
  {
    id: "USR123",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "active",
    verified: true,
    joinDate: "2024-01-15",
    lastLogin: "2024-02-20 14:30",
  },
  {
    id: "USR124",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    status: "pending",
    verified: false,
    joinDate: "2024-02-01",
    lastLogin: "2024-02-19 09:15",
  },
  {
    id: "USR125",
    name: "Bob Wilson",
    email: "bob.wilson@example.com",
    status: "suspended",
    verified: true,
    joinDate: "2023-12-10",
    lastLogin: "2024-02-15 16:45",
  },
];

const Users = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [dialogType, setDialogType] = useState<DialogType>("add");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<Partial<User>>({
    status: "active",
    verified: false,
  });
  const [resetData, setResetData] = useState<ResetData>({
    password: "",
    confirmPassword: "",
    pin: "",
    confirmPin: "",
    email: "",
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const user: User = {
      id: `USR${Date.now()}`,
      name: newUser.name,
      email: newUser.email,
      status: newUser.status as "active" | "suspended" | "pending",
      verified: newUser.verified || false,
      joinDate: new Date().toISOString().split("T")[0],
      lastLogin: "Never",
    };

    setUsers([...users, user]);
    setNewUser({ status: "active", verified: false });
    setIsDialogOpen(false);
    toast({
      title: "User Added",
      description: "New user has been added successfully.",
    });
  };

  const handleVerifyEmail = () => {
    if (!selectedUser) return;
    
    setUsers(
      users.map((user) =>
        user.id === selectedUser.id ? { ...user, verified: true } : user
      )
    );
    setIsDialogOpen(false);
    toast({
      title: "Email Verified",
      description: `Email verification completed for ${selectedUser.email}`,
    });
  };

  const handleResetPassword = () => {
    if (!selectedUser || !resetData.password || resetData.password !== resetData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Please ensure passwords match.",
        variant: "destructive",
      });
      return;
    }

    setIsDialogOpen(false);
    setResetData({ ...resetData, password: "", confirmPassword: "" });
    toast({
      title: "Password Reset",
      description: `Password has been reset for ${selectedUser.email}`,
    });
  };

  const handleUpdateEmail = () => {
    if (!selectedUser || !resetData.email) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email.",
        variant: "destructive",
      });
      return;
    }

    setUsers(
      users.map((user) =>
        user.id === selectedUser.id
          ? { ...user, email: resetData.email, verified: false }
          : user
      )
    );
    setIsDialogOpen(false);
    setResetData({ ...resetData, email: "" });
    toast({
      title: "Email Updated",
      description: `Email has been updated for user ${selectedUser.name}`,
    });
  };

  const handleResetPin = () => {
    if (!selectedUser || !resetData.pin || resetData.pin !== resetData.confirmPin) {
      toast({
        title: "Validation Error",
        description: "Please ensure PINs match.",
        variant: "destructive",
      });
      return;
    }

    setIsDialogOpen(false);
    setResetData({ ...resetData, pin: "", confirmPin: "" });
    toast({
      title: "PIN Reset",
      description: `PIN has been reset for ${selectedUser.email}`,
    });
  };

  const handleSuspend = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: "suspended" } : user
      )
    );
    toast({
      title: "User Suspended",
      description: "User has been suspended successfully.",
    });
  };

  const handleAction = (user: User, action: DialogType) => {
    setSelectedUser(user);
    setDialogType(action);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">View and manage user accounts</p>
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
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              setSelectedUser(null);
              setDialogType("add");
              setIsDialogOpen(true);
            }}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      <UserStats />

      <Card>
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <UserTable
            users={users}
            onAction={handleAction}
            onSuspend={handleSuspend}
          />
        </div>
      </Card>

      <UserDialogs
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        dialogType={dialogType}
        selectedUser={selectedUser}
        newUser={newUser}
        resetData={resetData}
        onNewUserChange={setNewUser}
        onResetDataChange={setResetData}
        onAddUser={handleAddUser}
        onVerifyEmail={handleVerifyEmail}
        onResetPassword={handleResetPassword}
        onUpdateEmail={handleUpdateEmail}
        onResetPin={handleResetPin}
      />
    </div>
  );
};

export default Users;
