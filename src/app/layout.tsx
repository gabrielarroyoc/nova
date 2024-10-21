import type { Metadata } from "next";
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Nova",
  description: "Seu guia para um futuro financeiro brilhante.",
};

export default function RootLayout({  }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <div>
        <SidebarProvider>
          <AppSidebar />
          <main>
          </main>
        </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
  


