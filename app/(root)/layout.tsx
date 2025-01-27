import type { Metadata } from "next";
import { Header, HeaderMenu, Categories } from "@/components/shared";

export const metadata: Metadata = {
  title: "Dblnics | Main Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"min-h-screen"}>
      <Header />
      <HeaderMenu />
      <Categories />
      {children}
    </main>
  );
}
