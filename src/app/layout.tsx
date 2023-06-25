import { AppDrawer } from "@/components/navigation/drawer";
import "./globals.css";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "1A Informática",
  description: "A página da melhor sala do IFRO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const drawerId = "app-drawer";

  return (
    <html data-theme="cupcake" lang="en">
      <body className={inter.className}>
        <AppDrawer id={drawerId}>
          <TopBar drawerId={drawerId}></TopBar>
          <div className="bg-base-100 w-full flex justify-center p-6 mt-16">
            <div className="bg-base-200 rounded-box w-full sm:max-w-5xl flex flex-col items-center justify-center p-6 prose drop-shadow-lg">
              {children}
            </div>
          </div>
        </AppDrawer>
      </body>
    </html>
  );
}
