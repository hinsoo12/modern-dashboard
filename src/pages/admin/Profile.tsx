
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import {
  Bell,
  Camera,
  Key,
  Lock,
  Mail,
  Phone,
  Save,
  Shield,
  User,
} from "lucide-react";

const Profile = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admin Profile</h1>
          <p className="text-muted-foreground">
            Manage your profile and preferences
          </p>
        </div>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src="https://ui-avatars.com/api/?name=Admin+User&background=random"
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                />
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-medium">Admin User</h3>
                <p className="text-sm text-gray-500">Super Administrator</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Admin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-gray-500">Last changed 30 days ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">
                      Enable 2FA for enhanced security
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Activity</h2>
            <div className="space-y-4">
              {[
                {
                  icon: User,
                  text: "Profile updated",
                  time: "2 hours ago",
                },
                {
                  icon: Key,
                  text: "Password changed",
                  time: "30 days ago",
                },
                {
                  icon: Mail,
                  text: "Email verified",
                  time: "60 days ago",
                },
                {
                  icon: Bell,
                  text: "Notification settings updated",
                  time: "90 days ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm"
                >
                  <activity.icon className="w-4 h-4 text-gray-500" />
                  <div>
                    <p>{activity.text}</p>
                    <p className="text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Sessions</h2>
            <div className="space-y-4">
              {[
                {
                  device: "Windows PC",
                  location: "New York, US",
                  status: "Active",
                },
                {
                  device: "iPhone 12",
                  location: "Los Angeles, US",
                  status: "Inactive",
                },
              ].map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{session.device}</p>
                    <p className="text-sm text-gray-500">{session.location}</p>
                  </div>
                  <Badge
                    variant={session.status === "Active" ? "default" : "secondary"}
                  >
                    {session.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
