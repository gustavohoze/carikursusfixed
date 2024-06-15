
import { Inter, Poppins } from "next/font/google";
import LoginHeader from "./component/LoginHeader";
import Footer from "../Footer";
const poppins = Poppins({weight:"600", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LoginHeader></LoginHeader>
        {children}
        <Footer />
        </body>
    </html>
  );
}
