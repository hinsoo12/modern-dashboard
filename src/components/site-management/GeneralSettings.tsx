
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Globe, Image, Lock, Settings, Upload } from "lucide-react";
import { SiteConfig } from "@/types/site-management";

interface GeneralSettingsProps {
  config: SiteConfig;
  setConfig: (config: SiteConfig) => void;
  handleImageUpload: (type: "logo" | "favicon") => void;
  toggleMaintenanceMode: (enabled: boolean) => void;
}

export const GeneralSettings = ({
  config,
  setConfig,
  handleImageUpload,
  toggleMaintenanceMode,
}: GeneralSettingsProps) => {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">General Settings</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input
              id="siteName"
              value={config.siteName}
              onChange={(e) =>
                setConfig({ ...config, siteName: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteUrl">Site URL</Label>
            <Input
              id="siteUrl"
              value={config.siteUrl}
              onChange={(e) =>
                setConfig({ ...config, siteUrl: e.target.value })
              }
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="siteDescription">Site Description</Label>
            <Input
              id="siteDescription"
              value={config.siteDescription}
              onChange={(e) =>
                setConfig({ ...config, siteDescription: e.target.value })
              }
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Branding</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                {config.logo ? (
                  <img
                    src={config.logo}
                    alt="Logo"
                    className="max-w-full max-h-full p-2"
                  />
                ) : (
                  <Image className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <div>
                <h3 className="font-medium">Logo</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Recommended size: 512x512px
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleImageUpload("logo")}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                {config.favicon ? (
                  <img
                    src={config.favicon}
                    alt="Favicon"
                    className="max-w-full max-h-full p-2"
                  />
                ) : (
                  <Globe className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <div>
                <h3 className="font-medium">Favicon</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Recommended size: 32x32px
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleImageUpload("favicon")}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Favicon
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Site Controls</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Settings className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium">Maintenance Mode</p>
                <p className="text-sm text-gray-500">
                  Enable to show maintenance page to visitors
                </p>
              </div>
            </div>
            <Switch
              checked={config.maintenanceMode}
              onCheckedChange={toggleMaintenanceMode}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">User Registration</p>
                <p className="text-sm text-gray-500">
                  Allow new users to register
                </p>
              </div>
            </div>
            <Switch
              checked={config.registrationEnabled}
              onCheckedChange={(checked) =>
                setConfig({ ...config, registrationEnabled: checked })
              }
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="defaultLanguage">Default Language</Label>
              <select
                id="defaultLanguage"
                value={config.defaultLanguage}
                onChange={(e) =>
                  setConfig({ ...config, defaultLanguage: e.target.value })
                }
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select
                id="timezone"
                value={config.timezone}
                onChange={(e) =>
                  setConfig({ ...config, timezone: e.target.value })
                }
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="UTC">UTC</option>
                <option value="America/New_York">Eastern Time</option>
                <option value="America/Chicago">Central Time</option>
                <option value="America/Los_Angeles">Pacific Time</option>
              </select>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
