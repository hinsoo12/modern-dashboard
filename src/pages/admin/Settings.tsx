import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Save, Mail, RefreshCcw, Plus } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const { toast } = useToast();
  const [resendConfig, setResendConfig] = useState({
    apiKey: "",
    defaultFromEmail: "",
    defaultFromName: "",
    enabled: false,
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    });
  };

  const handleTestEmail = () => {
    if (!resendConfig.apiKey || !resendConfig.defaultFromEmail) {
      toast({
        title: "Configuration incomplete",
        description: "Please fill in all required Resend API fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Test email sent",
      description: "A test email has been sent to verify the configuration.",
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">
            Configure system preferences and options
          </p>
        </div>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6 grid-cols-1">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Email Configuration (Resend)</h2>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="resendApiKey">Resend API Key</Label>
                <Input
                  id="resendApiKey"
                  type="password"
                  value={resendConfig.apiKey}
                  onChange={(e) =>
                    setResendConfig({ ...resendConfig, apiKey: e.target.value })
                  }
                  placeholder="Enter your Resend API key"
                />
                <p className="text-sm text-muted-foreground">
                  Your Resend API key from the Resend dashboard
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="defaultFromEmail">Default From Email</Label>
                <Input
                  id="defaultFromEmail"
                  type="email"
                  value={resendConfig.defaultFromEmail}
                  onChange={(e) =>
                    setResendConfig({
                      ...resendConfig,
                      defaultFromEmail: e.target.value,
                    })
                  }
                  placeholder="noreply@yourdomain.com"
                />
                <p className="text-sm text-muted-foreground">
                  Default sender email address
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="defaultFromName">Default From Name</Label>
                <Input
                  id="defaultFromName"
                  value={resendConfig.defaultFromName}
                  onChange={(e) =>
                    setResendConfig({
                      ...resendConfig,
                      defaultFromName: e.target.value,
                    })
                  }
                  placeholder="Your Company Name"
                />
                <p className="text-sm text-muted-foreground">
                  Default sender name for emails
                </p>
              </div>
              <div className="space-y-2">
                <Label className="block mb-4">Email Service Status</Label>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Enable Email Service</p>
                      <p className="text-sm text-gray-500">
                        Toggle email functionality
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={resendConfig.enabled}
                    onCheckedChange={(checked) =>
                      setResendConfig({ ...resendConfig, enabled: checked })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleTestEmail}>
                <RefreshCcw className="w-4 h-4 mr-2" />
                Test Configuration
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">General Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">System Maintenance Mode</p>
                <p className="text-sm text-gray-500">
                  Enable maintenance mode for system updates
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Debug Mode</p>
                <p className="text-sm text-gray-500">
                  Enable detailed logging for debugging
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto Updates</p>
                <p className="text-sm text-gray-500">
                  Automatically install system updates
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">
                  Require 2FA for all admin accounts
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Session Timeout</p>
                <p className="text-sm text-gray-500">
                  Automatically log out inactive users
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">IP Whitelisting</p>
                <p className="text-sm text-gray-500">
                  Restrict access to specific IP addresses
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Email Templates</h2>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Template
            </Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Template Name</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "Welcome Email",
                    subject: "Welcome to Our Platform",
                    lastModified: "2024-02-20",
                    status: "Active",
                  },
                  {
                    name: "Password Reset",
                    subject: "Reset Your Password",
                    lastModified: "2024-02-19",
                    status: "Active",
                  },
                  {
                    name: "Account Verification",
                    subject: "Verify Your Account",
                    lastModified: "2024-02-18",
                    status: "Draft",
                  },
                ].map((template, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {template.name}
                    </TableCell>
                    <TableCell>{template.subject}</TableCell>
                    <TableCell>{template.lastModified}</TableCell>
                    <TableCell>
                      <Badge
                        variant={template.status === "Active" ? "default" : "secondary"}
                      >
                        {template.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
