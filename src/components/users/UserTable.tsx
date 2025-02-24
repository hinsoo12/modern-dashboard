
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserCog, Mail, Key, Lock } from "lucide-react";
import { User, DialogType } from "@/types/user";

interface UserTableProps {
  users: User[];
  onAction: (user: User, action: DialogType) => void;
  onSuspend: (userId: string) => void;
}

const UserTable = ({ users, onAction, onSuspend }: UserTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Verified</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead>Last Login</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge
                variant={
                  user.status === "active"
                    ? "secondary"
                    : user.status === "suspended"
                    ? "destructive"
                    : "default"
                }
              >
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant={user.verified ? "secondary" : "default"}>
                {user.verified ? "Yes" : "No"}
              </Badge>
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
            <TableCell>{user.lastLogin}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAction(user, "edit")}
                >
                  <UserCog className="w-4 h-4" />
                </Button>
                {!user.verified && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onAction(user, "verify")}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAction(user, "reset")}
                >
                  <Key className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAction(user, "pin")}
                >
                  <Lock className="w-4 h-4" />
                </Button>
                {user.status !== "suspended" && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onSuspend(user.id)}
                  >
                    Suspend
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
