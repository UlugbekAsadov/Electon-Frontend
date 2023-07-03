import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "@/react-query/react-query-client";
import { AuthContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
