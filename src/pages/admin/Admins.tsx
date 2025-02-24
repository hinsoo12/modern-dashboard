
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Search } from "lucide-react";
import type { AdminUser, AdminFormData } from "@/types/admin";
import AdminTable from "@/components/admin/AdminTable";
import AddAdminForm from "@/components/admin/AddAdminForm";

const mockAdmins: AdminUser[] = [
  {
    id: "ADM1",
    name: "John Admin",
    email: "john.admin@example.com",
    role: "super_admin",
    status: "active",
    createdAt: "2024-01-15",
    lastLogin: "2024-02-20 14:30",
  },
];

const AdminsPage = () => {
  const { toast } = useToast();
  const [admins, setAdmins] = useState<AdminUser[]>(mockAdmins);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<AdminFormData>({
    name: "",
    email: "",
    role: "admin",
    status: "active",
  });

  const handleAddAdmin = () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const newAdmin: AdminUser = {
      id: `ADM${Date.now()}`,
      ...formData,
      createdAt: new Date().toISOString().split("T")[0],
      lastLogin: null,
    };

    setAdmins([...admins, newAdmin]);
    setIsDialogOpen(false);
    setFormData({
      name: "",
      email: "",
      role: "admin",
      status: "active",
    });

    toast({
      title: "Success",
      description: "New admin user has been added successfully.",
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admin Management</h1>
          <p className="text-muted-foreground">
            Manage administrator accounts and permissions
          </p>
        </div>
        <Button
          onClick={() => setIsDialogOpen(true)}
          size="sm"
          className="flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Add Admin
        </Button>
      </div>

      <Card>
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              placeholder="Search admins..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <AdminTable admins={admins} />
        </div>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Admin</DialogTitle>
          </DialogHeader>
          <AddAdminForm
            formData={formData}
            onFormChange={setFormData}
            onCancel={() => setIsDialogOpen(false)}
            onSubmit={handleAddAdmin}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminsPage;
