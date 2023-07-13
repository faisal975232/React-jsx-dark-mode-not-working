import { ThemeProvider } from "@/theme-provider";
import { SiteHeader } from "@/site-header";
import { TailwindIndicator } from "@/tailwind-indicator";
import { Outlet } from "react-router-dom";
import Testing from "Testing";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen flex-col">
       
          <SiteHeader />
          <div className="flex-1">
            {" "}
            <Outlet />
            
          </div>
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </div>
  );
}
