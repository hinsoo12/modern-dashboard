
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { DialogType, User, ResetData } from "@/types/user";

interface UserDialogsProps {
  isOpen: boolean;
  onClose: () => void;
  dialogType: DialogType;
  selectedUser: User | null;
  newUser: Partial<User>;
  resetData: ResetData;
  onNewUserChange: (data: Partial<User>) => void;
  onResetDataChange: (data: ResetData) => void;
  onAddUser: () => void;
  onVerifyEmail: () => void;
  onResetPassword: () => void;
  onUpdateEmail: () => void;
  onResetPin: () => void;
}

const UserDialogs = ({
  isOpen,
  onClose,
  dialogType,
  selectedUser,
  newUser,
  resetData,
  onNewUserChange,
  onResetDataChange,
  onAddUser,
  onVerifyEmail,
  onResetPassword,
  onUpdateEmail,
  onResetPin,
}: UserDialogsProps) => {
  const getDialogContent = () => {
    switch (dialogType) {
      case "add":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Create a new user account. All fields are required.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter full name"
                  value={newUser.name || ""}
                  onChange={(e) =>
                    onNewUserChange({ ...newUser, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={newUser.email || ""}
                  onChange={(e) =>
                    onNewUserChange({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={newUser.status}
                  onChange={(e) =>
                    onNewUserChange({
                      ...newUser,
                      status: e.target.value as User["status"],
                    })
                  }
                >
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="verified"
                  checked={newUser.verified}
                  onChange={(e) =>
                    onNewUserChange({ ...newUser, verified: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="verified">Verified User</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onAddUser}>Add User</Button>
            </DialogFooter>
          </>
        );

      case "verify":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Verify Email</DialogTitle>
              <DialogDescription>
                Confirm email verification for this user.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>User Email</Label>
                <p className="text-sm">{selectedUser?.email}</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onVerifyEmail}>
                <CheckCircle className="w-4 h-4 mr-2" />
                Verify Email
              </Button>
            </DialogFooter>
          </>
        );

      case "reset":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Reset Password</DialogTitle>
              <DialogDescription>
                Set a new password for the user.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>New Password</Label>
                <Input
                  type="password"
                  value={resetData.password}
                  onChange={(e) =>
                    onResetDataChange({
                      ...resetData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  value={resetData.confirmPassword}
                  onChange={(e) =>
                    onResetDataChange({
                      ...resetData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onResetPassword}>Reset Password</Button>
            </DialogFooter>
          </>
        );

      case "email":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Change Email</DialogTitle>
              <DialogDescription>
                Update the user's email address.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Current Email</Label>
                <p className="text-sm">{selectedUser?.email}</p>
              </div>
              <div className="space-y-2">
                <Label>New Email</Label>
                <Input
                  type="email"
                  value={resetData.email}
                  onChange={(e) =>
                    onResetDataChange({ ...resetData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onUpdateEmail}>Update Email</Button>
            </DialogFooter>
          </>
        );

      case "pin":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Reset PIN</DialogTitle>
              <DialogDescription>Set a new PIN for the user.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>New PIN</Label>
                <Input
                  type="password"
                  maxLength={6}
                  value={resetData.pin}
                  onChange={(e) =>
                    onResetDataChange({ ...resetData, pin: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Confirm PIN</Label>
                <Input
                  type="password"
                  maxLength={6}
                  value={resetData.confirmPin}
                  onChange={(e) =>
                    onResetDataChange({
                      ...resetData,
                      confirmPin: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onResetPin}>Reset PIN</Button>
            </DialogFooter>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>{getDialogContent()}</DialogContent>
    </Dialog>
  );
};

export default UserDialogs;
