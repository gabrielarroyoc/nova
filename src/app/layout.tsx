import type { Metadata } from "next";
import "./globals.css";

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Nova",
  description: "Seu guia para um futuro financeiro brilhante.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="pt-BR" suppressHydrationWarning>
        <body>
          {children}
        </body>
    </html>
    </ClerkProvider>
  );
}