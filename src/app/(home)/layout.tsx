import Navbar from "@/app/(home)/Navbar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <div className="flex-1 bg-[#F4F4F0] justify-center items-center flex w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
