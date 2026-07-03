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
      className={`row-center h-full antialiased`}
    >
      <body className="col-center w-full min-h-full max-w-7xl px-4 tracking-tight font-rubik-medium selection:text-secondary">{children}</body>
    </html>
  );
}

export default RootLayout;