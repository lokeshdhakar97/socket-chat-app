"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthContext } from "@/context/AuthContext";
import { signInWithGoogle } from "@/lib/authFunction";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginAndSignup() {
  const { user } = useAuthContext();
  const router = useRouter();

  if (user) router.replace("/");

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-6">
      <Image alt="logo" src="/logo.png" width={200} height={70} />
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Login an account</CardTitle>
              <CardDescription>
                Welcome Back! Your Conversations Await in the World of Together.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="w-full ">
                <Button className="w-full" onClick={signInWithGoogle}>
                  <Icons.google className="mr-2 h-4 w-4" />
                  Login with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Joining Together is the First Step to Endless Conversations.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="w-full ">
                <Button className="w-full" onClick={signInWithGoogle}>
                  <Icons.google className="mr-2 h-4 w-4" />
                  Singup with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
