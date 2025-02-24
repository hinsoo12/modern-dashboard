
import { Bitcoin, ChevronRight, Globe, Key, Lock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                The Next Generation of Cryptocurrency Trading
              </h1>
              <p className="text-xl opacity-90">
                Trade with confidence on the world's fastest and most secure crypto
                exchange platform.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90">
                  Get Started
                  <ChevronRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/128e4fd9-0d32-48c1-8ee2-a3ed963f0363.png"
                alt="Chaincola Platform"
                className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Chaincola?</h2>
            <p className="text-lg text-gray-600">
              Experience the best-in-class trading platform with our unique features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-primary-500" />,
                title: "Secure Platform",
                description:
                  "Industry-leading security measures to protect your assets",
              },
              {
                icon: <Globe className="w-10 h-10 text-primary-500" />,
                title: "Global Access",
                description:
                  "Trade from anywhere in the world with our global network",
              },
              {
                icon: <Key className="w-10 h-10 text-primary-500" />,
                title: "Advanced Trading Tools",
                description:
                  "Professional-grade tools and analytics at your fingertips",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$10B+", label: "Trading Volume" },
              { value: "100+", label: "Countries Supported" },
              { value: "10M+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Trading with Chaincola Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users worldwide and experience the future of crypto
            trading
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90">
            Create Account
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Chaincola</h3>
              <p className="text-gray-400">
                The next generation cryptocurrency trading platform for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Exchange</li>
                <li>Trading</li>
                <li>Wallet</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Documentation</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Compliance</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Chaincola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
