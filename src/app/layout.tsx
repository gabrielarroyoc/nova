import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"


import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ClerkProvider, SignedOut, SignIn, SignedIn } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Nova",
  description: "Seu guia para um futuro financeiro brilhante.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
      <ClerkProvider>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider >
            <AppSidebar />
            <main suppressHydrationWarning>
              <SignedOut>
                <SignIn routing="hash" />
              </SignedOut>
            <div  className="h-screen flex justify-center items-center">
              <SignedIn>
              {children}
              </SignedIn>
            </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
    
  );
}