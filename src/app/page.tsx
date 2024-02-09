import ChatBoard from "@/components/ChatBoard";
import { DarkMode } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ChatBoard />
    </main>
  );
}
