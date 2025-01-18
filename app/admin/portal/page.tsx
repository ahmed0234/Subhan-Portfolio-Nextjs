"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import Adminportal from "@/components/Adminportal";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "subhansigma" && password === "rajasubhansigma123") {
      // Simulate successful login
      setAuthenticated(true);
      console.log("Login successful");
    } else {
      toast.error("You are not Admin Pussy!");
      setError("Invalid username or password");
    }
  };

  return (
    <>
      {authenticated ? (
        <Adminportal />
      ) : (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-zinc-900 text-yellow-400 border-yellow-400">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Login
              </CardTitle>
              <CardDescription className="text-zinc-400 text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-yellow-400">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-zinc-800 border-yellow-400 text-yellow-400 placeholder-zinc-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-yellow-400">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-zinc-800 border-yellow-400 text-yellow-400 placeholder-zinc-500"
                    required
                  />
                </div>
                {error && (
                  <div className="flex items-center space-x-2 text-red-500">
                    <AlertCircle size={16} />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-zinc-950 hover:bg-yellow-500"
                >
                  Log in
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}
