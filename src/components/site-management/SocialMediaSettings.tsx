
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiteConfig } from "@/types/site-management";

interface SocialMediaSettingsProps {
  config: SiteConfig;
  setConfig: (config: SiteConfig) => void;
}

export const SocialMediaSettings = ({
  config,
  setConfig,
}: SocialMediaSettingsProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Social Media Links</h2>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="facebookUrl">Facebook URL</Label>
            <Input
              id="facebookUrl"
              value={config.facebookUrl}
              onChange={(e) =>
                setConfig({ ...config, facebookUrl: e.target.value })
              }
              placeholder="https://facebook.com/yourpage"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitterUrl">Twitter URL</Label>
            <Input
              id="twitterUrl"
              value={config.twitterUrl}
              onChange={(e) =>
                setConfig({ ...config, twitterUrl: e.target.value })
              }
              placeholder="https://twitter.com/yourhandle"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsappUrl">WhatsApp URL</Label>
            <Input
              id="whatsappUrl"
              value={config.whatsappUrl}
              onChange={(e) =>
                setConfig({ ...config, whatsappUrl: e.target.value })
              }
              placeholder="https://wa.me/yourmobile"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telegramUrl">Telegram URL</Label>
            <Input
              id="telegramUrl"
              value={config.telegramUrl}
              onChange={(e) =>
                setConfig({ ...config, telegramUrl: e.target.value })
              }
              placeholder="https://t.me/yourhandle"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instagramUrl">Instagram URL</Label>
            <Input
              id="instagramUrl"
              value={config.instagramUrl}
              onChange={(e) =>
                setConfig({ ...config, instagramUrl: e.target.value })
              }
              placeholder="https://instagram.com/yourprofile"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
