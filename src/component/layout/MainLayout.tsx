import React from "react";
import Header from "./Header";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
}
