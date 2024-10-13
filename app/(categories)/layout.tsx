import type { Metadata } from "next";
import { Header, HeaderMenu, Categories } from "@/components/shared";

export const metadata: Metadata = {
  title: "Dblnics | Product Page",
};

export default function ProductLayout({
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
