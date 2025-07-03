import Navbar from "@/app/(home)/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
}
