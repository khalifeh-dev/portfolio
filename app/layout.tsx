import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khalifeh-dev",
  description: "I'm full stack developer.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-7xl px-4 tracking-tight font-rubik-medium">{children}</body>
    </html>
  );
}

export default RootLayout;